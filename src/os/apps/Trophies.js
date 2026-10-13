import React, { useState } from "react";
import { LuTrophy, LuAward, LuUsers, LuStar, LuCode, LuGraduationCap } from "react-icons/lu";
import { highlights, timeline } from "../../data";

const tagIcon = {
  AWARD: LuTrophy,
  SELECTED: LuStar,
  LEAD: LuUsers,
  ORGANIZER: LuUsers,
  HACKATHON: LuCode,
  MENTOR: LuGraduationCap,
};

const Trophies = () => {
  const [all, setAll] = useState(false);
  const rows = all ? timeline : timeline.slice(0, 8);
  return (
    <div className="trophies app-scroll">
      <div className="tr-banner">
        <span className="tr-banner-icon">
          <LuAward size={30} />
        </span>
        <div>
          <h2>Achievements unlocked</h2>
          <p>
            {highlights.length} / {highlights.length} · plus {timeline.length} entries in the log
          </p>
          <span className="tr-bar">
            <i />
          </span>
        </div>
      </div>

      <div className="tr-grid">
        {highlights.map((h) => {
          const Icon = tagIcon[h.tag] || LuStar;
          return (
            <article key={h.title} className={`tr-card tr-card--${h.tagColor}`}>
              <span className="tr-icon">
                <Icon size={20} />
              </span>
              <div>
                <span className="tr-tag">
                  {h.tag} · {h.source}
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            </article>
          );
        })}
      </div>

      <h3 className="tr-sub">Activity log</h3>
      <ol className="tr-log">
        {rows.map(([d, t], i) => (
          <li key={`${d}${i}`}>
            <span className="tr-date">{d}</span>
            <span>{t}</span>
          </li>
        ))}
      </ol>
      <button className="pill tr-more" onClick={() => setAll((v) => !v)}>
        {all ? "Show less" : `Show all ${timeline.length}`}
      </button>
    </div>
  );
};

export default Trophies;
