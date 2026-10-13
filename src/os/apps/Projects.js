import React, { useRef, useState } from "react";
import { useOS } from "../OSContext";
import { LuGithub, LuExternalLink, LuStar, LuFolderGit2 } from "react-icons/lu";
import { spotlightProjects, projects, profile } from "../../data";

const all = [
  ...spotlightProjects.map((p) => ({ ...p, featured: true, blurb: p.description })),
  ...projects,
];

const Projects = () => {
  const [sel, setSel] = useState(0);
  const { isMobile } = useOS();
  const detail = useRef(null);
  const p = all[sel];
  const pick = (i) => {
    setSel(i);
    if (isMobile) detail.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="proj">
      <div className="proj-list app-scroll">
        <p className="proj-label">
          <LuFolderGit2 size={14} /> ~/Projects · {all.length} items
        </p>
        <div className="proj-grid">
          {all.map((it, i) => (
            <button
              key={it.name}
              className={`proj-item ${sel === i ? "is-selected" : ""}`}
              onClick={() => pick(i)}
              onDoubleClick={() => it.live && window.open(it.live, "_blank", "noopener")}
            >
              <span className="proj-thumb">
                <img src={it.image} alt="" loading="lazy" />
                {it.featured && (
                  <span className="proj-star" title="Featured">
                    <LuStar size={11} />
                  </span>
                )}
              </span>
              <span className="proj-name">{it.name}</span>
            </button>
          ))}
          <a className="proj-item proj-more" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            <span className="proj-thumb">
              <LuGithub size={30} />
            </span>
            <span className="proj-name">More on GitHub ↗</span>
          </a>
        </div>
      </div>

      <aside className="proj-detail app-scroll" aria-live="polite" ref={detail}>
        <div className="proj-shot">
          <img src={p.image} alt={`${p.name} screenshot`} />
        </div>
        <div className="proj-info">
          {p.featured && <span className="chip-accent">Featured</span>}
          <h3>{p.name}</h3>
          {p.headline && <p className="proj-headline">{p.headline.join(" ")}</p>}
          <p className="proj-blurb">{p.blurb}</p>
          <ul className="proj-stack">
            {p.stack.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="proj-actions">
            {p.live && (
              <a className="pill pill--accent" href={p.live} target="_blank" rel="noopener noreferrer">
                <LuExternalLink size={14} /> Open live
              </a>
            )}
            <a className="pill" href={p.code} target="_blank" rel="noopener noreferrer">
              <LuGithub size={14} /> Source
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Projects;
