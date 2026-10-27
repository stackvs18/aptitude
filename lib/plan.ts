// Tonight's study plan: eight blocks in the order that builds fastest.

export type PlanLink = { label: string; href: string };

export type PlanBlock = {
  time: string;
  title: string;
  why: string;
  links: PlanLink[];
};

export const STUDY_PLAN: PlanBlock[] = [
  {
    time: "1h 15m",
    title: "Calculation toolkit, Percentage, Profit & Loss",
    why: "Percent is the language of half the paper.",
    links: [
      { label: "Calculation toolkit", href: "/formulas#toolkit" },
      { label: "Percentage", href: "/learn/percentage" },
      { label: "Profit & Loss", href: "/learn/profit-loss" },
    ],
  },
  {
    time: "1h",
    title: "Simple Interest, Ratio, Partnership, Alligation",
    why: "All four are percent or ratio in disguise.",
    links: [
      { label: "Simple Interest", href: "/learn/simple-interest" },
      { label: "Ratio & Proportion", href: "/learn/ratio" },
      { label: "Partnership", href: "/learn/partnership" },
      { label: "Alligation & Mixture", href: "/learn/alligation" },
    ],
  },
  {
    time: "1h 15m",
    title: "Time & Work, Pipes, Chain Rule",
    why: "One method, LCM units, solves all three.",
    links: [
      { label: "Time & Work", href: "/learn/time-work" },
      { label: "Pipes & Cisterns", href: "/learn/pipes" },
      { label: "Chain Rule", href: "/learn/chain-rule" },
    ],
  },
  {
    time: "1h 30m",
    title: "Speed & Distance, Trains, Boats, Races",
    why: "One formula, D = S × T, solves all four.",
    links: [
      { label: "Time, Speed & Distance", href: "/learn/speed-distance" },
      { label: "Problems on Trains", href: "/learn/trains" },
      { label: "Boats & Streams", href: "/learn/boats" },
      { label: "Races & Games", href: "/learn/races" },
    ],
  },
  {
    time: "1h",
    title: "Number System, HCF & LCM, Average",
    why: "Rules and pattern recognition.",
    links: [
      { label: "Number System", href: "/learn/number-system" },
      { label: "HCF & LCM", href: "/learn/hcf-lcm" },
      { label: "Average", href: "/learn/average" },
    ],
  },
  {
    time: "45m",
    title: "Calendar",
    why: "Mechanical, so it is free marks once learned.",
    links: [{ label: "Calendar", href: "/learn/calendar" }],
  },
  {
    time: "1h 15m",
    title: "Directions, Blood Relations, Coding, Misc. reasoning",
    why: "Fast to learn and high scoring.",
    links: [
      { label: "Direction Sense", href: "/learn/directions" },
      { label: "Blood Relations", href: "/learn/blood-relations" },
      { label: "Coding–Decoding", href: "/learn/coding" },
      { label: "Misc. Reasoning", href: "/learn/reasoning-misc" },
    ],
  },
  {
    time: "1h",
    title: "Redo your mistakes, then read the formula sheet",
    why: "This is what locks it in. Take a mock test if you have time.",
    links: [
      { label: "Mistakes", href: "/mistakes" },
      { label: "Formula sheet", href: "/formulas" },
      { label: "Mock test", href: "/mock" },
    ],
  },
];
