import React, { useEffect, useRef, useState } from "react";
import { useOS } from "../OSContext";
import {
  about,
  experience,
  highlights,
  neofetch,
  profile,
  projects,
  skills,
  spotlightProjects,
  certificates,
} from "../../data";

const ART = [
  "  ███████╗███████╗",
  "  ██╔════╝██╔════╝",
  "  ███████╗█████╗  ",
  "  ╚════██║██╔══╝  ",
  "  ███████║██║     ",
  "  ╚══════╝╚═╝     ",
];

const Prompt = () => (
  <span className="t-prompt">
    <span className="t-user">selman@kerala</span>:<span className="t-path">~</span>$
  </span>
);

const Link = ({ href, children }) => (
  <a className="t-link" href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Neofetch = () => (
  <div className="t-neofetch">
    <pre className="t-art">{ART.join("\n")}</pre>
    <div>
      <p>
        <span className="t-user">selman</span>@<span className="t-user">kerala</span>
      </p>
      <p className="t-dim">-------------</p>
      {neofetch.map(([k, v]) => (
        <p key={k}>
          <span className="t-key">{k}</span>: {v}
        </p>
      ))}
      <p className="t-swatches" aria-hidden="true">
        {["#2e3436", "#cc0000", "#4e9a06", "#c4a000", "#3465a4", "#75507b", "#06989a", "#d3d7cf"].map((c) => (
          <i key={c} style={{ background: c }} />
        ))}
      </p>
    </div>
  </div>
);

const HELP = [
  ["neofetch", "system info (about me, but nerdier)"],
  ["about", "who I am"],
  ["work", "where I've worked"],
  ["projects", "things I've built"],
  ["skills", "my stack"],
  ["highlights", "awards & community stuff"],
  ["certs", "certificates"],
  ["contact", "how to reach me"],
  ["resume", "open my résumé (PDF)"],
  ["open <app>", "open a window: about, work, projects, highlights, certs, contact, files"],
  ["clear", "clear the screen"],
];

const appAliases = {
  about: "about",
  settings: "about",
  work: "work",
  editor: "work",
  experience: "work",
  projects: "projects",
  highlights: "highlights",
  trophies: "highlights",
  certs: "certs",
  certificates: "certs",
  contact: "contact",
  mail: "contact",
  files: "files",
  terminal: "terminal",
};

const Terminal = () => {
  const { openApp, closeApp, resume, isMobile } = useOS();
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const [typing, setTyping] = useState(true);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  const print = (cmd, out) => setLines((l) => [...l, { cmd, out, id: l.length + Math.random() }]);

  const run = (raw) => {
    const cmd = raw.trim();
    if (!cmd) {
      print("", null);
      return;
    }
    setHistory((h) => [cmd, ...h].slice(0, 50));
    setHIdx(-1);
    const [name, ...rest] = cmd.split(/\s+/);
    const arg = rest.join(" ").toLowerCase();
    const n = name.toLowerCase();

    if (n === "clear") {
      setLines([]);
      return;
    }
    if (n === "exit") {
      closeApp("terminal");
      return;
    }
    if (n === "sudo") {
      print(
        cmd,
        <>
          <p className="t-dim">[sudo] password for recruiter: ********</p>
          <p className="t-ok">Access granted. Opening a new message to Selman…</p>
        </>
      );
      setTimeout(() => openApp("contact"), 500);
      return;
    }

    let out;
    switch (n) {
      case "help":
        out = (
          <>
            <p>Available commands:</p>
            {HELP.map(([c, d]) => (
              <p key={c}>
                <span className="t-key t-pad">{c}</span>
                <span className="t-dim">{d}</span>
              </p>
            ))}
            <p className="t-dim">Tip: ↑/↓ for history, Tab to autocomplete.</p>
          </>
        );
        break;
      case "neofetch":
        out = <Neofetch />;
        break;
      case "whoami":
        out = <p>selman — {profile.role.toLowerCase()} developer · {profile.location}</p>;
        break;
      case "about":
        out = about.map((p) => <p key={p.slice(0, 12)} className="t-para">{p}</p>);
        break;
      case "work":
      case "experience":
        out = experience.map((x) => (
          <p key={x.company}>
            <span className="t-key">{x.period.padEnd(20, " ")}</span> {x.company} <span className="t-dim">— {x.role}</span>
          </p>
        ));
        break;
      case "projects":
      case "ls":
        if (n === "ls" && arg && !arg.includes("project")) {
          out = <p className="t-dim">ls: cannot access '{arg}': try `ls` or `ls projects`</p>;
          break;
        }
        if (n === "ls" && !arg) {
          out = (
            <p className="t-ls">
              <span className="t-dir">About/</span> <span className="t-dir">Work/</span>{" "}
              <span className="t-dir">Projects/</span> <span className="t-dir">Highlights/</span>{" "}
              <span className="t-dir">Certificates/</span> resume.pdf
            </p>
          );
          break;
        }
        out = [...spotlightProjects, ...projects].map((p) => (
          <p key={p.name}>
            <span className="t-dir">{p.name.toLowerCase().replace(/\s+/g, "-")}/</span>{" "}
            <span className="t-dim">{p.stack.join(", ")}</span> {p.live && <Link href={p.live}>live ↗</Link>}{" "}
            <Link href={p.code}>code ↗</Link>
          </p>
        ));
        break;
      case "skills":
      case "stack":
        out = skills.map((g) => (
          <p key={g.group}>
            <span className="t-key t-pad">{g.group}</span> {g.items.join(" · ")}
          </p>
        ));
        break;
      case "highlights":
        out = highlights.map((h) => (
          <p key={h.title}>
            <span className="t-ok">★</span> {h.title} <span className="t-dim">— {h.source}</span>
          </p>
        ));
        break;
      case "certs":
      case "certificates":
        out = certificates.map((c) => (
          <p key={c.title}>
            <span className="t-dim">[{c.date}]</span> {c.title} <span className="t-dim">· {c.issuer}</span>
          </p>
        ));
        break;
      case "contact":
        out = (
          <>
            <p>
              <span className="t-key t-pad">email</span>
              <a className="t-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p>
              <span className="t-key t-pad">github</span>
              <Link href={profile.github}>{profile.github.replace("https://", "")}</Link>
            </p>
            <p>
              <span className="t-key t-pad">linkedin</span>
              <Link href={profile.linkedin}>{profile.linkedin.replace("https://www.", "")}</Link>
            </p>
          </>
        );
        break;
      case "resume":
      case "cv":
        window.open(resume, "_blank", "noopener");
        out = <p className="t-ok">Opening resume.pdf…</p>;
        break;
      case "open":
      case "cd": {
        const id = appAliases[arg.replace(/\/$/, "")];
        if (id) {
          openApp(id);
          out = <p className="t-ok">Opening {arg}…</p>;
        } else {
          out = <p className="t-err">{n}: no such app or folder: {arg || "(empty)"}</p>;
        }
        break;
      }
      case "date":
        out = <p>{new Date().toString()}</p>;
        break;
      case "echo":
        out = <p>{rest.join(" ")}</p>;
        break;
      case "pwd":
        out = <p>/home/selman</p>;
        break;
      case "rm":
        out = <p className="t-err">Nice try. This portfolio is read-only. 🙂</p>;
        break;
      case "history":
        out = history.map((h, i) => (
          <p key={i}>
            <span className="t-dim">{String(history.length - i).padStart(3, " ")}</span> {h}
          </p>
        ));
        break;
      default:
        out = (
          <p className="t-err">
            {name}: command not found. Type <span className="t-key">help</span> to see what I can do.
          </p>
        );
    }
    print(cmd, out);
  };

  // auto-type `neofetch` on first open
  useEffect(() => {
    const word = "neofetch";
    let i = 0;
    let timer;
    const step = () => {
      i += 1;
      setInput(word.slice(0, i));
      if (i < word.length) timer = setTimeout(step, 90);
      else
        timer = setTimeout(() => {
          setInput("");
          setTyping(false);
          setLines([{ cmd: "neofetch", out: <Neofetch />, id: 0 }]);
          setLines((l) => [
            ...l,
            {
              cmd: null,
              id: 1,
              out: (
                <p className="t-dim">
                  Type <span className="t-key">help</span> to explore, or try <span className="t-key">sudo hire selman</span>.
                </p>
              ),
            },
          ]);
        }, 350);
    };
    timer = setTimeout(step, 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const b = bodyRef.current;
    if (b && !isMobile) b.scrollTop = b.scrollHeight;
  }, [lines, isMobile]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(history.length - 1, hIdx + 1);
      if (history[i] !== undefined) {
        setHIdx(i);
        setInput(history[i]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = hIdx - 1;
      setHIdx(Math.max(-1, i));
      setInput(i >= 0 ? history[i] : "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const all = ["help", "neofetch", "about", "work", "projects", "skills", "highlights", "certs", "contact", "resume", "open", "clear", "whoami", "ls", "history"];
      const hit = all.find((c) => c.startsWith(input.toLowerCase()));
      if (hit && input) setInput(hit + (hit === "open" ? " " : ""));
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      className="term app-scroll"
      ref={bodyRef}
      onClick={() => {
        if (!window.getSelection()?.toString()) inputRef.current?.focus({ preventScroll: true });
      }}
    >
      {lines.map((l) => (
        <div key={l.id} className="t-block">
          {l.cmd !== null && (
            <p>
              <Prompt /> {l.cmd}
            </p>
          )}
          {l.out}
        </div>
      ))}
      <label className="t-input-row">
        <Prompt />
        <input
          ref={inputRef}
          className="t-input"
          value={input}
          onChange={(e) => {
            setTyping(false);
            setInput(e.target.value);
          }}
          onKeyDown={onKeyDown}
          readOnly={typing}
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Terminal input"
        />
      </label>
    </div>
  );
};

export default Terminal;
