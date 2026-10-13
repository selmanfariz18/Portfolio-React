import React, { useState } from "react";
import { LuFileText, LuFileJson, LuX } from "react-icons/lu";
import { about, experience, skills, profile } from "../../data";

// Each "file" is a list of lines; each line is [className, text] segments.
const md = () => {
  const L = [];
  L.push([["h", "# Selmanul Farizy"]]);
  L.push([["dim", `> ${profile.role} developer · ${profile.location}`]]);
  L.push([]);
  about.forEach((p) => {
    L.push([["", p]]);
    L.push([]);
  });
  L.push([["h2", "## Right now"]]);
  L.push([["bullet", "- "], ["", "Programmer Analyst at "], ["b", "Systalent Software"]]);
  L.push([["bullet", "- "], ["", "Shipping payments, order flows & shopping features"]]);
  L.push([["bullet", "- "], ["", "Learning offensive security on the side ("], ["b", "OCSA"], ["", ")"]]);
  return L;
};

const xp = () => {
  const L = [[["h", "# Experience"]], []];
  experience.forEach((x) => {
    L.push([["h2", `## ${x.company}`]]);
    L.push([["b", x.role], ["dim", `  ·  ${x.period}`]]);
    L.push([]);
    L.push([["", x.summary]]);
    if (x.features) {
      L.push([]);
      x.features.forEach((f) => L.push([["bullet", "- "], ["b", `**${f.title}**`], ["", ` — ${f.text}`]]));
    }
    L.push([]);
  });
  return L;
};

const json = () => {
  const L = [[["punc", "{"]]];
  skills.forEach((g, gi) => {
    L.push([["", "  "], ["key", `"${g.group.toLowerCase()}"`], ["punc", ": ["]]);
    g.items.forEach((it, i) => {
      L.push([["", "    "], ["str", `"${it}"`], ["punc", i < g.items.length - 1 ? "," : ""]]);
    });
    L.push([["", "  "], ["punc", gi < skills.length - 1 ? "]," : "]"]]);
  });
  L.push([["punc", "}"]]);
  return L;
};

const files = [
  { name: "experience.md", icon: LuFileText, build: xp },
  { name: "README.md", icon: LuFileText, build: md },
  { name: "skills.json", icon: LuFileJson, build: json },
];

const Editor = () => {
  const [tab, setTab] = useState(0);
  const lines = files[tab].build();
  return (
    <div className="editor">
      <div className="ed-tabs" role="tablist">
        {files.map((f, i) => (
          <button
            key={f.name}
            role="tab"
            aria-selected={tab === i}
            className={tab === i ? "is-active" : ""}
            onClick={() => setTab(i)}
          >
            <f.icon size={14} /> {f.name}
            {tab === i && <LuX size={12} className="ed-tab-x" aria-hidden="true" />}
          </button>
        ))}
      </div>
      <div className="ed-code app-scroll">
        {lines.map((segs, i) => (
          <div key={i} className="ed-line">
            <span className="ed-num">{i + 1}</span>
            <span className="ed-text">
              {segs.map(([c, t], j) => (
                <span key={j} className={c ? `tok-${c}` : undefined}>
                  {t}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="ed-status">
        <span>{files[tab].name.endsWith(".json") ? "JSON" : "Markdown"}</span>
        <span>Ln {lines.length}, Col 1</span>
        <span>UTF-8</span>
      </div>
    </div>
  );
};

export default Editor;
