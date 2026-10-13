import React, { useEffect, useState } from "react";
import {
  LuHouse,
  LuFolderGit2,
  LuTrophy,
  LuImage,
  LuTrash2,
  LuGithub,
  LuChevronLeft,
  LuChevronRight,
  LuUser,
  LuBriefcase,
  LuMail,
  LuClock,
} from "react-icons/lu";
import { useOS } from "../OSContext";
import { FolderIcon, DocIcon } from "../icons";
import { profile } from "../../data";

const homeItems = [
  { name: "About", app: "about", emblem: LuUser },
  { name: "Work", app: "work", emblem: LuBriefcase },
  { name: "Projects", app: "projects", emblem: LuFolderGit2 },
  { name: "Highlights", app: "highlights", emblem: LuTrophy },
  { name: "Certificates", app: "certs", emblem: LuImage },
  { name: "Contact", app: "contact", emblem: LuMail },
  { name: "resume.pdf", file: true },
];

const Files = ({ args }) => {
  const { openApp, resume } = useOS();
  const [loc, setLoc] = useState(args?.loc || "home");
  const [sel, setSel] = useState(null);

  useEffect(() => {
    if (args?.loc) setLoc(args.loc);
  }, [args]);

  const launch = (item) => {
    if (item.file) window.open(resume, "_blank", "noopener");
    else openApp(item.app);
  };

  const side = [
    { id: "recent", label: "Recent", icon: LuClock },
    { id: "home", label: "Home", icon: LuHouse },
    { id: "projects", label: "Projects", icon: LuFolderGit2, app: "projects" },
    { id: "highlights", label: "Highlights", icon: LuTrophy, app: "highlights" },
    { id: "certs", label: "Certificates", icon: LuImage, app: "certs" },
    { id: "trash", label: "Trash", icon: LuTrash2 },
  ];

  const items = loc === "home" ? homeItems : loc === "recent" ? homeItems.slice(0, 3) : [];

  return (
    <div className="files">
      <aside className="files-side">
        {side.map((s) => (
          <button
            key={s.id}
            className={loc === s.id ? "is-active" : ""}
            onClick={() => (s.app ? openApp(s.app) : setLoc(s.id))}
          >
            <s.icon size={16} /> {s.label}
          </button>
        ))}
        <hr />
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          <LuGithub size={16} /> github.com
        </a>
      </aside>
      <div className="files-main">
        <div className="files-bar">
          <button aria-label="Back" onClick={() => setLoc("home")} disabled={loc === "home"}>
            <LuChevronLeft size={16} />
          </button>
          <button aria-label="Forward" disabled>
            <LuChevronRight size={16} />
          </button>
          <div className="files-path">
            <LuHouse size={14} />
            <span>selman</span>
            {loc !== "home" && (
              <>
                <span className="files-sep">/</span>
                <span>{loc === "trash" ? "Trash" : "Recent"}</span>
              </>
            )}
          </div>
        </div>
        <div className="files-grid app-scroll" onClick={(e) => e.target === e.currentTarget && setSel(null)}>
          {items.map((it) => (
            <button
              key={it.name}
              className={`files-item ${sel === it.name ? "is-selected" : ""}`}
              onClick={() => setSel(it.name)}
              onDoubleClick={() => launch(it)}
              onKeyDown={(e) => e.key === "Enter" && launch(it)}
            >
              {it.file ? <DocIcon size={56} /> : <FolderIcon size={64} emblem={it.emblem} />}
              <span>{it.name}</span>
            </button>
          ))}
          {loc === "trash" && (
            <div className="files-empty">
              <LuTrash2 size={56} />
              <strong>Trash is Empty</strong>
              <p>I ship clean code. Mostly.</p>
            </div>
          )}
        </div>
        <p className="files-status">
          {sel ? `“${sel}” selected — double-click to open` : `${items.length} items`}
        </p>
      </div>
    </div>
  );
};

export default Files;
