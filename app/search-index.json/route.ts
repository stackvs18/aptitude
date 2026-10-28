import { TOPICS } from "@/lib/topics";
import { getAllGuideHeadings, getFormulaGroups, renderGfgNote } from "@/lib/markdown";
import { GFG_TOPICS } from "@/lib/gfg";
import { getQuestionsForTopic } from "@/lib/questions";
import { htmlToPlainText } from "@/lib/inline-markdown";
import type { SearchEntry } from "@/lib/types";

// Built once at build time and served as a static file
export const dynamic = "force-static";

const PAGES: SearchEntry[] = [
  { kind: "page", title: "All MCQs", context: "Every question with the answer highlighted", href: "/questions", searchText: "all mcqs questions answer key bank" },
  { kind: "page", title: "GfG notes", context: "Every topic on the GeeksforGeeks aptitude page", href: "/gfg", searchText: "gfg geeksforgeeks notes reference college" },
  { kind: "page", title: "Mock test", context: "Timed mixed test", href: "/mock", searchText: "mock test exam timed quiz" },
  { kind: "page", title: "Formula sheet", context: "Last-hour revision", href: "/formulas", searchText: "formula sheet formulas revision cheat sheet toolkit traps strategy" },
  { kind: "page", title: "Mistakes", context: "Questions you got wrong", href: "/mistakes", searchText: "mistakes wrong review retry" },
];

// The list the Ctrl K search box searches: pages, topics, guide sections, formulas and every question.
export async function GET() {
  const searchIndex: SearchEntry[] = [...PAGES];
  const guideHeadings = await getAllGuideHeadings();

  for (const topic of TOPICS) {
    // Step 1: the topic itself
    searchIndex.push({
      kind: "topic",
      title: topic.title,
      context: topic.summary,
      href: `/learn/${topic.slug}`,
      searchText: `${topic.title} ${topic.summary}`,
    });

    // Step 2: each "## " section of its guide
    for (const heading of guideHeadings[topic.slug]) {
      searchIndex.push({
        kind: "section",
        title: heading.text,
        context: `${topic.title} guide`,
        href: `/learn/${topic.slug}#${heading.id}`,
        searchText: `${heading.text} ${topic.title}`,
      });
    }

    // Step 3: every question (found by its words and its options)
    for (const question of getQuestionsForTopic(topic.slug)) {
      const questionText = htmlToPlainText(question.questionHtml);
      let optionsText = "";
      for (const option of question.options) {
        optionsText = optionsText + " " + htmlToPlainText(option.html);
      }
      searchIndex.push({
        kind: "question",
        title: questionText,
        context: `${topic.title} · Q${question.number}`,
        href: `/practice/${topic.slug}#q-${question.number}`,
        searchText: `${questionText} ${optionsText} ${topic.title}`,
      });
    }
  }

  // Step 4: GeeksforGeeks notes and their sections
  for (const gfgTopic of GFG_TOPICS) {
    searchIndex.push({
      kind: "topic",
      title: `${gfgTopic.title} (GfG notes)`,
      context: "GeeksforGeeks notes",
      href: `/gfg/${gfgTopic.slug}`,
      searchText: `${gfgTopic.title} gfg geeksforgeeks notes`,
    });
    const note = await renderGfgNote(gfgTopic.slug);
    for (const heading of note.headings) {
      searchIndex.push({
        kind: "section",
        title: heading.text,
        context: `${gfgTopic.title} · GfG notes`,
        href: `/gfg/${gfgTopic.slug}#${heading.id}`,
        searchText: `${heading.text} ${gfgTopic.title}`,
      });
    }
  }

  // Step 5: formula sheet cards
  for (const group of await getFormulaGroups()) {
    searchIndex.push({
      kind: "section",
      title: `${group.title} formulas`,
      context: "Formula sheet",
      href: "/formulas",
      searchText: `${group.title} formulas ${htmlToPlainText(group.html)}`,
    });
  }

  return Response.json(searchIndex);
}
