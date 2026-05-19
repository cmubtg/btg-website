# Design Team Contribution Guide

Welcome! This guide is written for **design team members** who want to help improve the look and feel of the [CMU BTG website](https://www.cmubtg.com/). You do **not** need to be a software engineer — but you will use a few tools (Git, GitHub, and a code editor) to preview changes and submit them for review.

---

## Table of contents

1. [How the website is built (big picture)](#how-the-website-is-built-big-picture)
2. [Glossary: Git & GitHub in plain English](#glossary-git--github-in-plain-english)
3. [What you need installed](#what-you-need-installed)
4. [One-time setup](#one-time-setup)
5. [Run the site on your computer](#run-the-site-on-your-computer)
6. [Where to change design things](#where-to-change-design-things)
7. [Brand reference (colors & type)](#brand-reference-colors--type)
8. [Your workflow every time you make a change](#your-workflow-every-time-you-make-a-change)
9. [Step-by-step: branches, commits, push, and pull requests](#step-by-step-branches-commits-push-and-pull-requests)
10. [Using Cursor / VS Code (no terminal required)](#using-cursor--vs-code-no-terminal-required)
11. [Using the terminal (optional)](#using-the-terminal-optional)
12. [Before you open a pull request](#before-you-open-a-pull-request)
13. [Opening a pull request on GitHub](#opening-a-pull-request-on-github)
14. [After your PR is merged](#after-your-pr-is-merged)
15. [Common problems & fixes](#common-problems--fixes)
16. [When to ask for help](#when-to-ask-for-help)
17. [Related docs](#related-docs)

---

## How the website is built (big picture)

Think of the project like a shared Figma file, but for code:

| Piece | What it is |
|--------|------------|
| **GitHub** | Where the “source of truth” lives online — all files, history, and reviews |
| **Your computer** | Where you edit files and preview the site before anyone else sees changes |
| **Gatsby** | The tool that turns our files into the actual website |
| **Pull request (PR)** | Your proposal: “please review these changes and add them to the live site” |

**Important rule:** Nobody edits the live site directly. Everyone works on a **copy (branch)**, previews locally, then opens a **pull request** so a maintainer can review and merge.

---

## Glossary: Git & GitHub in plain English

| Term | Plain English |
|------|----------------|
| **Repository (repo)** | The project folder on GitHub — [github.com/cmubtg/website](https://github.com/cmubtg/website) |
| **Clone** | Download a copy of the repo to your laptop |
| **Branch** | Your own workspace so you don’t overwrite other people’s work |
| **`master`** | The main branch — what the live site is built from. **Do not edit `master` directly.** |
| **Commit** | Save a snapshot of your changes with a short message (like naming a version in history) |
| **Push** | Upload your commits from your laptop to GitHub |
| **Pull request (PR)** | Ask the team to review your branch and merge it into `master` |
| **Merge** | Accept a PR so your changes become part of `master` and eventually go live |
| **Pull** | Download the latest changes from GitHub to your laptop |
| **Conflict** | Two people changed the same lines — someone has to resolve it manually |

---

## What you need installed

### 1. A code editor (pick one)

I recommend **Cursor** or **Visual Studio Code**. Both are free with your `@andrew.cmu.edu` account (Copilot included). Either works; the steps below use similar menus.

### 2. Git

Git tracks changes and talks to GitHub.

- **Mac:** Open Terminal and run `git --version`. If Git isn’t installed, macOS will prompt you to install Xcode Command Line Tools — accept that.
- **Check:** `git --version` should print a version number.

### 3. Node.js

Node runs the website tooling on your machine.

- Install **Node.js 14.15.0 or newer** from [nodejs.org](https://nodejs.org/) (LTS is fine).
- **Check:** `node --version` and `npm --version` in Terminal.

### 4. GitHub access

- You need permission to the **cmubtg/website** repo.
- Sign in at [github.com](https://github.com) with the account that was invited.

### 5. Gatsby CLI (recommended)

After Node is installed:

```sh
npm install -g gatsby-cli
```

You can also use the `npm run` scripts in this repo without installing Gatsby globally — both work.

---

## One-time setup

Do this once when you join the project.

### 1. Clone the repository

Open **Terminal** (Mac: Spotlight → type “Terminal”).

Choose a folder where you keep projects (e.g. `Projects`), then run:

```sh
cd ~/Projects
git clone https://github.com/cmubtg/website.git
cd website
```

You now have a folder named `website` on your machine. That is your working copy.

### 2. Open the project in Cursor / VS Code

- **File → Open Folder…** → select the `website` folder you just cloned.

You should see folders like `src`, `static`, and `package.json` in the sidebar.

### 3. Install dependencies

In the editor, open the integrated terminal (**View → Terminal** or `` Ctrl+` ``) and run:

```sh
npm install
```

This downloads libraries the site needs. It can take several minutes the first time. When it finishes, you should see a `node_modules` folder (you rarely open files inside it).

### 4. Create your personal branch (first time only)

Replace `yourandrewid` with your Andrew ID (e.g. `tkhabe`):

```sh
git checkout master
git pull origin master
git checkout -b yourandrewid
git push -u origin yourandrewid
```

From now on, you usually work on **this branch** unless a lead asks you to use a different name.

---

## Run the site on your computer

Whenever you want to **see** your changes in a browser:

```sh
npm run develop
```

Or, equivalently:

```sh
gatsby clean
gatsby develop
```

- **`gatsby clean`** clears cached builds (helps when something looks “stuck”).
- **`gatsby develop`** starts a local preview server.

When it’s ready, open:

| URL | What it is |
|-----|------------|
| [http://localhost:8000](http://localhost:8000) | The public website preview |
| [http://localhost:8000/admin](http://localhost:8000/admin) | Netlify CMS (content admin — optional for design) |

Leave the terminal running while you preview. Press **Ctrl+C** in the terminal to stop the server.

**Tip:** After you change a `.css` file or a React page, save the file — the browser often refreshes automatically. If it doesn’t, refresh the page or restart `npm run develop`.

---

## Where to change design things

You do **not** need to memorize the whole codebase. These are the usual places for visual work:

### Global styles (colors, fonts, spacing utilities)

| File | Use for |
|------|---------|
| [`src/css/styles.css`](src/css/styles.css) | Site-wide CSS: Inter font, brand red `#ff2f44`, buttons, nav hover, banners, shadows, selection color |
| [`src/css/companies.css`](src/css/companies.css) | Sponsor / company logo strip styling |

### Layout & chrome (header, footer, shared UI)

| File | Use for |
|------|---------|
| [`src/components/Navigation.js`](src/components/Navigation.js) | Top navigation bar |
| [`src/components/Footer.js`](src/components/Footer.js) | Footer |
| [`src/components/Layout.js`](src/components/Layout.js) | Wrapper used on most pages |

### Page-specific layout & copy

| File | Use for |
|------|---------|
| [`src/pages/index.js`](src/pages/index.js) | Home page hero, mission section, structure |
| [`src/pages/contact/index.js`](src/pages/contact/index.js) | Contact page |
| [`src/pages/events.js`](src/pages/events.js) | Events page |
| Other files under [`src/pages/`](src/pages/) | Additional pages |

### Reusable visual blocks (banners, cards, etc.)

| File | Use for |
|------|---------|
| [`src/components/BTechBanner.js`](src/components/BTechBanner.js) | BTech banner |
| [`src/components/ProdHacksBanner.js`](src/components/ProdHacksBanner.js) | ProdHacks banner |
| [`src/components/Recruitment.js`](src/components/Recruitment.js) | Recruitment section |
| [`src/components/Companies.js`](src/components/Companies.js) | Sponsor logos row |

### Images & logos

| Location | Use for |
|----------|---------|
| [`src/images/`](src/images/) | Logos (SVG/PNG), icons, toggler, company SVGs |
| [`static/img/`](static/img/) | Large photos (e.g. home hero) referenced in pages |
| [`static/img/uploads/`](static/img/) | Images managed through CMS (member photos, etc.) |

When replacing an image, **keep the same filename** if the code already imports that path — otherwise you must update the import in the `.js` file.

### Styling in page files

Many pages use **Bootstrap 5** classes directly in JSX, for example:

- `display-3`, `font-weight-boldest` — large headings  
- `text-muted`, `text-black`, `text-danger` — text colors  
- `Container`, `Row`, `Col` — grid layout  
- `Badge bg="danger"` — numbered badges on the home page  

Bootstrap docs: [getbootstrap.com/docs/5.1](https://getbootstrap.com/docs/5.1/)

---

## Brand reference (colors & type)

Use these consistently unless design leads approve a rebrand.

| Token | Value | Where it appears |
|-------|--------|------------------|
| **Primary red** | `#ff2f44` | `.text-danger`, `.bg-danger`, buttons, text selection, banner frame |
| **Body font** | **Inter** (from Google/rsms CDN) | Loaded in `styles.css` |
| **Black text** | `#000` | Headlines (`.text-black`) |
| **Muted text** | Bootstrap `text-muted` | Subheads |

Before changing brand colors globally, sync with the design lead — red is referenced in many places.

---

## Your workflow every time you make a change

Use this checklist every time:

1. **Update your branch** with the latest `master` (see below).
2. **Edit** CSS, components, images, or page files.
3. **Preview** with `npm run develop` at [localhost:8000](http://localhost:8000).
4. **Check mobile** — resize the browser window or use DevTools device mode.
5. **Commit** your changes with a clear message.
6. **Push** to GitHub.
7. **Open a pull request** into `master`.
8. Wait for **review**; address feedback if requested.
9. A maintainer **merges**; the site deploys automatically via Netlify.

---

## Step-by-step: branches, commits, push, and pull requests

### Stay up to date with `master`

Before starting new work (or opening a PR), get the latest main code:

**Terminal:**

```sh
git checkout yourandrewid
git fetch origin
git merge origin/master
```

If Git reports a **merge conflict**, stop and ask a web lead — do not guess.

### Save your work (commit)

After you’ve tested locally:

```sh
git status
```

`git status` shows which files changed. Stage and commit:

```sh
git add src/css/styles.css
# or to stage everything: git add .

git commit -m "Adjust home hero spacing and heading size"
```

Write commit messages like a short design note: **what** changed and **why** (e.g. “Increase nav link padding for touch targets”).

### Upload your work (push)

```sh
git push origin yourandrewid
```

If push is rejected, you may need to pull/merge `master` first (see above), then push again.

---

## Using Cursor / VS Code (no terminal required)

You can do most Git steps from the **Source Control** sidebar (branch icon on the left).

### Switch or create a branch

1. Click the **branch name** in the bottom-left status bar (it might say `master` or your Andrew ID).
2. Choose **Create new branch…** or select an existing branch.
3. For a new branch, name it your Andrew ID (e.g. `tkhabe`).

### Commit

1. Open **Source Control**.
2. Changed files appear under **Changes**.
3. Hover a file → **+** to stage (or **Stage All Changes**).
4. Type a message in the box at the top → **Commit**.

### Push

1. After committing, click **Sync Changes** or **Publish Branch** / **Push**.
2. If prompted, sign in to GitHub in the browser.

### Pull latest `master` into your branch

1. Switch to `master` → **Pull** (or “Pull, Push” sync).
2. Switch back to your branch.
3. Open Command Palette (**Cmd+Shift+P**) → **Git: Merge Branch…** → choose `master`.

---

## Using the terminal (optional)

Same workflow as above; reference:

| Goal | Command |
|------|---------|
| See current branch | `git branch` |
| Switch branch | `git checkout yourandrewid` |
| Create branch | `git checkout -b yourandrewid` |
| See changes | `git status` |
| Stage all | `git add .` |
| Commit | `git commit -m "Your message"` |
| Push | `git push origin yourandrewid` |
| Update from remote | `git pull origin yourandrewid` |

---

## Before you open a pull request

Maintainers will ask you to verify the site still **builds** correctly:

```sh
npm run build
npm run serve
```

Then open [http://localhost:9000](http://localhost:9000) (Gatsby’s production preview — port may differ; read the terminal output).

Check:

- [ ] Home page looks correct
- [ ] Navigation and footer on multiple pages
- [ ] No obvious layout breaks on mobile width
- [ ] Images load (no broken icons)
- [ ] You didn’t accidentally commit huge files or `node_modules`

---

## Opening a pull request on GitHub

1. Push your branch (see above).
2. Go to [github.com/cmubtg/website](https://github.com/cmubtg/website).
3. You’ll often see a yellow banner: **“Compare & pull request”** for your branch — click it.  
   If not: **Pull requests** → **New pull request** → set **base: `master`** and **compare: `yourandrewid`**.
4. Fill in the PR:

   **Title example:** `Design: improve home hero spacing on mobile`

   **Description template:**

   ```markdown
   ## Summary
   - What changed visually (1–3 bullets)

   ## Notes for reviewers
   Anything you’re unsure about or want feedback on
   ```

5. Click **Create pull request**.
6. Request review from a web team lead (use **Reviewers** on the right).
7. **Do not merge your own PR** unless a lead explicitly told you to.

### If reviewers request changes

1. Make edits on the **same branch** on your laptop.
2. Commit and push again — the PR updates automatically.
3. Reply on the PR when you’re ready for another look.

---

## After your PR is merged

1. **Celebrate** — your work is on `master`.
2. **Netlify** deploys the site automatically (usually within a few minutes).
3. On your laptop, sync for next time:

   ```sh
   git checkout master
   git pull origin master
   git checkout yourandrewid
   git merge master
   ```

4. Start your next task on the same personal branch (or create a new branch if the lead prefers one branch per feature).

---

## Common problems & fixes

| Problem | What to try |
|---------|-------------|
| `command not found: git` / `node` / `gatsby` | Install Git or Node; restart Terminal |
| `npm install` fails | Delete `node_modules` and `package-lock.json` only if a lead says so; usually ask for help first |
| Port 8000 already in use | Stop the other server (Ctrl+C) or kill the process; restart `npm run develop` |
| Changes don’t show in browser | Save the file; hard refresh (Cmd+Shift+R); run `gatsby clean` then `npm run develop` |
| `Permission denied` on push | Confirm GitHub access; sign in via VS Code/Cursor GitHub auth |
| Merge conflict | Ask a web lead — don’t force-push |
| Edited wrong branch | Stash or commit, switch branch, cherry-pick or redo — ask if unsure |
| Huge accidental commit | Don’t push — ask a lead before fixing history |

---

## When to ask for help

Reach out to a **web team lead** when:

- You can’t clone the repo or get GitHub access
- Merge conflicts or scary Git errors
- The site won’t start after `npm install`
- You need to change routing, CMS config, or anything under `static/admin/`
- You’re unsure whether a change should be CSS-only or a bigger refactor

---

## Related docs

- [CONTRIBUTING.md](CONTRIBUTING.md) — technical setup and PR expectations for all contributors  
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) — community standards  
- [README.md](README.md) — project overview  

---

*Last updated for the CMUBTG Gatsby + Netlify CMS site. If you improve this guide, open a PR — future designers will thank you.*
