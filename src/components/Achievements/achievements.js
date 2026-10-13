import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { highlights, timeline } from "../../data";
import "./achievements.css";

const PREVIEW = 8;

const Achievements = () => {
  const [showAll, setShowAll] = useState(false);
  const rows = showAll ? timeline : timeline.slice(0, PREVIEW);

  return (
    <section id="highlights" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            <span className="star">★</span> Highlights <span className="star">★</span>
          </h2>
          <span className="kicker">HALL OF FAME</span>
        </div>

        <div className="hl-grid">
          {highlights.map((h, i) => (
            <article
              key={h.title}
              className={`hl-card paper reveal ${i % 2 ? "tilt-r" : "tilt-l"}`}
              style={{ "--delay": `${(i % 3) * 90}ms` }}
            >
              <span className="tape" />
              <header className="hl-top">
                <span className={`tag tag--${h.tagColor}`}>{h.tag}</span>
                <span className="hl-source">{h.source}</span>
              </header>
              <h3 className="pixel">{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>

        <div className="log paper paper--plain reveal">
          <div className="log-head">
            <span className="pixel">$ cat milestones.log</span>
            <span className="log-count pixel">{timeline.length} ENTRIES</span>
          </div>
          <ol className="log-list">
            {rows.map(([date, text], i) => (
              <li key={`${date}-${i}`}>
                <span className="log-date">[{date}]</span>
                <span className="log-text">{text}</span>
              </li>
            ))}
          </ol>
          {timeline.length > PREVIEW && (
            <button
              className="log-toggle pixel"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
            >
              {showAll ? "Show less" : `Show all ${timeline.length}`}
              <LuChevronDown
                size={14}
                style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform .2s" }}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
