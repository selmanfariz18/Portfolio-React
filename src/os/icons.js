import React from "react";
import {
  LuFolder,
  LuTerminal,
  LuFileText,
  LuSettings,
  LuTrophy,
  LuImage,
  LuMail,
  LuFolderGit2,
  LuGithub,
  LuLayoutGrid,
} from "react-icons/lu";

const glyphs = {
  files: LuFolder,
  terminal: LuTerminal,
  editor: LuFileText,
  settings: LuSettings,
  projects: LuFolderGit2,
  trophies: LuTrophy,
  gallery: LuImage,
  mail: LuMail,
  resume: LuFileText,
  github: LuGithub,
  grid: LuLayoutGrid,
};

// Yaru-flavoured app icon: a rounded tile with a glyph
export const AppIcon = ({ kind, size = 44 }) => {
  const Glyph = glyphs[kind] || LuFolder;
  return (
    <span className={`app-icon app-icon--${kind}`} style={{ width: size, height: size }} aria-hidden="true">
      {kind === "terminal" ? (
        <span className="app-icon-prompt" style={{ fontSize: size * 0.34 }}>
          &gt;_
        </span>
      ) : (
        <Glyph size={size * 0.52} />
      )}
      {kind === "resume" && <span className="app-icon-badge">PDF</span>}
    </span>
  );
};

// Yaru-style orange folder
export const FolderIcon = ({ size = 64, emblem: Emblem }) => (
  <span className="folder-icon" style={{ width: size, height: size * 0.82 }} aria-hidden="true">
    <svg viewBox="0 0 64 52" width="100%" height="100%">
      <defs>
        <linearGradient id="fold-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7955f" />
          <stop offset="1" stopColor="#e95420" />
        </linearGradient>
      </defs>
      <path d="M4 6a4 4 0 0 1 4-4h14l6 6h28a4 4 0 0 1 4 4v4H4z" fill="#b8431a" />
      <rect x="4" y="12" width="56" height="38" rx="4" fill="url(#fold-front)" />
      <rect x="4" y="12" width="56" height="3" fill="#ffffff" opacity=".25" />
    </svg>
    {Emblem && (
      <span className="folder-emblem">
        <Emblem size={size * 0.28} />
      </span>
    )}
  </span>
);

// PDF document icon for desktop
export const DocIcon = ({ size = 56 }) => (
  <span className="doc-icon" style={{ width: size * 0.78, height: size }} aria-hidden="true">
    <span className="doc-icon-fold" />
    <span className="doc-icon-label">PDF</span>
  </span>
);
