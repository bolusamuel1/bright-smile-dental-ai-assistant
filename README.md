# Bright Smile Dental — AI Front-Desk Assistant (Portfolio Project)

A marketing site for a fictional dental clinic with an embedded chat widget that answers FAQs
and handles appointment requests — built to demonstrate an AI-support-assistant use case for
a freelance portfolio.

**Live design reference:** https://brightsmiledentalsite.lovable.app/ (built first in Lovable,
then rebuilt here as hand-written React so it can live in a code repo alongside the live demo).

The chat widget is a **mocked assistant** — it uses local keyword matching against a small
FAQ knowledge base instead of calling a live LLM API. This keeps the demo free to run and
reliable to show in interviews, while still demonstrating the real design work behind a RAG-style
assistant: a structured knowledge base, intent detection, a guided booking flow, and graceful
fallback/escalation. See "Swapping in a real AI model" below for how you'd upgrade it.

## Tech stack

- React 18 + Vite
- React Router (4 pages: Home, Services, About, Contact)
- Tailwind CSS
- lucide-react icons

## Project structure

```
bright-smile-dental/
  src/
    components/
      Navbar.jsx
      Footer.jsx
      ChatWidget.jsx      ← the chatbot: FAQ matching, booking flow, fallback flow
    data/
      faq.js              ← the "knowledge base" the bot matches against
    pages/
      Home.jsx
      Services.jsx
      About.jsx
      Contact.jsx
    App.jsx
    main.jsx
    index.css
  index.html
  tailwind.config.js
  package.json
```

---

## Step-by-step: run it locally

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer). To check, run
`node -v` in a terminal.

1. Unzip the project folder you downloaded, or copy `bright-smile-dental/` wherever you keep
   projects.
2. Open a terminal in that folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser. Click the "Ask
   us anything" bubble bottom-right to test the chatbot. Try:
   - "What are your hours?"
   - "Do you take Cigna?"
   - "How much is Invisalign?"
   - "I'd like to book an appointment"
   - Something off-topic, to see the fallback/escalation flow

---

## Step-by-step: push it to GitHub

1. Create a new empty repository on GitHub (no README/license, so it stays empty) — call it
   e.g. `bright-smile-dental-ai-assistant`.
2. Back in your terminal, inside the `bright-smile-dental` folder:
   ```
   git init
   git add .
   git commit -m "Initial commit: Bright Smile Dental AI assistant demo"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/bright-smile-dental-ai-assistant.git
   git push -u origin main
   ```
3. Refresh the GitHub page — your code should be there.
4. On the repo's main page, click the gear icon next to "About" and add a short description
   plus the live Lovable link (or your own deployed link, see below) as the website field.

---

## Step-by-step: deploy it live (so you have a working link, not just code)

### Option A — Vercel (easiest, recommended)

1. Go to vercel.com and sign in with your GitHub account.
2. Click "Add New Project," select your `bright-smile-dental-ai-assistant` repo.
3. Vercel auto-detects Vite — leave the defaults and click "Deploy."
4. In a minute or two you'll get a live URL like `bright-smile-dental.vercel.app`.

(Netlify works the same way if you prefer it.)

### Option B — GitHub Pages

GitHub Pages' "Deploy from a branch" setting only publishes your raw files as-is — it does
**not** run a build step. A Vite/React project needs to be *compiled* first (JSX and bare
imports like `import react from 'react'` don't run directly in a browser), so pointing Pages at
your `main` branch gives a blank page. This project is already configured to deploy correctly
using the `gh-pages` package, which builds the project and pushes only the compiled output.

1. Make sure `vite.config.js`'s `base` matches your repo name exactly (already set to
   `/bright-smile-dental-ai-assistant/` — update this if you rename the repo).
2. Install dependencies if you haven't already: `npm install`
3. Run:
   ```
   npm run deploy
   ```
   This builds the site into a `dist` folder, then pushes just that folder to a `gh-pages`
   branch on your repo (created automatically).
4. On GitHub: **Settings → Pages** → under "Build and deployment," set **Source** to
   "Deploy from a branch," then set **Branch** to `gh-pages` and folder to `/ (root)`. Save.
5. Wait 1–2 minutes, then visit `https://YOUR-USERNAME.github.io/bright-smile-dental-ai-assistant/`
   — this time it'll load the real compiled app instead of a blank page.
6. Whenever you make changes, just run `npm run deploy` again to republish.

---

## Putting this in your portfolio

Use both links side by side:
- **Live demo:** your Vercel/Netlify URL (or the original Lovable link)
- **Code:** your GitHub repo

Suggested portfolio blurb structure (Problem → Solution → Result):

> **Problem:** Small clinics lose after-hours leads — a patient asking "how much is
> whitening?" at 9pm gets no answer until the next business day.
> **Solution:** Built a chat assistant embedded on the clinic site, backed by the clinic's own
> FAQ content, that answers common questions instantly and runs a guided flow to capture
> appointment requests 24/7 — escalating to the front desk when it doesn't know the answer.
> **Result:** Instant response vs. a next-business-day baseline; tested across N sample
> conversations covering FAQ accuracy, booking completion, and graceful fallback.

Be upfront that the AI logic is a rules-based mock for the demo — that honesty reads as
professionalism, not a weakness. What you're demonstrating is the design thinking: structuring
a knowledge base, handling ambiguous input, and designing a fallback path — the exact skills a
real RAG-based build requires.

Record a short screen-capture GIF of the chat flow (hours question → pricing question → booking
flow) — that's the asset people will actually look at first.

---

## Swapping in a real AI model later

If you want to upgrade this from a demo to something that could actually ship for a client:

1. Keep `src/data/faq.js` as your source documents (or move them into a CMS/database).
2. In `ChatWidget.jsx`, replace the call to `matchFaq()` with a request to an LLM API
   (Claude or GPT), passing the user's message plus the most relevant FAQ entries as context —
   that's the "RAG" part: retrieve relevant docs, then generate an answer grounded in them.
3. Move that API call behind a small backend route (never call an LLM API with a secret key
   directly from the browser).
4. Replace the mock booking confirmation with a real calendar integration (Google Calendar API
   or Calendly API) so requests actually land somewhere.

## Notes

- All content (clinic name, dentists, pricing, address, phone numbers) is fictional, created
  for this portfolio demo.
- Hero photo is sourced from Unsplash for demo purposes — swap in your own imagery before using
  this as a real client template.
