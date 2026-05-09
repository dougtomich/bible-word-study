const words = [
  {
    num: 1,
    english: 'Love',
    original: 'ἀγάπη',
    translit: 'agapē',
    lang: 'Greek · New Testament',
    strongs: 'G26',
    rtl: false,
    def: 'The love that chooses rather than desires — a committed, unconditional, self-giving love that acts for another\'s good regardless of feeling, circumstance, or worthiness. Unlike erōs (passionate desire) or phileō (warm affection), agapē is love as an act of the will. It cannot be commanded into feeling, but it can be commanded into action.',
    verse: '"For God so loved (ēgapēsen) the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." — John 3:16',
    insight: 'Paul\'s declaration in 1 Corinthians 13 defines the entire shape of Christian community through this word. Everything that does not qualify as agapē — including prophecy, faith to move mountains, and even martyrdom — amounts to nothing (1 Cor. 13:1–3).',
  },
  {
    num: 2,
    english: 'Lovingkindness',
    original: 'חֶסֶד',
    translit: 'hesed',
    lang: 'Hebrew · Old Testament',
    strongs: 'H2617',
    rtl: true,
    def: 'The most important word in the Hebrew Bible for God\'s love — loyal, covenantal love that keeps its commitments even when the other party has violated them. It is the love of a more powerful party toward a weaker one, rooted not in the worthiness of the recipient but in the unchangeable character of the one who loves.',
    verse: '"Give thanks to the LORD, for he is good. His love (hesed) endures forever." — Psalm 136:1',
    insight: 'Hesed appears 248 times in the Old Testament. In Lamentations 3:22–23, written in the smoking ruins of destroyed Jerusalem, the prophet calls God\'s hesed "new every morning" — a declaration of inexhaustible hope at the very bottom of despair.',
  },
  {
    num: 3,
    english: 'The Word',
    original: 'λόγος',
    translit: 'logos',
    lang: 'Greek · New Testament',
    strongs: 'G3056',
    rtl: false,
    def: 'In Greek philosophy, the rational principle underlying all reality — the logic woven into the cosmos. In Hebrew thought (as dabar), the spoken word of God that accomplishes whatever it is sent to do. John takes both concepts and makes the staggering claim that this Logos — the ordering principle of all creation — became a human being.',
    verse: '"In the beginning was the Word (Logos), and the Word was with God, and the Word was God." — John 1:1',
    insight: 'John 1:14 is the most explosive sentence in ancient literature: "The Word became flesh and dwelt among us." The Greek word for "dwelt" is eskēnōsen — he tabernacled among us — a direct echo of the Shekinah glory filling the Tabernacle in Exodus 40.',
  },
  {
    num: 4,
    english: 'Peace',
    original: 'שָׁלוֹם',
    translit: 'shalom',
    lang: 'Hebrew · Old Testament',
    strongs: 'H7965',
    rtl: true,
    def: 'Far more than the absence of conflict — shalom is the positive presence of wholeness, completeness, and right-ordering. It describes a state where every relationship is flourishing, every dimension of life is as it should be, and the entire created order is functioning as God intended. The word is embedded in Yerushalayim (Jerusalem) — the city of shalom.',
    verse: '"The punishment that brought us peace (shalom) was on him, and by his wounds we are healed." — Isaiah 53:5',
    insight: 'The Aaronic Blessing — the oldest priestly blessing in the world (Numbers 6:24–26) — ends with shalom. Paul\'s New Testament counterpart (Romans 5:1) says: "Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ."',
  },
  {
    num: 5,
    english: 'Grace',
    original: 'χάρις',
    translit: 'charis',
    lang: 'Greek · New Testament',
    strongs: 'G5485',
    rtl: false,
    def: 'Unmerited favor — the love that acts for the benefit of another with no expectation of return and no requirement of worthiness. Charis in classical Greek described the beauty that inspires delight; in the New Testament it becomes the defining term for God\'s free, unearned gift of salvation — something that cannot be worked for, bargained for, or deserved.',
    verse: '"For it is by grace (charis) you have been saved, through faith — and this is not from yourselves, it is the gift of God." — Ephesians 2:8',
    insight: 'Paul opens and closes every one of his letters with the word charis — "grace to you and peace." He understood that grace is not merely where the Christian life begins; it is the entire atmosphere in which it is lived. Charis appears 156 times in the New Testament.',
  },
  {
    num: 6,
    english: 'Appointed Time',
    original: 'καιρός',
    translit: 'kairos',
    lang: 'Greek · New Testament',
    strongs: 'G2540',
    rtl: false,
    def: 'While chronos is linear, sequential clock-time, kairos is the loaded, decisive moment — the appointed time when something must happen. In the New Testament, it refers to God\'s sovereign timing: the particular moments in history when the purposes of God break through into time with irreversible force.',
    verse: '"But when the set time (kairos) had fully come, God sent his Son, born of a woman, born under the law, to redeem those under the law." — Galatians 4:4',
    insight: 'Jesus began his public ministry with the announcement: "The time (kairos) has come. The kingdom of God has come near" (Mark 1:15). The entire Incarnation is presented as the kairos moment — the exact fulfillment of everything promised across centuries of Old Testament history.',
  },
  {
    num: 7,
    english: 'Truth / Faithfulness',
    original: 'אֱמֶת',
    translit: 'emet',
    lang: 'Hebrew · Old Testament',
    strongs: 'H571',
    rtl: true,
    def: 'More than factual accuracy, emet is the quality of being trustworthy, reliable, and consistent — truth as something you can lean on and build your life on. When used of God, it describes his absolute consistency with his own character and commitments. God\'s emet means his promises will not fail and his word will not return empty.',
    verse: '"The LORD, the LORD, the compassionate and gracious God, slow to anger, abounding in love and faithfulness (emet)." — Exodus 34:6',
    insight: 'Emet is often paired with hesed — "lovingkindness and truth" — as the two-word summary of God\'s core character (Exodus 34:6, Psalm 85:10). Jesus absorbs both into himself when he says "I am the way and the truth and the life" — the emet of God in human form.',
  },
  {
    num: 8,
    english: 'Salvation',
    original: 'σωτηρία',
    translit: 'sōtēria',
    lang: 'Greek · New Testament',
    strongs: 'G4991',
    rtl: false,
    def: 'Rescue from real danger — sōtēria was used of a ship\'s rescue from a storm, a soldier\'s survival in battle, or a patient\'s recovery from illness. In the New Testament it describes God\'s comprehensive rescue from sin, death, guilt, and condemnation accomplished through Jesus Christ. It is not merely a legal verdict; it includes healing, wholeness, and the full restoration of what was lost.',
    verse: '"Salvation (sōtēria) is found in no one else, for there is no other name under heaven given to mankind by which we must be saved." — Acts 4:12',
    insight: 'The name "Jesus" — Greek Iēsous, Hebrew Yeshua — means "YHWH saves." The naming of Jesus in Matthew 1:21 is a direct announcement: "you are to give him the name Jesus, because he will save his people from their sins." The person and his title are inseparable.',
  },
  {
    num: 9,
    english: 'Glory',
    original: 'כָּבוֹד',
    translit: 'kabod',
    lang: 'Hebrew · Old Testament',
    strongs: 'H3519',
    rtl: true,
    def: 'From a root meaning heavy or weighty, kabod describes the manifest presence and majesty of God — the overwhelming, visible, often dangerous reality of God breaking into the physical world. When Moses asks to see God\'s glory, the answer is: you cannot see my face and live. Kabod is the substance of divine presence with real, tangible weight.',
    verse: '"The cloud covered the tent of meeting, and the glory (kabod) of the LORD filled the tabernacle." — Exodus 40:34',
    insight: 'The Greek doxa (glory) in the New Testament absorbs the full weight of kabod. John 1:14 says of the incarnate Logos: "We have seen his glory (doxa), the glory of the one and only Son." The Shekinah that filled the desert Tabernacle is now resident in a human face.',
  },
  {
    num: 10,
    english: 'Faith',
    original: 'πίστις',
    translit: 'pistis',
    lang: 'Greek · New Testament',
    strongs: 'G4102',
    rtl: false,
    def: 'Not merely intellectual assent to propositions — pistis is active trust, reliance, and committed loyalty. It is the word for the faithfulness of a soldier to his general or a spouse to their vow. In the New Testament it describes the whole-person commitment of a human being to Jesus Christ — a trust that is placed, sustained, and that reshapes everything about how a person lives.',
    verse: '"Now faith (pistis) is confidence in what we hope for and assurance about what we do not see." — Hebrews 11:1',
    insight: '"The righteous will live by faith (pistis)" — Habakkuk 2:4, quoted three times in the New Testament (Romans 1:17, Galatians 3:11, Hebrews 10:38). This five-word sentence is the hinge between the Testaments and the thesis Paul unpacks across the entire letter to the Romans.',
  },
]

function buildHtml() {
  const cards = words.map(w => `
    <div class="word-card">
      <div class="word-top">
        <div class="word-num">${w.num}</div>
        <div class="word-heading">
          <span class="word-english">${w.english}</span>
          <span class="word-lang">${w.lang} &nbsp;·&nbsp; Strong's ${w.strongs}</span>
        </div>
      </div>
      <div class="word-original${w.rtl ? ' rtl' : ''}">${w.original}</div>
      <div class="word-translit">${w.translit}</div>
      <div class="word-def">${w.def}</div>
      <div class="word-verse">${w.verse}</div>
      <div class="word-insight"><strong>Note:</strong> ${w.insight}</div>
    </div>
  `).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>10 Greek & Hebrew Words Every Christian Should Know</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,600;1,400&family=Noto+Serif:ital@0;1&family=Noto+Serif+Hebrew&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @page {
      size: letter;
      margin: 1.6cm 1.8cm;
    }

    @media print {
      .print-banner { display: none !important; }
      body { background: white !important; }
    }

    body {
      font-family: 'Lora', 'Georgia', serif;
      color: #1a1a1a;
      background: #f5f4f0;
      line-height: 1.65;
    }

    /* ── Print banner (screen only) ── */
    .print-banner {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      background: #1a3a5c;
      color: #fff;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      font-family: system-ui, sans-serif;
      font-size: 0.9rem;
    }
    .print-banner span { flex: 1; }
    .print-banner kbd {
      background: rgba(255,255,255,0.2);
      border-radius: 4px;
      padding: 2px 7px;
      font-family: monospace;
    }
    .print-banner button {
      background: #c8a96e;
      border: none;
      color: #0f0f0f;
      padding: 7px 18px;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
      font-family: system-ui, sans-serif;
      font-size: 0.85rem;
      white-space: nowrap;
    }
    .banner-close {
      background: transparent !important;
      color: rgba(255,255,255,0.6) !important;
      padding: 4px 10px !important;
      font-size: 1.1rem !important;
    }

    /* ── Page wrapper ── */
    .page {
      background: white;
      width: 7.5in;
      min-height: 10in;
      margin: 60px auto 0;
      padding: 0;
      box-shadow: 0 4px 32px rgba(0,0,0,0.12);
    }
    @media print {
      .page {
        width: 100%;
        min-height: auto;
        margin: 0;
        box-shadow: none;
      }
    }

    /* ── Cover ── */
    .cover {
      background: linear-gradient(150deg, #0f1b35 0%, #1a2f52 60%, #0d2040 100%);
      color: white;
      min-height: 10in;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 60px;
      page-break-after: always;
      position: relative;
      overflow: hidden;
    }
    .cover::before {
      content: '';
      position: absolute;
      top: -60px; right: -60px;
      width: 300px; height: 300px;
      border-radius: 50%;
      background: rgba(200,169,110,0.06);
    }
    .cover::after {
      content: '';
      position: absolute;
      bottom: -80px; left: -40px;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: rgba(200,169,110,0.04);
    }
    .cover-deco {
      font-size: 4.5rem;
      color: #c8a96e;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      margin-bottom: 32px;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }
    .cover-eyebrow {
      font-family: system-ui, sans-serif;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #c8a96e;
      margin-bottom: 22px;
      position: relative;
      z-index: 1;
    }
    .cover-title {
      font-family: 'Playfair Display', serif;
      font-size: 2.7rem;
      font-weight: 700;
      line-height: 1.18;
      color: #ffffff;
      max-width: 540px;
      margin: 0 auto 24px;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }
    .cover-rule {
      width: 64px;
      height: 2px;
      background: linear-gradient(90deg, transparent, #c8a96e, transparent);
      margin: 28px auto;
      position: relative;
      z-index: 1;
    }
    .cover-subtitle {
      font-family: 'Lora', serif;
      font-size: 1.05rem;
      font-style: italic;
      color: rgba(255,255,255,0.7);
      max-width: 440px;
      margin: 0 auto 60px;
      line-height: 1.65;
      position: relative;
      z-index: 1;
    }
    .cover-preview {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 500px;
      margin: 0 auto 56px;
      position: relative;
      z-index: 1;
    }
    .cover-preview-pill {
      background: rgba(200,169,110,0.15);
      border: 1px solid rgba(200,169,110,0.3);
      border-radius: 20px;
      padding: 5px 14px;
      font-size: 0.82rem;
      color: #e0c48a;
      font-family: system-ui, sans-serif;
    }
    .cover-footer {
      margin-top: auto;
      padding-top: 48px;
      position: relative;
      z-index: 1;
    }
    .cover-site {
      font-family: 'Playfair Display', serif;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.45);
      letter-spacing: 0.08em;
    }

    /* ── Content pages ── */
    .content-page {
      padding: 52px 56px;
      page-break-after: always;
    }
    .content-page:last-of-type {
      page-break-after: auto;
    }
    .page-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 36px;
      padding-bottom: 14px;
      border-bottom: 1.5px solid #e8e4da;
    }
    .page-header-greek {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-size: 1.25rem;
      color: #c8a96e;
    }
    .page-header-title {
      font-family: system-ui, sans-serif;
      font-size: 0.7rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #999;
    }
    .page-header-right {
      margin-left: auto;
      font-family: system-ui, sans-serif;
      font-size: 0.7rem;
      color: #bbb;
      letter-spacing: 0.06em;
    }

    /* ── Word cards ── */
    .word-card {
      margin-bottom: 32px;
      padding-bottom: 28px;
      border-bottom: 1px solid #eceae4;
      page-break-inside: avoid;
    }
    .word-card:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    .word-top {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      margin-bottom: 10px;
    }
    .word-num {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #0f1b35;
      color: #c8a96e;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      flex-shrink: 0;
      margin-top: 3px;
    }
    .word-heading {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      gap: 10px;
    }
    .word-english {
      font-family: 'Playfair Display', serif;
      font-size: 1.45rem;
      font-weight: 700;
      color: #0f1b35;
      letter-spacing: -0.01em;
    }
    .word-lang {
      font-family: system-ui, sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #c8a96e;
      font-weight: 600;
      background: rgba(200,169,110,0.1);
      border: 1px solid rgba(200,169,110,0.3);
      border-radius: 4px;
      padding: 2px 8px;
    }
    .word-original {
      font-family: 'Noto Serif Hebrew', 'Noto Serif', 'Georgia', serif;
      font-size: 2rem;
      color: #1a2f52;
      line-height: 1.3;
      margin-bottom: 2px;
    }
    .word-original.rtl {
      direction: rtl;
      font-family: 'Noto Serif Hebrew', serif;
    }
    .word-translit {
      font-family: 'Lora', serif;
      font-style: italic;
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 12px;
    }
    .word-def {
      font-family: 'Lora', serif;
      font-size: 0.92rem;
      color: #2a2a2a;
      line-height: 1.72;
      margin-bottom: 12px;
    }
    .word-verse {
      background: linear-gradient(135deg, #f8f6f0, #f4f1e8);
      border-left: 3px solid #c8a96e;
      padding: 10px 14px;
      font-style: italic;
      font-size: 0.88rem;
      color: #444;
      line-height: 1.6;
      margin-bottom: 10px;
      border-radius: 0 5px 5px 0;
      font-family: 'Lora', serif;
    }
    .word-insight {
      font-family: system-ui, sans-serif;
      font-size: 0.82rem;
      color: #777;
      line-height: 1.65;
    }
    .word-insight strong {
      color: #555;
      font-weight: 600;
    }

    /* ── Back page ── */
    .back-page {
      background: linear-gradient(150deg, #0f1b35 0%, #1a2f52 100%);
      color: white;
      min-height: 10in;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 80px 60px;
      page-break-before: always;
    }
    .back-deco {
      font-size: 3rem;
      color: #c8a96e;
      font-family: 'Playfair Display', serif;
      font-style: italic;
      margin-bottom: 24px;
    }
    .back-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.9rem;
      font-weight: 700;
      color: white;
      margin-bottom: 16px;
    }
    .back-sub {
      font-family: 'Lora', serif;
      font-style: italic;
      font-size: 1rem;
      color: rgba(255,255,255,0.65);
      max-width: 420px;
      margin: 0 auto 40px;
      line-height: 1.7;
    }
    .back-features {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 48px;
    }
    .back-feature {
      font-family: system-ui, sans-serif;
      font-size: 0.88rem;
      color: rgba(255,255,255,0.75);
    }
    .back-feature::before {
      content: '✦ ';
      color: #c8a96e;
    }
    .back-url {
      font-family: 'Playfair Display', serif;
      font-size: 1.15rem;
      color: #c8a96e;
      letter-spacing: 0.05em;
      text-decoration: none;
    }
    .back-tagline {
      margin-top: 12px;
      font-family: system-ui, sans-serif;
      font-size: 0.75rem;
      color: rgba(255,255,255,0.35);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  </style>
</head>
<body>

  <!-- Screen-only banner -->
  <div class="print-banner">
    <span>
      <strong>To save your PDF:</strong> In the print dialog, set <kbd>Destination</kbd> to <kbd>Save as PDF</kbd>, then click Save.
    </span>
    <button onclick="window.print()">Open Print Dialog</button>
    <button class="banner-close" onclick="this.parentElement.style.display='none'">✕</button>
  </div>

  <!-- COVER PAGE -->
  <div class="page">
    <div class="cover">
      <div class="cover-deco">λ · א</div>
      <div class="cover-eyebrow">A Free Study Guide from biblewordanalysis.com</div>
      <h1 class="cover-title">10 Greek &amp; Hebrew Words Every Christian Should Know</h1>
      <div class="cover-rule"></div>
      <p class="cover-subtitle">The original languages of Scripture carry depths that English translations cannot fully contain. These ten words will change how you read the Bible.</p>
      <div class="cover-preview">
        <span class="cover-preview-pill">ἀγάπη agapē · Love</span>
        <span class="cover-preview-pill">חֶסֶד hesed · Lovingkindness</span>
        <span class="cover-preview-pill">λόγος logos · The Word</span>
        <span class="cover-preview-pill">שָׁלוֹם shalom · Peace</span>
        <span class="cover-preview-pill">χάρις charis · Grace</span>
        <span class="cover-preview-pill">καιρός kairos · Appointed Time</span>
        <span class="cover-preview-pill">אֱמֶת emet · Truth</span>
        <span class="cover-preview-pill">σωτηρία sōtēria · Salvation</span>
        <span class="cover-preview-pill">כָּבוֹד kabod · Glory</span>
        <span class="cover-preview-pill">πίστις pistis · Faith</span>
      </div>
      <div class="cover-footer">
        <div class="cover-site">biblewordanalysis.com</div>
      </div>
    </div>
  </div>

  <!-- CONTENT PAGES (words 1–5) -->
  <div class="page">
    <div class="content-page">
      <div class="page-header">
        <span class="page-header-greek">λ</span>
        <span class="page-header-title">Greek &amp; Hebrew Word Guide</span>
        <span class="page-header-right">biblewordanalysis.com</span>
      </div>
      ${words.slice(0, 5).map(w => `
      <div class="word-card">
        <div class="word-top">
          <div class="word-num">${w.num}</div>
          <div class="word-heading">
            <span class="word-english">${w.english}</span>
            <span class="word-lang">${w.lang} &nbsp;·&nbsp; Strong's ${w.strongs}</span>
          </div>
        </div>
        <div class="word-original${w.rtl ? ' rtl' : ''}">${w.original}</div>
        <div class="word-translit">${w.translit}</div>
        <div class="word-def">${w.def}</div>
        <div class="word-verse">${w.verse}</div>
        <div class="word-insight"><strong>Note:</strong> ${w.insight}</div>
      </div>
      `).join('')}
    </div>
  </div>

  <!-- CONTENT PAGES (words 6–10) -->
  <div class="page">
    <div class="content-page">
      <div class="page-header">
        <span class="page-header-greek">א</span>
        <span class="page-header-title">Greek &amp; Hebrew Word Guide</span>
        <span class="page-header-right">biblewordanalysis.com</span>
      </div>
      ${words.slice(5).map(w => `
      <div class="word-card">
        <div class="word-top">
          <div class="word-num">${w.num}</div>
          <div class="word-heading">
            <span class="word-english">${w.english}</span>
            <span class="word-lang">${w.lang} &nbsp;·&nbsp; Strong's ${w.strongs}</span>
          </div>
        </div>
        <div class="word-original${w.rtl ? ' rtl' : ''}">${w.original}</div>
        <div class="word-translit">${w.translit}</div>
        <div class="word-def">${w.def}</div>
        <div class="word-verse">${w.verse}</div>
        <div class="word-insight"><strong>Note:</strong> ${w.insight}</div>
      </div>
      `).join('')}
    </div>
  </div>

  <!-- BACK PAGE -->
  <div class="page">
    <div class="back-page">
      <div class="back-deco">λόγος</div>
      <h2 class="back-title">Go Deeper</h2>
      <p class="back-sub">Free word studies, original-language analysis, and long-form essays tracing the golden thread of Scripture.</p>
      <div class="back-features">
        <div class="back-feature">Search 55 Greek &amp; Hebrew words with definitions, etymology, and Strong's numbers</div>
        <div class="back-feature">20 key passages per word — with original text and theological notes</div>
        <div class="back-feature">Long-form essays on the Logos, Hesed, the Lamb, the Divine Name, and more</div>
        <div class="back-feature">Translation comparisons: ESV vs. NIV explained plainly</div>
      </div>
      <div class="back-url">biblewordanalysis.com</div>
      <div class="back-tagline">Tracing the golden thread of Scripture</div>
    </div>
  </div>

</body>
</html>`
}

export function downloadWordGuide() {
  const html = buildHtml()
  const win = window.open('', '_blank', 'width=960,height=720')
  if (!win) {
    alert('Please allow pop-ups for this site to download your PDF guide.')
    return
  }
  win.document.open()
  win.document.write(html)
  win.document.close()
  // Wait for fonts then open print dialog
  win.addEventListener('load', () => {
    if (win.document.fonts) {
      win.document.fonts.ready.then(() => setTimeout(() => win.print(), 300))
    } else {
      setTimeout(() => win.print(), 1000)
    }
  })
}
