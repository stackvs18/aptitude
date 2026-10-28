import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GFG_SECTIONS, GFG_TOPICS, getGfgTopicsInSection } from "@/lib/gfg";
import { twoDigits } from "@/lib/topics";

export const metadata: Metadata = {
  title: "GfG notes",
  description: "Short notes for every topic on the GeeksforGeeks Aptitude Questions and Answers page: quant, reasoning and verbal.",
};

const HUB_URL = "https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/";

// The list of every GeeksforGeeks note, grouped into the hub page's three sections.
export default function GfgIndexPage() {
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
          page: {GFG_TOPICS.length} in all. Each note covers every section of its GfG page with the formulas, tricks and an
          example, and links to the original.
        </p>
      </header>

      <div className="flex max-w-[760px] flex-col gap-12">
        {GFG_SECTIONS.map((section) => {
          const sectionTopics = getGfgTopicsInSection(section.id);
          return (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <div className="flex items-baseline justify-between gap-3 border-b border-line-strong pb-2.5">
                <h2 className="text-[1.05rem] font-semibold">{section.name}</h2>
                <span className="font-mono text-[0.7rem] text-faint">{sectionTopics.length} notes</span>
              </div>
              <p className="mt-2 text-[0.88rem] text-muted">{section.summary}</p>
              <ul className="mt-2">
                {sectionTopics.map((topic) => {
                  // Notes are numbered 1..N across all sections, in the hub page's order
                  const noteNumber = GFG_TOPICS.indexOf(topic) + 1;
                  return (
                    <li key={topic.slug} className="flex items-center gap-3.5 border-b border-line py-3">
                      <span className="w-6 shrink-0 font-mono text-[0.72rem] tabular-nums text-faint">
                        {twoDigits(noteNumber)}
                      </span>
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
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
