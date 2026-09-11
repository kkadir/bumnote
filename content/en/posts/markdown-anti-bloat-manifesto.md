---
title: "Markdown as an Anti-Bloat Manifesto: The Joy of Plain Text"
date: 2026-08-03T08:00:00+01:00
description: "Refusing megabyte-heavy CMS overheads, trackers, and telemetry in favour of raw .md files that can be rendered with a 40-line shell script. Why true permanence lies in the simple ASCII carriage return."
author: "Bumnote Desk"
issue: 42
dispatch: 305
categories: ["Code & Ethics"]
tags: ["plain-text", "static-sites", "markdown"]
teaser:
  kind: code
  lines:
    - "// 0% JavaScript client runtime"
    - "$ curl -sSL https://bumnote.org/about/index.md"
    - "> Text was born free; yet everywhere"
    - "> it is in JavaScript chains."
cover:
  plate: waveform
  caption: "Fig. 04: Forty lines of shell // the whole build"
  stamp: "0 kB runtime"
---

A dispatch on this site is a text file. Not a row in a database, not a JSON blob behind an API, not a component tree waiting to hydrate. A file, with a name, on a disk, that you can open in `ed` if the mood takes you. This is not nostalgia. It is a position on permanence.

## The forty-line argument

Here is the whole build system for a site like this one, minus the typography:

```sh
for f in content/**/*.md; do
  out="public/${f#content/}"; out="${out%.md}/index.html"
  mkdir -p "$(dirname "$out")"
  { cat layouts/head.html; pandoc "$f"; cat layouts/foot.html; } > "$out"
done
```

We use Hugo because it does the same thing in eighty milliseconds and handles the RSS. But the point stands: if Hugo disappears tomorrow, the archive is still legible, still buildable, still *ours*. Try saying that about a headless CMS.

## What bloat costs

A megabyte of JavaScript is not free. It costs a reader on a ten-year-old phone twelve seconds. It costs a reader on a metered connection real money. It costs everyone the ability to read the piece in Lynx, or print it, or save it, or quote it without a screenshot. Every tracker is a tax on attention levied without a vote.

The underground press printed on the cheapest stock available, and the words survived because the words were the product. Markdown is 70gsm newsprint for the network. We are printing on it.

## The joy of plain text

Plain text diffs. Plain text greps. Plain text opens in 2046. A Markdown essay can be emailed, pasted, piped, versioned, and read aloud by a screen reader without a single dependency being resolved. The carriage return is the only runtime it requires.

Text was born free; yet everywhere it is in JavaScript chains. Cut them.[^1]

[^1]: This page ships a little under one kilobyte of script, for the inverted-reading toggle and a copy button. Both degrade to nothing. We considered zero and decided the inverted mode was worth it.
