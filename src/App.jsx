import { useState } from 'react'
import './App.css'

const GREEK_WORDS = {
  love: [
    {
      greek: 'ἀγάπη',
      transliteration: 'agapē',
      strongs: 'G26',
      definition: "Unconditional, self-sacrificial love — the highest form of love; God's love for humanity and the love commanded between believers.",
      etymology: "From agapaō (to prefer, to choose). Distinguished from erōs (desire) and philia (friendship).",
      frequency: 143,
      testament: 'NT',
    },
    {
      greek: 'φιλέω',
      transliteration: 'phileō',
      strongs: 'G5368',
      definition: 'Brotherly affection, fondness, warmth — the love of friendship and family.',
      etymology: 'From philos (friend/dear). Relates to philadelphia (brotherly love) and philanthrōpia (love of humanity).',
      frequency: 25,
      testament: 'NT',
    },
    {
      greek: 'ἔρως',
      transliteration: 'erōs',
      strongs: '—',
      definition: 'Romantic or passionate desire. Notably absent from the New Testament — Paul deliberately avoids it.',
      etymology: "From eraō (to desire intensely). Root of English 'erotic.' Its absence in the NT is theologically significant.",
      frequency: 0,
      testament: 'NT',
    },
    {
      greek: 'אַהֲבָה',
      transliteration: 'ahavah',
      strongs: 'H160',
      definition: "The primary Hebrew word for love — encompasses love between people, love of God, and love of objects.",
      etymology: "From ahav (to love, to have affection). Used for God's covenant love and human love.",
      frequency: 40,
      testament: 'OT',
    },
    {
      greek: 'חֶסֶד',
      transliteration: 'hesed',
      strongs: 'H2617',
      definition: "Covenant love, lovingkindness, steadfast mercy — God's faithful love rooted in covenant relationship.",
      etymology: "Often translated 'lovingkindness' or 'steadfast love.' Core to God's character in the OT.",
      frequency: 248,
      testament: 'OT',
    },
  ],
  faith: [
    {
      greek: 'πίστις',
      transliteration: 'pistis',
      strongs: 'G4102',
      definition: "Faith, belief, trust — both the act of believing and the content believed. In Paul, the foundational means of justification.",
      etymology: 'From peitho (to persuade, to trust). Pistis means both subjective faith and objective faithfulness.',
      frequency: 243,
      testament: 'NT',
    },
    {
      greek: 'אֱמוּנָה',
      transliteration: 'emunah',
      strongs: 'H530',
      definition: 'Faithfulness, steadfastness, trustworthiness — the OT root of NT faith. "The just shall live by his emunah" (Hab 2:4).',
      etymology: "From aman (to be firm, to support). Root of 'amen' — what is firm and reliable.",
      frequency: 49,
      testament: 'OT',
    },
  ],
  grace: [
    {
      greek: 'χάρις',
      transliteration: 'charis',
      strongs: 'G5485',
      definition: "Grace, favor — God's unmerited favor toward sinners. The foundational concept of the gospel in Paul's letters.",
      etymology: 'From chairō (to rejoice, to be glad). Charis gives freely, without obligation or debt.',
      frequency: 156,
      testament: 'NT',
    },
    {
      greek: 'חֵן',
      transliteration: 'chen',
      strongs: 'H2580',
      definition: "Grace, favor — finding favor in the eyes of someone greater. 'Noah found chen in the eyes of the LORD.'",
      etymology: "From chanan (to be gracious, to show favor). Related to channah (Hannah — 'grace').",
      frequency: 69,
      testament: 'OT',
    },
  ],
  peace: [
    {
      greek: 'εἰρήνη',
      transliteration: 'eirēnē',
      strongs: 'G1515',
      definition: "Peace — not merely absence of conflict, but wholeness, harmony, and well-being. The peace Christ gives 'surpasses understanding.'",
      etymology: 'From eirō (to join). Influenced by Hebrew shalom — fullness rather than just cessation of conflict.',
      frequency: 92,
      testament: 'NT',
    },
    {
      greek: 'שָׁלוֹם',
      transliteration: 'shalom',
      strongs: 'H7965',
      definition: 'Peace, wholeness, completeness — the comprehensive well-being of individuals, communities, and nations in right relationship.',
      etymology: 'From shalam (to be complete, to be sound). Encompasses health, prosperity, safety, and relational harmony.',
      frequency: 237,
      testament: 'OT',
    },
  ],
  spirit: [
    {
      greek: 'πνεῦμα',
      transliteration: 'pneuma',
      strongs: 'G4151',
      definition: 'Spirit, breath, wind — the divine Spirit (Holy Spirit), the human spirit, and angelic beings. Context determines meaning.',
      etymology: 'From pneō (to breathe, to blow). Same root as pneumonia. Wind and breath are the visible signs of invisible spirit.',
      frequency: 385,
      testament: 'NT',
    },
    {
      greek: 'רוּחַ',
      transliteration: 'ruach',
      strongs: 'H7307',
      definition: "Spirit, wind, breath — 'The Spirit of God was hovering over the waters' (Gen 1:2). The animating breath of life.",
      etymology: 'From ruach (to breathe, to blow). Appears first in Genesis 1:2. Also means the wind.',
      frequency: 378,
      testament: 'OT',
    },
  ],
  hope: [
    {
      greek: 'ἐλπίς',
      transliteration: 'elpis',
      strongs: 'G1680',
      definition: "Hope — not wishful thinking but confident expectation of what God has promised. The anchor of the soul (Heb 6:19).",
      etymology: "From elpō (to anticipate). Biblical hope is certain (God's promise), unlike human hope (mere possibility).",
      frequency: 53,
      testament: 'NT',
    },
    {
      greek: 'תִּקְוָה',
      transliteration: 'tiqvah',
      strongs: 'H8615',
      definition: "Hope, expectation, cord — the 'scarlet cord' (tiqvah) in Rahab's window (Josh 2:18) is the same word as hope.",
      etymology: 'From qavah (to wait, to expect). The cord image: hope as a lifeline you hold onto.',
      frequency: 34,
      testament: 'OT',
    },
  ],
  light: [
    {
      greek: 'φῶς',
      transliteration: 'phōs',
      strongs: 'G5457',
      definition: "Light — physical light, divine light, and moral/spiritual enlightenment. 'God is light; in him is no darkness at all' (1 John 1:5).",
      etymology: 'From phainō (to shine). Root of photography, phosphorus, phenomenon. Opposite: skotia (darkness).',
      frequency: 73,
      testament: 'NT',
    },
    {
      greek: 'אוֹר',
      transliteration: 'or',
      strongs: 'H216',
      definition: "Light — the first creation ('Let there be light,' Gen 1:3). Both physical light and God's revelation and salvation.",
      etymology: "From or (to be or become light). Used for the light of Torah: 'Your word is a lamp… and a light to my path' (Ps 119:105).",
      frequency: 120,
      testament: 'OT',
    },
  ],
  truth: [
    {
      greek: 'ἀλήθεια',
      transliteration: 'alētheia',
      strongs: 'G225',
      definition: "Truth — reality as opposed to appearance; divine disclosure. 'I am the way, the truth, and the life' (John 14:6).",
      etymology: "From a- (not) + lēthē (hidden/forgotten). Truth is what is 'un-hidden' — the disclosure of reality.",
      frequency: 109,
      testament: 'NT',
    },
    {
      greek: 'אֱמֶת',
      transliteration: 'emet',
      strongs: 'H571',
      definition: "Truth, reliability, faithfulness — truth as that which is firm and enduring. God's truth is his reliable character.",
      etymology: 'From aman (to be firm, to be reliable). Related to amen. The three letters aleph-mem-tav encompass the Hebrew alphabet.',
      frequency: 127,
      testament: 'OT',
    },
  ],
  gospel: [
    {
      greek: 'εὐαγγέλιον',
      transliteration: 'euangelion',
      strongs: 'G2098',
      definition: "Good news, gospel — the announcement of victory in the ancient world. In NT: the announcement that God has acted decisively in Jesus Christ.",
      etymology: "From eu (good) + angelos (messenger). An euangelos was a herald announcing military victory. Root of 'evangelical.'",
      frequency: 76,
      testament: 'NT',
    },
  ],
  word: [
    {
      greek: 'λόγος',
      transliteration: 'logos',
      strongs: 'G3056',
      definition: "Word, reason, logic — the rational principle behind all creation. 'In the beginning was the Logos' (John 1:1). Jesus IS the Word.",
      etymology: 'From legō (to speak, to lay out). In Greek philosophy: the rational principle of the cosmos. John redefines it as personal.',
      frequency: 330,
      testament: 'NT',
    },
    {
      greek: 'ῥῆμα',
      transliteration: 'rhēma',
      strongs: 'G4487',
      definition: "Spoken word, utterance — the specific word spoken in a moment. Distinct from logos (the enduring Word). 'Man shall not live by bread alone but by every rhēma of God' (Matt 4:4).",
      etymology: 'From rheō (to speak, to flow). An individual spoken word or statement, vs. logos which is the broader concept.',
      frequency: 68,
      testament: 'NT',
    },
    {
      greek: 'דָּבָר',
      transliteration: 'dabar',
      strongs: 'H1697',
      definition: "Word, thing, matter — the Hebrew dabar is both the spoken word and the event it creates. God's dabar is performative: it does what it says.",
      etymology: "From dabar (to speak, to drive forward). 'Dabar' also means 'thing' — Hebrew sees word and deed as inseparable.",
      frequency: 1440,
      testament: 'OT',
    },
  ],
}

const KEY_PASSAGES = {
  love: [
    {
      reference: 'John 21:15–17',
      english: '"Simon son of John, do you love [agapas] me more than these?" … "Yes, Lord, you know that I love [philō] you."',
      greek: 'Σίμων Ἰωάννου, ἀγαπᾷς με πλέον τούτων; … Ναί, Κύριε, σὺ οἶδας ὅτι φιλῶ σε.',
      note: 'Jesus uses agapē (covenant love); Peter responds with phileō (affection). Jesus tests whether Peter will commit to sacrificial love, not just sentiment.',
    },
    {
      reference: '1 Corinthians 13:13',
      english: '"And now these three remain: faith, hope and love [agapē]. But the greatest of these is love."',
      greek: 'νυνὶ δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα· μείζων δὲ τούτων ἡ ἀγάπη.',
      note: "Paul's great triad — agapē surpasses even faith and hope because it endures into eternity.",
    },
    {
      reference: 'John 3:16',
      english: '"For God so loved [ēgapēsen] the world that he gave his one and only Son…"',
      greek: 'Οὕτως γὰρ ἠγάπησεν ὁ Θεὸς τὸν κόσμον, ὥστε τὸν Υἱὸν αὐτοῦ τὸν μονογενῆ ἔδωκεν',
      note: "God's love (agapē) for the cosmos — not sentimental affection but the costly act of giving.",
    },
  ],
  faith: [
    {
      reference: 'Hebrews 11:1',
      english: '"Now faith [pistis] is the substance of things hoped for, the evidence of things not seen."',
      greek: 'Ἔστιν δὲ πίστις ἐλπιζομένων ὑπόστασις, πραγμάτων ἔλεγχος οὐ βλεπομένων.',
      note: "The NT's most precise definition of pistis: hypostasis (substance/foundation) and elenchos (evidence/conviction).",
    },
    {
      reference: 'Romans 1:17',
      english: '"The righteous shall live by faith [pistis]." (Quoting Hab 2:4 — emunah)',
      greek: 'ὁ δὲ δίκαιος ἐκ πίστεως ζήσεται.',
      note: 'Paul quotes the Hebrew emunah (faithfulness) and renders it pistis — bridging OT covenant faithfulness and NT justifying faith.',
    },
  ],
  grace: [
    {
      reference: 'Ephesians 2:8–9',
      english: '"For it is by grace [chariti] you have been saved, through faith — and this is not from yourselves, it is the gift of God."',
      greek: 'Τῇ γὰρ χάριτί ἐστε σεσῳσμένοι διὰ πίστεως· καὶ τοῦτο οὐκ ἐξ ὑμῶν, Θεοῦ τὸ δῶρον',
      note: "The grammatical anchor of Reformation theology. Charis is God's initiative; pistis is the human response.",
    },
    {
      reference: 'John 1:14',
      english: '"The Word became flesh… full of grace [charitos] and truth."',
      greek: 'ὁ Λόγος σὰρξ ἐγένετο… πλήρης χάριτος καὶ ἀληθείας.',
      note: 'John pairs charis (grace) with alētheia (truth) — the character of the incarnate Logos.',
    },
  ],
  peace: [
    {
      reference: 'Philippians 4:7',
      english: '"And the peace [eirēnē] of God, which surpasses all understanding, will guard your hearts and minds in Christ Jesus."',
      greek: 'ἡ εἰρήνη τοῦ Θεοῦ ἡ ὑπερέχουσα πάντα νοῦν φρουρήσει τὰς καρδίας ὑμῶν',
      note: 'Eirēnē as military metaphor: peace "guards" (phrourēsei — a garrison) your inner life.',
    },
    {
      reference: 'Numbers 6:24–26',
      english: '"The LORD bless you and keep you… and give you shalom."',
      greek: 'יְבָרֶכְךָ יְהוָה וְיִשְׁמְרֶךָ… וְיָשֵׂם לְךָ שָׁלוֹם.',
      note: 'The Aaronic blessing — shalom is the culminating gift. More than tranquility: comprehensive flourishing.',
    },
  ],
  spirit: [
    {
      reference: 'Genesis 1:2',
      english: '"The Spirit [ruach] of God was hovering over the waters."',
      greek: 'וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל-פְּנֵי הַמָּיִם',
      note: "First appearance of ruach in Scripture. The Spirit's hovering (merachefet) mirrors a mother bird over her nest — creative, nurturing presence.",
    },
    {
      reference: 'John 3:8',
      english: '"The wind [pneuma] blows wherever it pleases… So it is with everyone born of the Spirit [pneumatos]."',
      greek: 'τὸ πνεῦμα ὅπου θέλει πνεῖ… οὕτως ἐστὶν πᾶς ὁ γεγεννημένος ἐκ τοῦ πνεύματος.',
      note: 'Jesus plays on pneuma meaning both "wind" and "Spirit" — the invisibility and power of the Spirit mirrors the wind.',
    },
  ],
  hope: [
    {
      reference: 'Hebrews 6:19',
      english: '"We have this hope as an anchor for the soul, firm and secure."',
      greek: 'ἣν ὡς ἄγκυραν ἔχομεν τῆς ψυχῆς, ἀσφαλῆ τε καὶ βεβαίαν',
      note: 'The anchor (agkyra) was a common symbol of hope in ancient Mediterranean culture. The writer redefines it: hope anchored not to the sea floor but to heaven itself.',
    },
    {
      reference: 'Romans 8:24–25',
      english: '"For in this hope we were saved. But hope that is seen is no hope at all… we hope for what we do not yet have."',
      greek: 'τῇ γὰρ ἐλπίδι ἐσώθημεν· ἐλπὶς δὲ βλεπομένη οὐκ ἔστιν ἐλπίς',
      note: 'Paul defines elpis by what it is NOT — visible, possessed. True hope is confident in the unseen.',
    },
  ],
  light: [
    {
      reference: 'John 1:4–5',
      english: '"In him was life, and that life was the light [phōs] of all mankind. The light shines in the darkness, and the darkness has not overcome it."',
      greek: 'ἐν αὐτῷ ζωὴ ἦν, καὶ ἡ ζωὴ ἦν τὸ φῶς τῶν ἀνθρώπων· καὶ τὸ φῶς ἐν τῇ σκοτίᾳ φαίνει',
      note: 'Katalambanō (overcome/seize) — the darkness cannot "comprehend" OR "overpower" the light. Both meanings are likely intentional.',
    },
    {
      reference: 'Genesis 1:3',
      english: '"And God said, Let there be light [or]; and there was light."',
      greek: 'וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי-אוֹר',
      note: "God's first act of creation is verbal — and it is light. John 1 deliberately echoes this: the Logos who IS light.",
    },
  ],
  truth: [
    {
      reference: 'John 14:6',
      english: '"Jesus said, I am the way, the truth [alētheia], and the life."',
      greek: 'λέγει αὐτῷ ὁ Ἰησοῦς· Ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή',
      note: 'Jesus identifies himself AS truth — not merely as a teacher of truth. Alētheia (un-hiddenness) applied to a person: the one in whom reality is disclosed.',
    },
    {
      reference: 'John 18:38',
      english: '"What is truth?" Pilate asked. He went back outside.',
      greek: 'λέγει αὐτῷ ὁ Πιλᾶτος· Τί ἐστιν ἀλήθεια;',
      note: "The irony of John's Gospel: Pilate asks the question about alētheia while standing in front of the one who IS alētheia.",
    },
  ],
  gospel: [
    {
      reference: 'Romans 1:16',
      english: '"For I am not ashamed of the gospel [euangelion], because it is the power of God that brings salvation."',
      greek: 'Οὐ γὰρ ἐπαισχύνομαι τὸ εὐαγγέλιον· δύναμις γὰρ Θεοῦ ἐστιν εἰς σωτηρίαν',
      note: "The gospel is dynamis (power) — the same word used for miracles. Paul's mission statement for the letter to Rome.",
    },
    {
      reference: 'Mark 1:14–15',
      english: '"Jesus went into Galilee, proclaiming the good news [euangelion] of God."',
      greek: 'ἦλθεν ὁ Ἰησοῦς εἰς τὴν Γαλιλαίαν κηρύσσων τὸ εὐαγγέλιον τοῦ Θεοῦ',
      note: "Mark's first use — euangelion precedes Paul. Jesus himself announces the 'gospel of God' before Paul theologizes it.",
    },
  ],
  word: [
    {
      reference: 'John 1:1',
      english: '"In the beginning was the Word [Logos], and the Word was with God, and the Word was God."',
      greek: 'Ἐν ἀρχῇ ἦν ὁ Λόγος, καὶ ὁ Λόγος ἦν πρὸς τὸν Θεόν, καὶ Θεὸς ἦν ὁ Λόγος.',
      note: 'John opens his Gospel matching Genesis 1:1 (En archē = Bereshit). The Logos is eternal, relational (pros = toward/face-to-face), and divine.',
    },
    {
      reference: 'Hebrews 4:12',
      english: '"For the word [logos] of God is alive and active, sharper than any double-edged sword."',
      greek: 'Ζῶν γὰρ ὁ λόγος τοῦ Θεοῦ καὶ ἐνεργής, καὶ τομώτερος ὑπὲρ πᾶσαν μάχαιραν δίστομον',
      note: 'The logos is zōn (living) and energēs (energetic/active) — not a static text but a living agency.',
    },
  ],
}

const TESTAMENT_LABELS = { NT: 'New Testament', OT: 'Old Testament', Both: 'Both Testaments' }

export default function App() {
  const [searchInput, setSearchInput] = useState('')
  const [testament, setTestament] = useState('Both')
  const [results, setResults] = useState(null)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    const term = searchInput.trim().toLowerCase()
    setSearched(true)

    const words = GREEK_WORDS[term]
    const passages = KEY_PASSAGES[term] || []

    if (!words) {
      setResults(null)
      return
    }

    const filtered = testament === 'Both'
      ? words
      : words.filter(w => w.testament === testament)

    setResults({ word: term, definitions: filtered, passages })
  }

  const handlePill = (word) => {
    setSearchInput(word)
    setTestament('Both')
    const words = GREEK_WORDS[word]
    const passages = KEY_PASSAGES[word] || []
    setResults({ word, definitions: words, passages })
    setSearched(true)
  }

  const availableWords = Object.keys(GREEK_WORDS)

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-greek">λόγος</span>
            <div className="logo-text">
              <h1>Bible Word Study</h1>
              <p>Greek &amp; Hebrew word analysis</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="search-section">
          <h2 className="search-title">Search a word — discover its depth</h2>
          <p className="search-subtitle">
            See the original Greek and Hebrew words, their meanings, and key passages where they appear.
          </p>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-row">
              <input
                className="search-input"
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder='Try "love", "faith", "grace", "peace"…'
              />
              <select
                className="testament-select"
                value={testament}
                onChange={e => setTestament(e.target.value)}
              >
                <option value="Both">Both Testaments</option>
                <option value="NT">New Testament only</option>
                <option value="OT">Old Testament only</option>
              </select>
              <button className="search-btn" type="submit">Search</button>
            </div>
          </form>

          <div className="word-pills">
            {availableWords.map(w => (
              <button key={w} className="pill" onClick={() => handlePill(w)}>
                {w}
              </button>
            ))}
          </div>
        </section>

        {searched && !results && (
          <div className="no-results">
            <p>No results for &ldquo;<strong>{searchInput}</strong>&rdquo;.</p>
            <p>Try one of the words above — more words are being added regularly.</p>
          </div>
        )}

        {results && (
          <section className="results">
            <div className="results-header">
              <h2>
                Results for <span className="highlight">&ldquo;{results.word}&rdquo;</span>
                <span className="testament-badge">{TESTAMENT_LABELS[testament]}</span>
              </h2>
              <p className="results-count">
                {results.definitions.length} original word{results.definitions.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="definitions">
              {results.definitions.map((def, i) => (
                <div className="word-card" key={i}>
                  <div className="word-card-header">
                    <div className="word-main">
                      <span className="greek-word">{def.greek}</span>
                      <span className="transliteration">{def.transliteration}</span>
                      <span className={`testament-tag ${def.testament}`}>{def.testament}</span>
                    </div>
                    <div className="word-meta">
                      <span className="strongs">Strong&apos;s {def.strongs}</span>
                      {def.frequency > 0 ? (
                        <span className="frequency">{def.frequency}&times; in {def.testament}</span>
                      ) : (
                        <span className="frequency zero">Not used in NT</span>
                      )}
                    </div>
                  </div>

                  <p className="definition">{def.definition}</p>

                  <div className="etymology-block">
                    <span className="etymology-label">Etymology</span>
                    <p className="etymology">{def.etymology}</p>
                  </div>
                </div>
              ))}
            </div>

            {results.passages.length > 0 && (
              <div className="passages-section">
                <h3 className="passages-title">Key Passages</h3>
                <div className="passages">
                  {results.passages.map((p, i) => (
                    <div className="passage-card" key={i}>
                      <div className="passage-ref">{p.reference}</div>
                      <p className="passage-english">{p.english}</p>
                      <p className="passage-greek">{p.greek}</p>
                      {p.note && (
                        <div className="passage-note">
                          <span className="note-label">Theological note</span>
                          <p>{p.note}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {!searched && (
          <section className="feature-grid">
            <div className="feature">
              <div className="feature-icon">α</div>
              <h3>Original Languages</h3>
              <p>See the Greek (NT) and Hebrew (OT) words behind your English translation — with transliteration and Strong&apos;s numbers.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">λ</div>
              <h3>Word Distinctions</h3>
              <p>Discover nuances that English misses — like the three Greek words for love, or the difference between logos and rhēma.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✦</div>
              <h3>Key Passages</h3>
              <p>See the most important verses for each word, with the original text and theological context explained.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">∞</div>
              <h3>Etymology</h3>
              <p>Understand where words come from — the roots that shaped their meaning and how they connect across Scripture.</p>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Bible Word Study Tool — built for pastors, teachers, and serious students of Scripture.</p>
        <p className="footer-sub">Definitions reference Thayer&apos;s Greek Lexicon, BDAG, and Brown-Driver-Briggs Hebrew.</p>
      </footer>
    </div>
  )
}
