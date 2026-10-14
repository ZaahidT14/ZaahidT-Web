# zaahid-site

My personal website, built with [Astro](https://astro.build) and hosted on Vercel.

## How the project is laid out

```
zaahid-site/
├── src/
│   ├── data/                      ← ALL the content lives here
│   │   ├── profile.js             bio, contact links, the scrolling ticker
│   │   ├── experience.js          roles, education, courses, certifications, skills
│   │   ├── competitions.js        one entry per competition (each gets its own page)
│   │   ├── clubs.js               one entry per club (each gets its own page) + volunteering
│   │   └── projects.js            code projects
│   ├── layouts/Base.astro         shell for every page: fonts, colours, ticker, nav, clock, footer
│   ├── layouts/Note.astro         template for one market note
│   ├── components/Decks.astro     the slide-deck viewer used on competition and club pages
│   └── pages/                     every file here becomes a page
│       ├── index.astro            home
│       ├── experience.astro, projects.astro
│       ├── competitions.astro     the list
│       ├── competitions/[slug].astro   template for each competition page
│       ├── clubs.astro, clubs/[slug].astro
│       ├── notes.astro            the list
│       └── notes/*.md             each Markdown file is one note
├── public/                        copied to the site as-is
│   ├── resume.pdf
│   └── decks/                     put slide-deck PDFs here
├── astro.config.mjs               build settings
└── package.json                   project name, scripts, and the Astro dependency
```

`.astro` files are HTML with a small block of JavaScript at the top (between the `---` lines). That code runs once when the site is built, not in the visitor's browser. `[slug].astro` files are templates: Astro builds one page per entry in the matching data file.

## Everyday changes

| I want to… | Do this |
|---|---|
| Edit a job, add a role | `src/data/experience.js`: copy a block and change it |
| Change the ticker | `ticker` in `src/data/profile.js` |
| Add a competition | Copy a block in `src/data/competitions.js`, give it a new `slug`. Set `award: true` if you placed or won something, `false` if you took part. |
| Add a club | Same, in `src/data/clubs.js` |
| Update my résumé | Replace `public/resume.pdf` (keep the name) |
| Write a market note | Copy `src/pages/notes/itcc-bluenergy.md`, rename it, change the text |
| Change colours or fonts | The `:root` block near the bottom of `src/layouts/Base.astro` |

### Adding a slide deck

1. Upload the deck to Google Drive (PDF is best: it opens instantly for anyone).
2. Right-click it → **Share** → under General access choose **Anyone with the link** (Viewer) → **Copy link**.
3. Paste the link into the competition or club in its data file:
   ```js
   decks: [{ title: 'Round 1: Project BluEnergy', link: 'https://drive.google.com/file/d/.../view', pages: 50, date: 'Sep 2026' }],
   ```
`pages` and `date` are optional. Each deck shows as a "View slides" box near the top of its competition or club page, on the **Slides** page and on the home page.

You can also put a PDF in `public/decks/` and use `link: 'decks/your-file.pdf'`.

To show a "coming soon" box before a club has decks, give it a `deckSlot` line, like Bizsol has.

Check before posting any deck: competition cases and club materials can be confidential to the organiser or sponsor.

## Run it on your laptop

You need Node.js version 22 or newer. Check with `node -v`; if it's missing, install the LTS version from nodejs.org.

```bash
cd zaahid-site      # move into the project folder
npm install         # downloads Astro into node_modules/ (once, and after any package.json change)
npm run dev         # starts a local server that reloads when you save
```

Open http://localhost:4321/index.html. Stop the server with `Ctrl + C`.

```bash
npm run build       # builds the final site into dist/ (what Vercel runs)
npm run preview     # serves dist/ so you can check the real build
```

## Deploy to Vercel (first time)

**1. Put the project on GitHub.** Create an empty repo called `zaahid-site` at github.com/new (no README or .gitignore, the project has them). Then, in the project folder:

```bash
git init                      # turns this folder into a git repository
git add .                     # stages every file except what .gitignore excludes
git commit -m "First version of personal site"   # saves a snapshot
git branch -M main            # names the main branch "main"
git remote add origin https://github.com/ZaahidT14/zaahid-site.git   # links it to your GitHub repo
git push -u origin main       # uploads it; -u remembers the link so later you just run `git push`
```

**2. Connect Vercel.** At vercel.com, sign up with GitHub, click **Add New → Project**, import `zaahid-site`. Vercel detects Astro (build command `npm run build`, output folder `dist`). Click **Deploy**.

**3. Set your address.** Open the project → **Settings → Domains** and set it to `zaahidtinwala.vercel.app` if it's free. If you use a different address, update `site:` in `astro.config.mjs` to match.

## Updating the live site

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Vercel rebuilds the site within about a minute of every push.
