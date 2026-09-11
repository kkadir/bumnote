---
title: "This site, as seen from Lynx"
date: 2026-09-04T12:00:00+01:00
description: "A screenshot we could not take, described in words."
dispatch: 307
categories: ["Code & Ethics"]
tags: ["static-sites", "accessibility"]
---

Open this page in Lynx and you get: the masthead as a line of text, the navigation as a numbered list, the lead essay as a headline followed by prose, and every card as a heading with a date under it. No layout survives. Every word does.

That is the acceptance test. If a dispatch is unreadable in a terminal, the dispatch is wrong, not the terminal.

```sh
lynx -dump https://bumnote.com/ | head -20
```
