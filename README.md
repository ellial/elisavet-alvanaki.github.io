# Elisavet Lydia Alvanaki — Academic Website

Personal academic website for Elisavet (Eli) Alvanaki, PhD student in Computer Science at
Columbia University.

**Live site:** https://ellial.github.io/elisavet-alvanaki.github.io/

## Structure

- `index.html` — all site content (single page)
- `styles.css` — styling (responsive, no framework)
- `script.js` — mobile navigation, news filters, BibTeX toggles
- `assets/Elisavet_Alvanaki_CV.pdf` — CV
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment (runs on every push to `main`)
- `.nojekyll` — disables Jekyll processing on GitHub Pages

## Editing

There is no build step — edit the HTML/CSS/JS directly and push to `main`.

### Adding a news item

Duplicate an existing `<article class="news-item">` block in the News section of
`index.html` and update the date, category (`data-category` **and** the visible tag:
`publication`, `talk`, or `service`), headline, description, and links.

### Adding a publication

Duplicate an existing `<article class="pub">` block in the Publications section and update
the title, authors, venue, links, and the BibTeX `<pre>` block.

### Updating the CV

Replace `assets/Elisavet_Alvanaki_CV.pdf` with the new PDF (keep the same filename so
existing links keep working).

## Deployment

Pushing to `main` triggers the **Deploy static site to GitHub Pages** workflow, which
mirrors `main` to the `gh-pages` branch, which GitHub Pages serves (deploy-from-branch).
