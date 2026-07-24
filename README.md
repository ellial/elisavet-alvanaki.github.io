# Elisavet Lydia Alvanaki — Academic Website

Personal academic website of Elisavet (Eli) Alvanaki, PhD student in Computer Science at
Columbia University. Built with [al-folio](https://github.com/alshedivat/al-folio).

**Live site:** https://ellial.github.io/elisavet-alvanaki.github.io/

## Editing

- **Bio / home page:** `_pages/about.md`
- **Publications:** `_bibliography/papers.bib` (rendered automatically; `selected={true}` pins a paper to the home page)
- **News:** add a markdown file to `_news/`
- **Teaching:** `_pages/teaching.md`
- **CV:** replace `assets/pdf/Elisavet_Alvanaki_CV.pdf` and edit `_data/cv.yml`
- **Profile photo:** replace `assets/img/prof_pic.jpg`
- **Site settings (name, links, colors):** `_config.yml` and `_data/socials.yml`

## Deployment

Pushing to `main` triggers the **Deploy site** workflow, which builds the Jekyll site and
publishes it to the `gh-pages` branch, which GitHub Pages serves.
