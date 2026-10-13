import React, { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { AppIcon } from "./icons";
import { useOS } from "./OSContext";
import { profile } from "../data";

const Overview = ({ apps, onClose }) => {
  const { openApp, resume } = useOS();
  const [q, setQ] = useState("");
  const input = useRef(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  const extras = [
    { id: "x-resume", name: "Résumé", icon: "resume", run: () => window.open(resume, "_blank", "noopener") },
    { id: "x-github", name: "GitHub", icon: "github", run: () => window.open(profile.github, "_blank", "noopener") },
  ];

  const items = [
    ...apps.map((a) => ({ id: a.id, name: a.name, icon: a.icon, keywords: a.title, run: () => openApp(a.id) })),
    ...extras,
  ].filter((a) => `${a.name} ${a.keywords || ""}`.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <div className="overview" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
      <label className="ov-search">
        <LuSearch size={16} />
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && items[0]) {
              items[0].run();
              onClose();
            }
          }}
          placeholder="Type to search"
          aria-label="Search apps"
        />
      </label>
      <ul className="ov-grid">
        {items.map((a) => (
          <li key={a.id}>
            <button
              onClick={() => {
                a.run();
                onClose();
              }}
            >
              <AppIcon kind={a.icon} size={72} />
              <span>{a.name}</span>
            </button>
          </li>
        ))}
        {!items.length && <li className="ov-empty">No results for “{q}”</li>}
      </ul>
    </div>
  );
};

export default Overview;
