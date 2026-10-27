// The table of contents: every syllabus unit and every topic, in exam order.
// This file has no server-only code, so both pages and client components can import it.

export type Unit = {
  id: string;
  name: string;
  syllabusLabel: string; // e.g. "Unit 7 · 13%" from the official LJU syllabus
};

export type Topic = {
  slug: string;
  number: number;
  title: string;
  summary: string;
  source: string; // where the questions come from in the book
  unitId: string;
};

export const UNITS: Unit[] = [
  { id: "number", name: "Number System", syllabusLabel: "Unit 3 · 11%" },
  { id: "clerical", name: "Clerical Aptitude", syllabusLabel: "Unit 7 · 13%" },
  { id: "arithmetic", name: "Arithmetic Aptitude", syllabusLabel: "Unit 8 · 4%" },
  { id: "physical", name: "Physical Aptitude", syllabusLabel: "Unit 9 · 13%" },
  { id: "problem-solving", name: "Problem Solving", syllabusLabel: "Unit 10 · 4%" },
  { id: "reasoning", name: "Logical Reasoning", syllabusLabel: "Units 1–2 · 33%" },
];

export const TOPICS: Topic[] = [
  { slug: "number-system", number: 1, title: "Number System", summary: "Divisibility, unit digits, remainders and trailing zeros.", source: "Book ch. 1", unitId: "number" },
  { slug: "hcf-lcm", number: 2, title: "HCF & LCM", summary: "Greatest-divides vs least-multiple, remainders, tiles and bells.", source: "Book ch. 2", unitId: "number" },
  { slug: "average", number: 3, title: "Average", summary: "Totals, replacements, cricket averages and average speed.", source: "Book ch. 6", unitId: "number" },
  { slug: "percentage", number: 4, title: "Percentage", summary: "Percent of what, successive changes, elections and exams.", source: "Book ch. 11", unitId: "clerical" },
  { slug: "profit-loss", number: 5, title: "Profit & Loss", summary: "C.P., S.P., discounts, false weights and article swaps.", source: "Book ch. 12", unitId: "clerical" },
  { slug: "simple-interest", number: 6, title: "Simple Interest", summary: "P × R × T / 100 and every rearrangement of it.", source: "Book ch. 22", unitId: "clerical" },
  { slug: "ratio", number: 7, title: "Ratio & Proportion", summary: "Combining ratios, proportionals, coins and incomes.", source: "Book ch. 13", unitId: "arithmetic" },
  { slug: "alligation", number: 8, title: "Alligation & Mixture", summary: "The cross rule for prices, concentrations and replacement.", source: "Book ch. 21", unitId: "arithmetic" },
  { slug: "partnership", number: 9, title: "Partnership", summary: "Profit shared by capital × time.", source: "Book ch. 14", unitId: "clerical" },
  { slug: "time-work", number: 10, title: "Time & Work", summary: "The LCM units method for people working together.", source: "Book ch. 17", unitId: "physical" },
  { slug: "pipes", number: 11, title: "Pipes & Cisterns", summary: "Time & Work with inlets and leaks.", source: "Book ch. 16", unitId: "physical" },
  { slug: "chain-rule", number: 12, title: "Chain Rule", summary: "Direct and inverse proportion, M₁D₁H₁ = M₂D₂H₂.", source: "Book ch. 15", unitId: "physical" },
  { slug: "speed-distance", number: 13, title: "Time, Speed & Distance", summary: "D = S × T, relative speed, late and early.", source: "Book ch. 18", unitId: "physical" },
  { slug: "trains", number: 14, title: "Problems on Trains", summary: "Crossing poles, platforms and other trains.", source: "Book ch. 20", unitId: "physical" },
  { slug: "boats", number: 15, title: "Boats & Streams", summary: "Downstream adds, upstream subtracts.", source: "Book ch. 19", unitId: "physical" },
  { slug: "races", number: 16, title: "Races & Games", summary: "Starts, beats and dead heats.", source: "Book ch. 26", unitId: "problem-solving" },
  { slug: "calendar", number: 17, title: "Calendar", summary: "Odd days, leap years and repeating calendars.", source: "Book ch. 27", unitId: "reasoning" },
  { slug: "directions", number: 18, title: "Direction Sense", summary: "Turns, shadows and Pythagoras.", source: "Reasoning book", unitId: "reasoning" },
  { slug: "blood-relations", number: 19, title: "Blood Relations", summary: "Decode backwards and draw the tree.", source: "Reasoning book", unitId: "reasoning" },
  { slug: "coding", number: 20, title: "Coding–Decoding", summary: "Shifts, reversals, opposite letters and number codes.", source: "Reasoning book", unitId: "reasoning" },
  { slug: "reasoning-misc", number: 21, title: "Misc. Reasoning", summary: "Series, odd one out, analogy, clocks and ranking.", source: "Book ch. 28, 35", unitId: "reasoning" },
];

// Topics 18–20 come from the Reasoning book, which the student doesn't have,
// so their questions are written in that book's style.
export const BOOK_STYLE_TOPIC_SLUGS = ["directions", "blood-relations", "coding"];

// Returns the topics that belong to one unit, in topic-number order.
export function getTopicsInUnit(unitId: string): Topic[] {
  const topicsInUnit: Topic[] = [];
  for (const topic of TOPICS) {
    if (topic.unitId === unitId) {
      topicsInUnit.push(topic);
    }
  }
  return topicsInUnit;
}

// Finds one topic by its slug, plus its unit and the topics before and after it.
// Returns null when no topic has that slug.
export function getTopic(slug: string) {
  for (let position = 0; position < TOPICS.length; position++) {
    const topic = TOPICS[position];
    if (topic.slug !== slug) {
      continue;
    }

    let unit: Unit | null = null;
    for (const candidateUnit of UNITS) {
      if (candidateUnit.id === topic.unitId) {
        unit = candidateUnit;
      }
    }

    const previousTopic = position > 0 ? TOPICS[position - 1] : null;
    const nextTopic = position < TOPICS.length - 1 ? TOPICS[position + 1] : null;
    return { topic, unit: unit as Unit, previousTopic, nextTopic };
  }
  return null;
}

// Turns a topic slug into its title, e.g. "hcf-lcm" -> "HCF & LCM".
export function getTopicTitle(slug: string): string {
  for (const topic of TOPICS) {
    if (topic.slug === slug) {
      return topic.title;
    }
  }
  return slug;
}

// Pads a number to two digits for the "04" style labels.
export function twoDigits(value: number): string {
  return String(value).padStart(2, "0");
}
