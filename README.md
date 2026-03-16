# bogorad.github.io

This repository contains the live Hugo source for `https://bogorad.github.io/`.

## Source of truth

- `hugo.toml`
  - Site-level Hugo config only.
  - Keep `baseURL`, `languageCode`, `title`, and `disableKinds` here.
  - Do not put homepage copy or long lists here.

- `content/_index.md`
  - Homepage front matter and main bio text.
  - Edit this file when changing:
    - name
    - role/subtitle
    - profile image path
    - talk box heading and meeting links
    - interests
    - languages
    - the main paragraph text under the title

- `data/contacts.toml`
  - Right-side contact rail.
  - One `[[items]]` block per contact method.
  - Edit this file when changing link order, icon type, URL, or tooltip title.

- `data/timeline.toml`
  - Vertical timeline entries.
  - One `[[items]]` block per item.
  - Edit this file when changing years or descriptions.

## Templates

- `layouts/baseof.html`
  - Shared HTML shell.
  - Loads the head partial, page body block, and shared scripts.

- `layouts/home.html`
  - Homepage composition only.
  - Assembles the header, sidebar, timeline, and contact rail partials.

- `layouts/_partials/head.html`
  - Meta tags, page title, Font Awesome link, and Hugo Pipes stylesheet link.

- `layouts/_partials/home/profile-header.html`
  - Hero area with photo, name, role, and bio.

- `layouts/_partials/home/sidebar.html`
  - Left sidebar cards: Talk, Interests, Languages.

- `layouts/_partials/home/timeline.html`
  - Center timeline built from `site.Data.timeline.items`.

- `layouts/_partials/home/contact-links.html`
  - Right contact rail built from `site.Data.contacts.items`.

- `layouts/_partials/home/contact-icon.html`
  - Icon rendering helper.
  - Keeps the special SVG cases for Signal, Substack, and X/Twitter in one place.

## Styling and assets

- `assets/css/style.css`
  - Main stylesheet source.
  - Hugo processes this through Pipes, minifies it, fingerprints it, and writes the built file under `public/css/`.
  - Edit this file for design changes.

- `static/images/`
  - Static image source files copied as-is by Hugo.
  - Current important files:
    - `profile.jpg`

## Generated output

- `public/`
  - Generated site output.
  - Do not hand-edit these files.
  - Rebuild Hugo instead.

## How to edit common things

- Change the main intro text:
  - edit `content/_index.md`

- Change interests or languages:
  - edit `content/_index.md`

- Change Talk links:
  - edit `content/_index.md`

- Change contact links or reorder icons:
  - edit `data/contacts.toml`

- Change timeline entries:
  - edit `data/timeline.toml`

- Change structure or markup:
  - edit the partials in `layouts/_partials/home/`

- Change the visual design:
  - edit `assets/css/style.css`

- Change the profile image:
  - replace files in `static/images/`
  - update the path in content or data if needed

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

## Practical rule

Edit `content/`, `data/`, `layouts/`, `assets/`, and `static/`.
Do not edit `public/` by hand unless you intentionally want to patch generated output.
