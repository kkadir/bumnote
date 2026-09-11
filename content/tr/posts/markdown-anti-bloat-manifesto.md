---
title: "Şişkinlik Karşıtı Manifesto Olarak Markdown: Düz Metnin Keyfi"
slug: "siskinlik-karsiti-manifesto-olarak-markdown"
date: 2026-08-03T10:00:00+03:00
description: "Megabaytlarca ağırlığındaki CMS yüklerini, izleyicileri ve telemetriyi reddedip 40 satırlık bir kabuk betiğiyle işlenebilen ham .md dosyalarını seçmek. Gerçek kalıcılık neden basit ASCII satır başında yatar."
author: "Bumnote Masası"
issue: 42
dispatch: 305
categories: ["Kod & Etik"]
tags: ["düz-metin", "statik-siteler", "markdown"]
teaser:
  kind: code
  lines:
    - "// %0 JavaScript istemci çalışma zamanı"
    - "$ curl -sSL https://bumnote.org/tr/about/index.md"
    - "> Metin özgür doğdu; ama her yerde"
    - "> JavaScript zincirlerinde."
cover:
  plate: waveform
  caption: "Şek. 04: Kırk satır kabuk // bütün derleme"
  stamp: "0 kB çalışma zamanı"
---

Bu sitedeki bir bildiri bir metin dosyasıdır. Bir veritabanı satırı değil, bir API’nin arkasındaki JSON yığını değil, hidrasyon bekleyen bir bileşen ağacı değil. Bir dosya; bir adı olan, bir diskte duran, canınız isterse `ed` ile açabileceğiniz. Bu nostalji değil. Kalıcılık üzerine bir tutumdur.

## Kırk satırlık argüman

İşte tipografi hariç, böyle bir sitenin bütün derleme sistemi:

```sh
for f in content/**/*.md; do
  out="public/${f#content/}"; out="${out%.md}/index.html"
  mkdir -p "$(dirname "$out")"
  { cat layouts/head.html; pandoc "$f"; cat layouts/foot.html; } > "$out"
done
```

Hugo kullanıyoruz çünkü aynı şeyi seksen milisaniyede yapıyor ve RSS’i hallediyor. Ama mesele yerinde duruyor: Hugo yarın yok olsa arşiv hâlâ okunabilir, hâlâ derlenebilir, hâlâ *bizim*. Aynı şeyi bir headless CMS için söylemeyi deneyin.

## Şişkinliğin bedeli

Bir megabayt JavaScript bedava değildir. On yıllık bir telefondaki okura on iki saniyeye mal olur. Kotalı bağlantıdaki okura gerçek paraya mal olur. Herkese yazıyı Lynx’te okuma, yazdırma, kaydetme ya da ekran görüntüsü almadan alıntılama olanağına mal olur. Her izleyici, oylanmadan konmuş bir dikkat vergisidir.

Yeraltı basını bulabildiği en ucuz kâğıda bastı ve sözcükler hayatta kaldı çünkü ürün sözcüklerdi. Markdown, ağ için 70 gramlık gazete kâğıdıdır. Ona basıyoruz.

## Düz metnin keyfi

Düz metin diff alır. Düz metin grep’lenir. Düz metin 2046’da açılır. Bir Markdown denemesi tek bir bağımlılık çözülmeden e-postalanabilir, yapıştırılabilir, borulanabilir, sürümlenebilir ve bir ekran okuyucu tarafından sesli okunabilir. İhtiyaç duyduğu tek çalışma zamanı satır başıdır.

Metin özgür doğdu; ama her yerde JavaScript zincirlerinde. Kesin onları.[^1]

[^1]: Bu sayfa, ters okuma düğmesi ve bir kopyalama tuşu için bir kilobaytın biraz altında betik gönderir. İkisi de hiçliğe indirgenebilir. Sıfırı düşündük ve ters modun buna değdiğine karar verdik.
