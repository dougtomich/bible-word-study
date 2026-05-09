import { useState } from 'react'
import './App.css'
import { GREEK_WORDS, KEY_PASSAGES } from './data.js'

export default function App() {
  const [searchInput, setSearchInput] = useState('')
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

    setResults({ word: term, definitions: words, passages })
  }

  const handlePill = (word) => {
    setSearchInput(word)
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
