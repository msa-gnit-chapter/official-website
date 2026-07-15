# MSA GNIT — Chapter Website

Website of the Microsoft Learn Student Ambassadors chapter at Guru Nanak Institute of Technology, Kolkata.

## Run locally

```bash
npm install
npm start        # production  → http://localhost:3000
npm run dev      # development (auto-restarts via nodemon)
```

## Pages

| Route        | Page                                                        |
|--------------|-------------------------------------------------------------|
| `/`          | Home — hero, About, Domains, **Microsoft Technologies for Students** (`#ms-tech`), **Collaboration** (`#collaborate`) |
| `/team`      | **Core Team** & **Advisors** with short intros              |
| `/events`    | Events with detail modal + photo lightbox                   |
| `/inaugural` | **Inaugural** — story, speakers, agenda, photo gallery      |
| `/blogs`     | **Blogs** — post cards linking to published articles        |
| anything else| Styled 404 page                                             |

## Where to edit content (no HTML needed)

| What you want to change                  | File                      |
|------------------------------------------|---------------------------|
| Core team members / advisors + intros    | `data/team.js`            |
| Blog posts (title, excerpt, link)         | `data/blogs.js`           |
| Microsoft Technologies links              | `data/mstech.js`          |
| Event cards & galleries                   | `views/event.ejs` (the `events` array at the bottom) |
| Inauguration photos                       | `views/inaugural.ejs` (the `PHOTOS` array at the bottom) |

Placeholder team entries have names starting with **"Add "** — replace them with
real people (they render as dashed cards until you do). To show a member's photo,
drop the image into `public/` and set `photo: "filename.jpg"` in `data/team.js`.

## Project structure

```
index.js              Express server + routes
data/                 Editable content (team, blogs, MS tech links)
views/
  partials/           head / nav / footer shared by every page
  index.ejs           Home
  team.ejs            Core Team & Advisors
  event.ejs           Events
  inaugural.ejs       Inaugural
  blogs.ejs           Blogs
  404.ejs             Not-found page
public/
  css/main.css        Shared design system (one source of truth)
  js/site.js          Shared behaviors (nav, scroll reveal)
  *.jpg / *.png       Photos & logo
```

## Deploying to Vercel

A `vercel.json` is included — the whole app runs as a single serverless function.

**Option A — via GitHub (recommended, auto-deploys):**
1. Push this folder to your GitHub repository (`main` branch).
2. In [vercel.com](https://vercel.com) → your existing project → Settings → Git, make sure
   the project is connected to that repo. Every push to `main` deploys automatically.

**Option B — via Vercel CLI:**
```bash
npm i -g vercel
vercel login
vercel link      # choose your EXISTING project to keep the same URL
vercel --prod
```

To keep the current URL (`msa-gnit-inauguration-website.vercel.app`), deploy into
that same Vercel project (Option B `vercel link`, or point that project's Git
connection at this repo). The app also runs unchanged on Render / Railway /
Azure App Service with `npm start`.
