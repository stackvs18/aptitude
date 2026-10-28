import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { GFG_TOPICS, getGfgTopic } from "@/lib/gfg";
import { getTopicTitle } from "@/lib/topics";
import { renderGfgNote } from "@/lib/markdown";

// Only the known notes exist; anything else is a 404
export const dynamicParams = false;

// Builds one page per GeeksforGeeks note at build time.
export function generateStaticParams() {
  const allParams: { slug: string }[] = [];
  for (const topic of GFG_TOPICS) {
    allParams.push({ slug: topic.slug });
  }
  return allParams;
}

// Sets the browser tab title for this note.
export async function generateMetadata({ params }: PageProps<"/gfg/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = getGfgTopic(slug);
  if (found === null) {
    return {};
  }
  return { title: `${found.topic.title} (GfG notes)`, description: `Notes on ${found.topic.title} from the GeeksforGeeks aptitude page.` };
}

// One GeeksforGeeks note, with links to the original page and to our own full guide.
export default async function GfgNotePage({ params }: PageProps<"/gfg/[slug]">) {
  const { slug } = await params;
  const found = getGfgTopic(slug);
  if (found === null) {
    notFound();
  }
  const { topic, sectionName, onExamList, previousTopic, nextTopic } = found;
  const note = await renderGfgNote(slug);

  return (
    <main id="main" className="mx-auto max-w-[1120px] px-5 pb-24 pt-10 sm:px-8 sm:pt-14 xl:px-12">
      <header className="mb-10 max-w-[720px]">
        <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2">
          <Link href={onExamList ? "/gfg#exam-list" : "/gfg#other-topics"} className="hover:text-fg">
            GfG notes · {sectionName}
          </Link>
          {!onExamList && <span className="tag tag-warn">Not in exam list</span>}
        </p>
        <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">{topic.title}</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={topic.sourceUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-ghost">
            Original on GeeksforGeeks <ArrowUpRight size={14} />
          </a>
          {topic.handbookSlug !== null && (
            <Link href={`/learn/${topic.handbookSlug}`} className="btn btn-sm btn-ghost">
              <BookOpen size={14} /> Full guide: {getTopicTitle(topic.handbookSlug)}
            </Link>
          )}
        </div>
      </header>

      <div className="prose max-w-[720px]" dangerouslySetInnerHTML={{ __html: note.html }} />

      <nav className="mt-16 grid max-w-[720px] gap-3 sm:grid-cols-2" aria-label="Note navigation">
        {previousTopic !== null ? (
          <Link href={`/gfg/${previousTopic.slug}`} className="card group p-5">
            <span className="flex items-center gap-2 text-xs text-faint">
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
              Previous
            </span>
            <span className="mt-2 block font-medium leading-snug">{previousTopic.title}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {nextTopic !== null && (
          <Link href={`/gfg/${nextTopic.slug}`} className="card group p-5 text-right">
            <span className="flex items-center justify-end gap-2 text-xs text-faint">
              Next
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="mt-2 block font-medium leading-snug">{nextTopic.title}</span>
          </Link>
        )}
      </nav>
    </main>
  );
}
