import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GFG_READING_ORDER, GFG_SECTIONS, GFG_TOPICS, getGfgTopicsInGroup, type GfgTopic } from "@/lib/gfg";
import { twoDigits } from "@/lib/topics";

export const metadata: Metadata = {
  title: "GfG notes",
  description: "Short notes for every topic on the GeeksforGeeks Aptitude Questions and Answers page, with the exam-list topics first.",
};

const HUB_URL = "https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/";

// One numbered row: the note's title and a link to the original GfG page.
function NoteRow({ topic }: { topic: GfgTopic }) {
  const noteNumber = GFG_READING_ORDER.indexOf(topic) + 1;
  return (
    <li className="flex items-center gap-3.5 border-b border-line py-3">
      <span className="w-6 shrink-0 font-mono text-[0.72rem] tabular-nums text-faint">{twoDigits(noteNumber)}</span>
      <Link href={`/gfg/${topic.slug}`} className="flex-1 font-medium hover:underline hover:underline-offset-4">
        {topic.title}
      </Link>
      <a
        href={topic.sourceUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`${topic.title} on GeeksforGeeks`}
        className="icon-btn h-8 w-8"
      >
        <ArrowUpRight size={15} />
      </a>
    </li>
  );
}

// The notes of one group (exam list or not), split into Quant / Reasoning / Verbal.
function NoteGroup({ onExamList }: { onExamList: boolean }) {
  return (
    <div className="flex flex-col gap-10">
      {GFG_SECTIONS.map((section) => {
        const sectionTopics = getGfgTopicsInGroup(section.id, onExamList);
        if (sectionTopics.length === 0) {
          return null;
        }
        return (
          <section key={section.id}>
            <div className="flex items-baseline justify-between gap-3 border-b border-line-strong pb-2.5">
              <h3 className="text-[1rem] font-semibold">{section.name}</h3>
              <span className="font-mono text-[0.7rem] text-faint">{sectionTopics.length} notes</span>
            </div>
            <ul>
              {sectionTopics.map((topic) => (
                <NoteRow key={topic.slug} topic={topic} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

// Counts the notes in one group, across all three sections.
function countGroup(onExamList: boolean): number {
  let total = 0;
  for (const section of GFG_SECTIONS) {
    total = total + getGfgTopicsInGroup(section.id, onExamList).length;
  }
  return total;
}

// Every GeeksforGeeks note: the topics on the college's exam list first,
// then everything else on the GfG page, kept separate below.
export default function GfgIndexPage() {
  const examListCount = countGroup(true);
  const otherCount = countGroup(false);

  return (
    <main id="main" className="mx-auto max-w-[1120px] px-5 pb-24 pt-10 sm:px-8 sm:pt-14 xl:px-12">
      <header className="mb-12 max-w-[760px]">
        <p className="eyebrow">College reference · GeeksforGeeks</p>
        <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
          GfG notes <em className="text-muted">for every topic.</em>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          One note per topic on the GeeksforGeeks{" "}
          <a href={HUB_URL} target="_blank" rel="noreferrer" className="text-link">
            Aptitude Questions and Answers
          </a>{" "}
          page: {GFG_TOPICS.length} in all. Topics on your exam list come first. Everything else on the GfG page is kept
          separately under Other topics.
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          <a href="#exam-list" className="inline-flex h-[26px] items-center rounded-full border border-line bg-surface px-2.5 text-[0.78rem] text-muted transition-colors hover:border-line-strong hover:text-fg">
            In your exam list · {examListCount}
          </a>
          <a href="#other-topics" className="inline-flex h-[26px] items-center rounded-full border border-line bg-surface px-2.5 text-[0.78rem] text-muted transition-colors hover:border-line-strong hover:text-fg">
            Other topics · {otherCount}
          </a>
        </div>
      </header>

      <div className="max-w-[760px]">
        <section id="exam-list" className="scroll-mt-20">
          <p className="eyebrow">Part 1 · Study these</p>
          <h2 className="mt-3 font-serif text-[1.9rem] leading-tight tracking-[-0.015em]">In your exam list</h2>
          <p className="mb-8 mt-2 text-[0.92rem] text-muted">
            The 21 IMP topics. Partnership and Chain Rule have no GfG page, so read their full guides in the handbook.
            Miscellaneous Reasoning covers series, odd one out, analogies, clocks and Venn diagrams.
          </p>
          <NoteGroup onExamList={true} />
        </section>

        <section id="other-topics" className="mt-20 scroll-mt-20 border-t border-line pt-12">
          <p className="eyebrow">Part 2 · Only if you have time</p>
          <h2 className="mt-3 font-serif text-[1.9rem] leading-tight tracking-[-0.015em]">Other topics</h2>
          <p className="mb-8 mt-2 text-[0.92rem] text-muted">
            On the GfG page but not on your college’s exam list.
          </p>
          <NoteGroup onExamList={false} />
        </section>
      </div>
    </main>
  );
}
