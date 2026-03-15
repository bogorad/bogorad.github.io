# bogorad.github.io

This repository now contains the live Hugo source for `https://bogorad.github.io/`.

## Structure

- `hugo.toml`
  - Site-level Hugo config only.

- `content/_index.md`
  - Homepage front matter and the main bio text.

- `data/contacts.toml`
  - Contact rail order, links, titles, and icon types.

- `data/timeline.toml`
  - Timeline entries.

- `layouts/`
  - Hugo templates and partials.

- `assets/css/style.css`
  - Main stylesheet source.

- `assets/js/site.js`
  - Small touch/mobile interaction logic.

- `static/images/`
  - Static images copied directly into the built site.

## Local development

Run from the repository root:

```bash
hugo --panicOnWarning --noBuildLock --cleanDestinationDir
hugo server --bind 127.0.0.1 --noBuildLock
```

## Deployment

- GitHub Pages deploys this site with GitHub Actions.
- The live repo source of truth is the Hugo source, not generated output.
- `public/` is local build output only and is intentionally ignored by git.

## Legacy site

- The pre-Hugo live site is preserved on branch `archive/legacy-site`.
- Do not edit that branch except for rollback or historical reference.
