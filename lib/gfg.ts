// The GeeksforGeeks notes: one short note per topic on the GfG
// "Aptitude Questions and Answers" page (the college's reference link).
// The notes are written in our own words and link back to each original page.

export type GfgSection = "quant" | "reasoning" | "verbal";

export type GfgTopic = {
  slug: string;
  title: string;
  section: GfgSection;
  sourceUrl: string; // the GeeksforGeeks explanation page
  handbookSlug: string | null; // our own full guide for the same topic, if we have one
};

export const GFG_SECTIONS: { id: GfgSection; name: string; summary: string }[] = [
  { id: "quant", name: "Quantitative Aptitude", summary: "Numbers to data interpretation: every formula and shortcut." },
  { id: "reasoning", name: "Logical Reasoning", summary: "Series, analogies, blood relations, directions, coding and statement questions." },
  { id: "verbal", name: "Verbal Ability", summary: "Grammar rules, vocabulary, voice, speech and reading questions." },
];

export const GFG_TOPICS: GfgTopic[] = [
  { slug: "numbers", title: "Numbers", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/numbers-in-aptitude/", handbookSlug: "number-system" },
  { slug: "divisibility-rules", title: "Divisibility Rules", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/divisibility-rules/", handbookSlug: "number-system" },
  { slug: "lcm-hcf", title: "LCM and HCF", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/hcf-and-lcm/", handbookSlug: "hcf-lcm" },
  { slug: "ratio-proportion", title: "Ratio, Proportion", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/ratio-and-proportion/", handbookSlug: "ratio" },
  { slug: "average", title: "Average", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/average/", handbookSlug: "average" },
  { slug: "ages", title: "Problem on Age", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/ages/", handbookSlug: null },
  { slug: "percentages", title: "Percentages", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/percentage/", handbookSlug: "percentage" },
  { slug: "profit-loss", title: "Profit and Loss", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/profit-loss/", handbookSlug: "profit-loss" },
  { slug: "mixture-alligation", title: "Mixture and Alligations", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/mixtures-and-alligation/", handbookSlug: "alligation" },
  { slug: "simple-interest", title: "Simple Interest", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/simple-interest/", handbookSlug: "simple-interest" },
  { slug: "compound-interest", title: "Compound Interest", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/compound-interest-formula/", handbookSlug: null },
  { slug: "time-speed-distance", title: "Time, Speed, and Distance", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/speed-time-distance/", handbookSlug: "speed-distance" },
  { slug: "trains-boats-streams", title: "Trains, Boats, and Streams", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/boats-and-streams/", handbookSlug: "trains" },
  { slug: "race", title: "Race", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/race-and-games/", handbookSlug: "races" },
  { slug: "work-wages", title: "Work and Wages", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/time-work-and-wages/", handbookSlug: "time-work" },
  { slug: "pipes-cistern", title: "Pipes and Cistern", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/pipes-and-cistern/", handbookSlug: "pipes" },
  { slug: "algebra", title: "Algebra", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/basics-of-algebra/", handbookSlug: null },
  { slug: "mensuration-2d", title: "Mensuration 2D", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/2d-mensuration/", handbookSlug: null },
  { slug: "mensuration-3d", title: "Mensuration 3D", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/3d-mensuration/", handbookSlug: null },
  { slug: "geometry", title: "Geometry", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/basic-geometry-formulas/", handbookSlug: null },
  { slug: "height-distance", title: "Trigonometry & Height and Distances", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/height-and-distance/", handbookSlug: null },
  { slug: "progressions", title: "Progressions", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/progressions-for-aptitude/", handbookSlug: null },
  { slug: "logarithms", title: "Logarithms", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/introduction-to-logarithm/", handbookSlug: null },
  { slug: "permutation-combination", title: "Permutation and Combination", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/permutations-and-combinations/", handbookSlug: null },
  { slug: "probability", title: "Probability", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/maths/basic-concepts-of-probability/", handbookSlug: null },
  { slug: "clocks", title: "Clocks", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/clocks-aptitude/", handbookSlug: "reasoning-misc" },
  { slug: "calendars", title: "Calendars", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/calendars/", handbookSlug: "calendar" },
  { slug: "simplification", title: "Simplification and Approximation", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/simplification-and-approximation/", handbookSlug: null },
  { slug: "data-interpretation", title: "Data Interpretation", section: "quant", sourceUrl: "https://www.geeksforgeeks.org/aptitude/data-interpretation-1/", handbookSlug: null },
  { slug: "number-series", title: "Number Series", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/number-series-in-quantitative-aptitude/", handbookSlug: "reasoning-misc" },
  { slug: "letter-symbol-series", title: "Letter and Symbol Series", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/alphanumeric-series/", handbookSlug: null },
  { slug: "verbal-classification", title: "Verbal Classification", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/classification-logical-reasoning-question-and-answer/", handbookSlug: "reasoning-misc" },
  { slug: "analogies", title: "Analogies", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/ssc-banking/word-analogy-for-ssc-cgl-exams/", handbookSlug: "reasoning-misc" },
  { slug: "logical-problems", title: "Logical Problems", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/logical-problems-logical-reasoning-questions-and-answers/", handbookSlug: null },
  { slug: "course-of-action", title: "Course of Action", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/assumptions-and-conclusions-courses-of-action/", handbookSlug: null },
  { slug: "statement-conclusion", title: "Statement and Conclusion", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/statement-and-conclusion-analytical-and-logical-reasoning/", handbookSlug: null },
  { slug: "theme-detection", title: "Theme Detection", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/theme-detection/", handbookSlug: null },
  { slug: "blood-relations", title: "Blood Relations", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/blood-relation-reasoning/", handbookSlug: "blood-relations" },
  { slug: "directions", title: "Directions", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/puzzles-direction/", handbookSlug: "directions" },
  { slug: "statement-argument", title: "Statement and Argument", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/statement-and-argument-analytical-reasoning/", handbookSlug: null },
  { slug: "logical-deduction", title: "Logical Deduction", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/logical-deduction-questions-and-answers/", handbookSlug: null },
  { slug: "letter-series", title: "Letter Series", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/letter-series-reasoning-questions/", handbookSlug: "reasoning-misc" },
  { slug: "coding-decoding", title: "Coding Decoding", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/reasoning-tricks-to-solve-coding-decoding/", handbookSlug: "coding" },
  { slug: "statement-assumptions", title: "Statement and Assumptions", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/statement-and-assumption/", handbookSlug: null },
  { slug: "venn-diagram", title: "Logical Venn Diagram", section: "reasoning", sourceUrl: "https://www.geeksforgeeks.org/aptitude/venn-diagrams-verbal-reasoning-questions-and-answers/", handbookSlug: "reasoning-misc" },
  { slug: "spotting-errors", title: "Spotting Errors", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/tricks-to-solve-spotting-errors/", handbookSlug: null },
  { slug: "synonyms", title: "Synonyms", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/synonyms/", handbookSlug: null },
  { slug: "antonyms", title: "Antonyms", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/antonyms/", handbookSlug: null },
  { slug: "selecting-words", title: "Selecting Words", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/selecting-words/", handbookSlug: null },
  { slug: "spellings", title: "Spellings", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/spellings/", handbookSlug: null },
  { slug: "sentence-formation", title: "Sentence Formation", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/verbal-ability-sentence-formation/", handbookSlug: null },
  { slug: "ordering-of-words", title: "Ordering of Words", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/ordering-of-words/", handbookSlug: null },
  { slug: "sentence-correction", title: "Sentence Correction", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/sentence-correction-verbal-ability/", handbookSlug: null },
  { slug: "sentence-improvement", title: "Sentence Improvement", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/sentence-improvement/", handbookSlug: null },
  { slug: "completing-statements", title: "Completing Statements", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/sentence-completion-with-examples/", handbookSlug: null },
  { slug: "para-jumbles", title: "Para Jumbles", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/para-jumbles-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "paragraph-formation", title: "Paragraph Formation", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/paragraphs-formation/", handbookSlug: null },
  { slug: "cloze-test", title: "Cloze Test", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/cloze-test-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "comprehension", title: "Comprehension", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/reading-comprehension-questions/", handbookSlug: null },
  { slug: "one-word-substitutes", title: "One Word Substitutes", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/one-word-substitutes-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "idioms-phrases", title: "Idioms and Phrases", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/30-most-common-idioms-and-phrases/", handbookSlug: null },
  { slug: "change-of-voice", title: "Change of Voice", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/english/change-of-voice-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "change-of-speech", title: "Change of Speech", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/change-of-speech-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "verbal-analogies", title: "Verbal Analogies", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/verbal-analogies-types-with-examples/", handbookSlug: null },
  { slug: "articles", title: "Articles", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/ssc-banking/definite-and-indefinite-articles/", handbookSlug: null },
  { slug: "preposition", title: "Preposition", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/preposition-verbal-ability-questions-and-answers/", handbookSlug: null },
  { slug: "adjectives", title: "Adjectives", section: "verbal", sourceUrl: "https://www.geeksforgeeks.org/aptitude/adjective/", handbookSlug: null },
];

// Returns the topics in one section, in the order GeeksforGeeks lists them.
export function getGfgTopicsInSection(sectionId: GfgSection): GfgTopic[] {
  const topicsInSection: GfgTopic[] = [];
  for (const topic of GFG_TOPICS) {
    if (topic.section === sectionId) {
      topicsInSection.push(topic);
    }
  }
  return topicsInSection;
}

// Finds one note by slug, with the notes before and after it. Null if unknown.
export function getGfgTopic(slug: string) {
  for (let position = 0; position < GFG_TOPICS.length; position++) {
    const topic = GFG_TOPICS[position];
    if (topic.slug !== slug) {
      continue;
    }
    let sectionName = "";
    for (const section of GFG_SECTIONS) {
      if (section.id === topic.section) {
        sectionName = section.name;
      }
    }
    const previousTopic = position > 0 ? GFG_TOPICS[position - 1] : null;
    const nextTopic = position < GFG_TOPICS.length - 1 ? GFG_TOPICS[position + 1] : null;
    return { topic, sectionName, previousTopic, nextTopic };
  }
  return null;
}
