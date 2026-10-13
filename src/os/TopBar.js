import React, { useEffect, useRef, useState } from "react";
import {
  LuWifi,
  LuVolume2,
  LuBatteryFull,
  LuPower,
  LuChevronDown,
  LuMoon,
  LuSun,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuDownload,
} from "react-icons/lu";
import { useOS } from "./OSContext";
import { profile } from "../data";
import photo from "../assets/image.png";

const useNow = () => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);
  return now;
};

const Calendar = ({ now }) => {
  const y = now.getFullYear();
  const m = now.getMonth();
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const cells = Array.from({ length: first }, () => null).concat(Array.from({ length: days }, (_, i) => i + 1));
  return (
    <div className="cal">
      <p className="cal-day">{now.toLocaleDateString("en-GB", { weekday: "long" })}</p>
      <p className="cal-date">{now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
      <div className="cal-grid">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={`h${i}`} className="cal-head">
            {d}
          </span>
        ))}
        {cells.map((d, i) => (
          <span key={i} className={d === now.getDate() ? "is-today" : ""}>
            {d || ""}
          </span>
        ))}
      </div>
    </div>
  );
};

const notifications = [
  { icon: "🎓", title: "New certification", text: "Offenso Certified Security Analyst (OCSA)" },
  { icon: "💼", title: "Joined Systalent", text: "Programmer Analyst · Apr 2025" },
  { icon: "🏆", title: "Top 100 Coders", text: "Shortlisted #2 · Gtech MuLearn" },
];

const TopBar = ({ onActivities, overview }) => {
  const { isMobile, theme, setTheme, resume, restart } = useOS();
  const now = useNow();
  const [menu, setMenu] = useState(null); // 'cal' | 'quick' | null
  const ref = useRef(null);

  useEffect(() => {
    if (!menu) return undefined;
    const close = (e) => ref.current && !ref.current.contains(e.target) && setMenu(null);
    const esc = (e) => e.key === "Escape" && setMenu(null);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [menu]);

  const time = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="topbar" ref={ref}>
      {isMobile ? (
        <span className="topbar-brand">SelmanOS</span>
      ) : (
        <button className={`topbar-btn activities ${overview ? "is-on" : ""}`} onClick={onActivities} aria-label="Activities">
          <span className="ws-pill" />
          <span className="ws-dot" />
          <span className="ws-dot" />
        </button>
      )}

      <button
        className={`topbar-btn topbar-clock ${menu === "cal" ? "is-on" : ""}`}
        onClick={() => setMenu(menu === "cal" ? null : "cal")}
        aria-expanded={menu === "cal"}
      >
        {date} {time}
      </button>

      <button
        className={`topbar-btn topbar-tray ${menu === "quick" ? "is-on" : ""}`}
        onClick={() => setMenu(menu === "quick" ? null : "quick")}
        aria-label="System menu"
        aria-expanded={menu === "quick"}
      >
        <LuWifi size={15} />
        <LuVolume2 size={15} />
        <LuBatteryFull size={16} />
        {!isMobile && <LuChevronDown size={12} />}
      </button>

      {menu === "cal" && (
        <div className="popover popover--cal">
          <div className="notif-list">
            {notifications.map((n) => (
              <div key={n.title} className="notif">
                <span className="notif-icon">{n.icon}</span>
                <div>
                  <strong>{n.title}</strong>
                  <p>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Calendar now={now} />
        </div>
      )}

      {menu === "quick" && (
        <div className="popover popover--quick">
          <div className="qs-user">
            <span className="qs-avatar">
              <img src={photo} alt="" />
            </span>
            <div>
              <strong>{profile.fullName}</strong>
              <p>{profile.email}</p>
            </div>
            <button className="qs-round" aria-label="Restart" title="Restart" onClick={() => { setMenu(null); restart(); }}>
              <LuPower size={16} />
            </button>
          </div>
          <div className="qs-tiles">
            <button
              className={`qs-tile ${theme === "dark" ? "is-on" : ""}`}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <LuMoon size={16} /> : <LuSun size={16} />}
              <span>Dark Style</span>
            </button>
            <a className="qs-tile" href={resume} target="_blank" rel="noopener noreferrer">
              <LuDownload size={16} />
              <span>Résumé</span>
            </a>
            <a className="qs-tile" href={profile.github} target="_blank" rel="noopener noreferrer">
              <LuGithub size={16} />
              <span>GitHub</span>
            </a>
            <a className="qs-tile" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <LuLinkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a className="qs-tile qs-tile--wide" href={`mailto:${profile.email}`}>
              <LuMail size={16} />
              <span>Email me</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
