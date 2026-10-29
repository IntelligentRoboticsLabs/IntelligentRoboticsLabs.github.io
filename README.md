# Intelligent Robotics Lab – website

Static website of the Intelligent Robotics Lab (Universidad Rey Juan Carlos).
Plain HTML + CSS, no build step. It is served by GitHub Pages from the `master` branch.

```
index.html          Home
team.html           Our Team
publications.html   Publications (tabs by year)
projects.html       Projects (funded: ongoing / completed, and open source)
projects/<slug>/    Pages of individual projects
404.html            Not-found page
styles.css          All styles
js/tabs.js          Tabs of the publications and projects pages
bib/                BibTeX of each publication
img/                Images (team/, research/, projects/, icons/)
robots.txt, sitemap.xml
```

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Add a publication

1. Save its BibTeX as `bib/<key>.bib`, with key = first author + year + first word of the title
   (e.g. `bib/perezrodriguez2025dynamic.bib`). You can get it from the DOI:
   `curl -LH "Accept: application/x-bibtex" https://doi.org/<DOI>`
2. In `publications.html`, paste this card at the top of its year (`<section class="pub-year" id="y2025">`):

```html
<article class="paper" id="KEY">
  <h3 class="paper-title">Paper title</h3>
  <p class="paper-authors">Author One, Author Two</p>
  <p class="paper-venue"><em>Journal name</em>, vol. X, pp. Y-Z · DOI: <a href="https://doi.org/10.xxxx/yyyy" target="_blank" rel="noopener">10.xxxx/yyyy</a></p>
  <ul class="paper-links">
    <li><a class="pl" href="https://doi.org/10.xxxx/yyyy" target="_blank" rel="noopener">Paper</a></li>
    <li><a class="pl pl-pdf" href="https://...pdf" target="_blank" rel="noopener">PDF</a></li>
    <li><a class="pl pl-scholar" href="https://scholar.google.com/scholar?q=%22Paper+title%22" target="_blank" rel="noopener">Google Scholar</a></li>
    <li><a class="pl pl-bib" href="bib/KEY.bib" download>BibTeX</a></li>
    <li><a class="pl pl-web" aria-disabled="true" title="Coming soon">Paper website</a></li>
  </ul>
</article>
```

Remove the PDF line if there is no open PDF.

**Paper website:** create it at `papers/KEY/index.html` and replace the last line with
`<li><a class="pl pl-web" href="papers/KEY/">Paper website</a></li>`.

**New year:** add `<section class="pub-year" id="y2026"><h2>2026</h2> ... </section>` above the
previous year. The tab is created automatically.

## Add a team member

1. Put the photo in `img/team/` (270×222 px, other sizes are cropped automatically).
2. In `team.html`, copy one `<article class="member">` block inside `<div class="member-grid">`
   and edit name, role, e-mail and links.
3. When someone leaves, move their card to the "Gone, but not forgotten" section at the end of
   `team.html` and delete the e-mail line.

## Add a project

`projects.html` has three tabs: **Ongoing**, **Completed** and **Open source**
(the tabs are built from the `<section class="tab-panel">` blocks).

- **Funded project:** copy the commented `<article class="project">` template into "Ongoing"
  (newest first). Move it to "Completed" when it ends.
- **Open-source software:** copy one card of the "Open source" section.
- **Project page:** copy `projects/coresense/` to `projects/<slug>/`, edit it, and in the
  project card change the disabled link to
  `<li><a class="pl pl-page" href="projects/<slug>/">Project page</a></li>`.
  Add the page to `sitemap.xml`. Logos go in `img/projects/`.

## SEO

Every page has a description, canonical URL, Open Graph / Twitter tags and schema.org JSON-LD
(research organization, people, scholarly articles, breadcrumbs). `sitemap.xml` and `robots.txt`
are at the root.

The canonical domain is `https://intelligentroboticslab.gsyc.urjc.es/` (set in the `CNAME` file;
`intelligentroboticslabs.github.io` redirects to it). If the domain changes, replace that URL in all
`.html` files, `robots.txt` and `sitemap.xml`, and update `CNAME`. When you change content, update
`<lastmod>` in `sitemap.xml`. Register the site in Google Search Console and submit the sitemap.
