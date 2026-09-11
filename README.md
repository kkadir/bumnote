# bumnote

An independent broadsheet built with [Hugo](https://gohugo.io) and styled to the
**Counter-Editorial Zine** visual identity in `bumnote-visual-identity/`.
Published in English (`/`) and Turkish (`/tr/`).

## Run it

```bash
hugo server -D
```

Then open <http://localhost:1313/>. Build for production with `hugo --minify`; output lands in `public/`.

## Where things live

| Path | What |
| --- | --- |
| `hugo.toml` | Shared params at the top; per-language params, copyright and menus under `[languages.en]` / `[languages.tr]` |
| `content/en/`, `content/tr/` | One tree per language. Same filename in both trees = linked translation |
| `content/<lang>/posts/` | Long-form essays. Set `featured: true` on the one that should lead the front page |
| `content/<lang>/notes/` | Short dispatches |
| `content/<lang>/about.md`, `content/<lang>/zines.md` | Manifesto and mail-order catalogue |
| `i18n/en.toml`, `i18n/tr.toml` | Every UI string in the templates |
| `data/spins.yaml`, `data/zines.yaml` | Recent spins list and catalogue items, keyed by language (`en:` / `tr:`) |
| `layouts/` | Templates. `home.html` is the front page; `_partials/` holds cards, teasers, plates |
| `assets/css/main.css` | The whole stylesheet: tokens, type scale, components, dark mode |
| `assets/js/main.js` | Inverted-reading toggle and the copy button. Under 1 kB |

## Front matter reference

```yaml
title: "…"
titleHighlight: "words to underline in signal orange"   # optional
date: 2026-09-08T04:20:00+01:00
description: "Standfirst / card excerpt"
issue: 42
dispatch: 309
kicker: "Sound & Fury"          # small orange label next to the sticker
categories: ["Punk Theory"]     # one per post; drives the index chips
tags: ["noise-ethics"]
featured: true                  # leads the front page
teaser:                         # card/hero media block on listings and the front page
  kind: plate | quote | code | image
  plate: halftone | hatch | waveform
  caption: "Fig. 01 …"
  stamp: "Anomaly log: 94.2 Hz"
  # quote → text, cite   · code → lines: [] · image → src, alt
cover:                          # image above the article header on the essay page
  src: "cover.jpg"              # file next to index.md (page bundle), a path in assets/, or a /static path
  alt: "What the picture shows"
  caption: "Fig. 01: …"         # optional caption strip, bottom-left
  stamp: "Anomaly log: 94.2 Hz" # optional sticker, top-right
  color: false                  # true keeps the photo in colour; default is the newsprint grayscale treatment
```

### Cover images

The cleanest way to add a photo is a page bundle: turn `posts/foo.md` into `posts/foo/index.md` and drop the
image beside it, then set `cover.src` to the filename. Hugo generates 640, 1040, and 1600px variants with a
`srcset`, and the cover doubles as the page's `og:image`. Bundle and `assets/` images are processed; a
`/static` path or URL is used as-is. Posts without a `cover` fall back to their `teaser` plate or image, so
every essay shows something above the header until you add a photo. Notes and pages have no cover unless you
give them one.

Every page is also published as raw Markdown at `<permalink>index.md`.

## Languages

- English is the default and lives at the site root; Turkish lives under `/tr/`.
- Translations are linked by filename: `content/en/posts/foo.md` and `content/tr/posts/foo.md` are the same
  page in two languages. Give the Turkish file a `slug:` for a Turkish URL; the link survives.
- The masthead language switch jumps to the translated page, or to the other language's front page when
  no translation exists.
- Dates use Hugo's locale-aware `:date_medium` layout, so no per-language formatting is needed.
- To add a UI string: add the key to both `i18n/*.toml` files and call `{{ T "key" }}` in the template.
  Build with `hugo --printI18nWarnings` to catch anything missing.
- To add a language: add a `[languages.xx]` block in `hugo.toml`, a `content/xx/` tree, an `i18n/xx.toml`,
  and `xx:` keys in the two data files.
