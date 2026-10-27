import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UNITS, getTopicsInUnit, twoDigits } from "@/lib/topics";
import { getAnswerKey, getQuestionCounts } from "@/lib/questions";
import { ContinueButton, Greeting, HomeStats, StudyPlan, TopicProgress } from "@/components/home-widgets";

// Lines in the little "last-hour.txt" terminal card in the hero
const HERO_FORMULAS = [
  "distance   = speed × time",
  "km/h → m/s = × 5/18",
  "avg speed  = 2xy / (x + y)",
  "gain %     = gain / C.P. × 100",
  "S.I.       = P × R × T / 100",
  "HCF × LCM  = a × b",
  "odd days   = 1 ordinary, 2 leap",
];

const ROUTES = [
  {
    who: "Haven’t started",
    title: "Follow the plan",
    text: "Eight blocks in the order that builds fastest. Every block links to its guides.",
    href: "/#plan",
    action: "See the plan",
  },
  {
    who: "Know the basics",
    title: "Take a mock test",
    text: "20 to 60 mixed questions against the clock, with a unit-by-unit breakdown at the end.",
    href: "/mock",
    action: "Start a test",
  },
  {
    who: "Final hour",
    title: "Read the formula sheet",
    text: "Every formula on one page, plus the ten traps that cost the most marks.",
    href: "/formulas",
    action: "Open the sheet",
  },
];

// The home page: hero, tonight's plan, every topic by unit, and where to start.
export default function HomePage() {
  const questionCounts = getQuestionCounts();
  const answerKey = getAnswerKey();
  const totalQuestions = Object.keys(answerKey).length;

  return (
    <main id="main" className="overflow-x-clip">
      {/* Hero */}
      <section className="mx-auto max-w-[1120px] px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end lg:gap-14">
          <div>
            <p className="rise eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
              <Greeting />
              <span className="h-px w-6 bg-line-strong" aria-hidden="true" />
              <span>LJU · Semester V · 100-mark MCQ paper</span>
            </p>
            <h1
              className="rise mt-8 max-w-[14ch] font-serif text-[3.1rem] leading-[0.98] tracking-[-0.035em] sm:text-[5.2rem]"
              style={{ animationDelay: "60ms" }}
            >
              Engineering Aptitude, <em className="text-muted">from zero to ninety.</em>
            </h1>
            <p className="rise mt-8 max-w-[58ch] text-lg leading-relaxed text-muted sm:text-xl" style={{ animationDelay: "120ms" }}>
              Every IMP topic on your university list, taught from scratch with worked examples, then drilled with{" "}
              <span className="text-fg">{totalQuestions} MCQs</span> taken from <span className="text-fg">R.S. Aggarwal</span>.
              Every answer was re-solved, and the places where the book’s key is wrong are flagged.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
              <ContinueButton />
              <Link href="/questions" className="btn btn-ghost h-12 px-6 text-[0.95rem]">
                View all MCQs
              </Link>
            </div>
          </div>

          <figure
            className="rise mt-12 overflow-hidden rounded-xl border border-line bg-surface lg:mt-0"
            style={{ animationDelay: "200ms" }}
            aria-label="Key formulas"
          >
            <figcaption className="flex items-center gap-1.5 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full border border-line-strong" />
              <span className="ml-auto font-mono text-[0.68rem] text-faint">last-hour.txt</span>
            </figcaption>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.74rem] leading-[1.9]">
              <span className="block whitespace-pre">
                <span className="text-faint">$ </span>cat formulas
              </span>
              {HERO_FORMULAS.map((formulaLine) => (
                <span key={formulaLine} className="block whitespace-pre text-fg">
                  {formulaLine}
                </span>
              ))}
              <span className="block">
                <span className="text-faint">$ </span>
                <span className="cursor-blink inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] bg-fg" />
              </span>
            </pre>
          </figure>
        </div>

        <HomeStats answerKey={answerKey} />
      </section>

      {/* Tonight's plan */}
      <section id="plan" className="scroll-mt-14 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="eyebrow">Tonight’s plan</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                Nine hours, <em className="text-muted">eight blocks.</em>
              </h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-muted">
                Read a topic’s guide, then do its questions straight away. Tick a block when it’s done. Sleep at
                least five hours: tired brains make calculation slips.
              </p>
            </div>
            <StudyPlan />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="scroll-mt-14 border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="eyebrow">What’s inside</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
                21 topics, <em className="text-muted">in six syllabus units.</em>
              </h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-muted">
                Weightage comes from the official LJU 2026 syllabus. Each topic has a full guide and its own question
                set.
              </p>
            </div>

            <div className="flex flex-col gap-11">
              {UNITS.map((unit) => (
                <div key={unit.id}>
                  <div className="flex items-baseline justify-between gap-3 border-b border-line-strong pb-2.5">
                    <h3 className="text-[0.95rem] font-semibold">{unit.name}</h3>
                    <span className="whitespace-nowrap font-mono text-[0.7rem] text-faint">{unit.syllabusLabel}</span>
                  </div>
                  {getTopicsInUnit(unit.id).map((topic) => (
                    <div
                      key={topic.slug}
                      className="grid grid-cols-[30px_minmax(0,1fr)] items-center gap-x-3.5 gap-y-2 border-b border-line py-4 sm:grid-cols-[34px_minmax(0,1fr)_auto]"
                    >
                      <span className="self-start pt-0.5 font-mono text-[0.74rem] tabular-nums text-faint">
                        {twoDigits(topic.number)}
                      </span>
                      <div className="min-w-0">
                        <Link href={`/learn/${topic.slug}`} className="block font-medium hover:underline hover:underline-offset-4">
                          {topic.title}
                        </Link>
                        <p className="text-[0.86rem] text-muted">{topic.summary}</p>
                      </div>
                      <div className="col-start-2 flex items-center justify-between gap-3.5 sm:col-start-auto sm:justify-end">
                        <TopicProgress topicSlug={topic.slug} totalCount={questionCounts[topic.slug]} />
                        <span className="flex gap-1.5">
                          <Link href={`/learn/${topic.slug}`} className="btn btn-sm btn-ghost">
                            Learn
                          </Link>
                          <Link href={`/practice/${topic.slug}`} className="btn btn-sm btn-ghost">
                            Practice
                          </Link>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where to start */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8 sm:py-24">
          <p className="eyebrow">Where should you start?</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.02em] sm:text-5xl">
            Pick the route that fits <em className="text-muted">your night.</em>
          </h2>
          <div className="mt-10 grid gap-3.5 md:grid-cols-3">
            {ROUTES.map((route) => (
              <Link key={route.href} href={route.href} className="card group flex flex-col gap-2.5 p-6">
                <span className="eyebrow">{route.who}</span>
                <span className="font-serif text-[1.6rem] leading-tight tracking-[-0.01em]">{route.title}</span>
                <span className="text-[0.9rem] text-muted">{route.text}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2.5 text-[0.86rem] font-medium">
                  {route.action}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
