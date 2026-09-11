---
title: "Bu site, Lynx’ten göründüğü haliyle"
slug: "lynxten-gorundugu-haliyle"
date: 2026-09-04T14:00:00+03:00
description: "Alamadığımız bir ekran görüntüsü, sözcüklerle anlatılmış."
dispatch: 307
categories: ["Kod & Etik"]
tags: ["statik-siteler", "erişilebilirlik"]
---

Bu sayfayı Lynx’te açın ve şunu görün: bir satır metin olarak künye, numaralı liste olarak gezinme, başlığın ardından düzyazı olarak baş deneme ve altında tarihiyle bir başlık olarak her kart. Hiçbir mizanpaj hayatta kalmaz. Her sözcük kalır.

Kabul testi budur. Bir bildiri terminalde okunamıyorsa yanlış olan bildiridir, terminal değil.

```sh
lynx -dump https://bumnote.com/tr/ | head -20
```
