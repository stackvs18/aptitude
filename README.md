# Aptitude Handbook

A study site for the LJU Semester V **Engineering Aptitude** exam (100 marks, all MCQ). It covers the 21 IMP topics from the university list. Each topic has a guide that starts from scratch with worked examples, and a practice set taken from R.S. Aggarwal's *Quantitative Aptitude*.

- **Learn**: a full guide for every topic, with formulas, worked examples, shortcuts and traps.
- **Practice**: 367 MCQs. Tap an option to see right or wrong plus the working. Filter to unanswered or wrong questions.
- **All MCQs**: the whole bank on one page as an answer key. The correct option is highlighted. Switches hide the answers or explanations for self-testing.
- **GfG notes** (`/gfg`): one note for each of the 66 topics on the GeeksforGeeks [Aptitude Questions and Answers](https://www.geeksforgeeks.org/aptitude/aptitude-questions-and-answers/) page (quant, reasoning, verbal) plus Divisibility Rules. Written in our own words, each linking to its original page. Files: `content/gfg/<slug>.md`, list in `lib/gfg.ts`.
- **Mock test**: 20, 40 or 60 random questions, timed or untimed, with a score and unit-by-unit breakdown.
- **Mistakes**: every wrong answer in one list, ready to retry.
- **Formula sheet**: every formula on one page, plus the calculation toolkit, ten traps and exam-hall strategy.
- **Search**: Ctrl K or `/` searches topics, guide sections, formulas and every question.

Built with Next.js 16 (App Router) and Tailwind CSS 4. Every page is statically generated at build time. Progress is saved in the visitor's browser (localStorage), so there is no database or login.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (every page pre-rendered)
npm start          # serve the production build
npm run lint
```

## Deploy (Vercel)

1. Push the folder to a GitHub repo.
2. On vercel.com: **Add New → Project**, import the repo, keep the defaults (framework: Next.js) and press **Deploy**.

No environment variables are needed.

## Project layout

```text
app/
  page.tsx                     home: greeting, tonight's plan, topics by unit, where to start
  (book)/layout.tsx            topic sidebar for the pages below
  (book)/learn/[slug]/         a topic's guide
  (book)/practice/[slug]/      a topic's MCQs, answered by tapping
  (book)/formulas/             formula sheet, toolkit, traps, strategy
  (book)/mistakes/             every wrong answer, to retry
  questions/                   All MCQs: answer key with the correct option highlighted
  mock/                        timed mock test
  search-index.json/           static JSON used by the Ctrl K search
  globals.css                  black-and-white theme tokens, question cards, guide typography
components/                    header, search, sidebar, question card, practice, mock test, home widgets
content/topics/<slug>.md       the 21 guides
content/questions/<slug>.json  the questions for each topic
content/extras/*.md            formula sheet, toolkit, traps, strategy
lib/topics.ts                  units and topics: order, titles, summaries, syllabus weightage
lib/questions.ts               reads the question files (server only)
lib/markdown.ts                Markdown -> HTML for the guides (server only)
lib/progress.ts                answers, plan ticks and last topic, saved in the browser
lib/plan.ts                    tonight's study plan
```

## Editing content

**A guide** is `content/topics/<slug>.md`. It starts straight with its first section. Use `##` for sections (they show up in search) and `###` below that. A paragraph that starts with `**Ex 1.**` or `**Type 1.**` is drawn as a worked-example box. A `> quote` is drawn as a callout.

**Questions** are in `content/questions/<slug>.json`, one object per question:

```json
{
  "number": 1,
  "question": "What is the place value of 5 in 3254710?",
  "options": [
    { "letter": "a", "text": "5" },
    { "letter": "b", "text": "10000" },
    { "letter": "c", "text": "50000" },
    { "letter": "d", "text": "54710" }
  ],
  "answer": "c",
  "explanation": "5 sits in the ten-thousands place → 5 × 10000 = 50000.",
  "source": "Book Q1",
  "bookKeyCorrected": false
}
```

Text can use `**bold**`, `*italic*` and `` `code` ``. Set `bookKeyCorrected` to `true` when R.S. Aggarwal's own answer key is wrong; the card then shows a "Book key corrected" tag.

**A new topic**: add its `.md` and `.json` files, then add it to `TOPICS` in `lib/topics.ts`. Its place in that list sets its number and its previous/next links.

## Sources

- R.S. Aggarwal, *Quantitative Aptitude for Competitive Examinations* (S. Chand, revised 2017). Questions tagged "Book Q*n*" are question *n* of that chapter's objective exercise.
- Direction Sense, Blood Relations and Coding–Decoding come from R.S. Aggarwal's *A Modern Approach to Verbal & Non-Verbal Reasoning*. Those questions are written in that book's style and tagged "Book-style".
- Syllabus and unit weightage: LJU Sem V Engineering Aptitude syllabus, 2026.
