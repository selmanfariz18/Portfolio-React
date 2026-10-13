import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { apps, appById, mobileOrder } from "./apps";
import { OSContext } from "./OSContext";
import TopBar from "./TopBar";
import Dock from "./Dock";
import Window from "./Window";
import Overview from "./Overview";
import Boot from "./Boot";
import { FolderIcon, DocIcon } from "./icons";
import resume from "../assets/Resume_Selman.pdf";
import { profile } from "../data";
import "./os.css";
import "./apps/apps.css";

const TOP = 32;
const DOCK = 0; // dock sits at the bottom now, nothing reserved on the left
const DOCK_H = 84; // space kept free at the bottom for the dock

const useIsMobile = () => {
  const q = "(max-width: 860px)";
  const [m, setM] = useState(() => window.matchMedia(q).matches);
  useEffect(() => {
    const mq = window.matchMedia(q);
    const on = () => setM(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", on) : mq.addListener(on);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", on) : mq.removeListener(on));
  }, []);
  return m;
};

const geomFor = (id, offset = 0) => {
  const { w, h, fx, fy } = appById[id].geom;
  const aw = window.innerWidth - DOCK;
  const ah = window.innerHeight - TOP - DOCK_H;
  const W = Math.min(w, aw - 32);
  const H = Math.min(h, ah - 32);
  return {
    x: Math.round(DOCK + 16 + fx * Math.max(0, aw - W - 32) + offset),
    y: Math.round(TOP + 12 + fy * Math.max(0, ah - H - 24) + offset),
    w: W,
    h: H,
  };
};

// old routes like /projects open that window on load
const routeApp = {
  "/projects": "projects",
  "/certificates": "certs",
  "/achievements": "highlights",
  "/contact": "contact",
  "/about": "about",
};

const storage = {
  get(k) {
    try {
      return window.sessionStorage.getItem(k);
    } catch (e) {
      return null;
    }
  },
  set(k, v) {
    try {
      window.sessionStorage.setItem(k, v);
    } catch (e) {
      /* ignore */
    }
  },
};

const Desktop = () => {
  const isMobile = useIsMobile();
  const zTop = useRef(10);
  const [theme, setTheme] = useState("dark");
  const [booting, setBooting] = useState(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !reduce && !storage.get("selmanos-booted");
  });
  const [overview, setOverview] = useState(false);
  const [toast, setToast] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const [wins, setWins] = useState(() => {
    const vw = window.innerWidth;
    const ah = window.innerHeight - TOP - DOCK_H;
    const start = {};
    const put = (id, z, g) => {
      start[id] = { open: true, min: false, max: false, z, args: null, ...g };
    };

    // background windows: all open, stacked toward the top-right, under the main two
    const background = ["contact", "certs", "highlights", "projects", "terminal"];
    background.forEach((id, i) => {
      const { w, h } = appById[id].geom;
      const W = Math.min(w, vw - 48);
      const step = background.length - 1 - i;
      const H = Math.min(h, ah - 24 - step * 30); // keep clear of the dock
      put(id, 10 + i, {
        w: W,
        h: H,
        x: Math.max(16, vw - W - 24 - step * 40),
        y: TOP + 12 + step * 30,
      });
    });

    // main windows on top: About (left) + experience.md (right)
    const aboutW = Math.min(520, Math.round(vw * 0.38));
    const mainH = Math.max(320, ah - 24);
    const workX = 24 + aboutW + 16;
    const workW = Math.min(800, vw - workX - 24);
    put("work", 20, {
      x: workW >= 460 ? workX : Math.round(vw * 0.3),
      y: TOP + 12,
      w: workW >= 460 ? workW : Math.min(760, vw - Math.round(vw * 0.3) - 16),
      h: Math.min(mainH, 640),
    });
    put("about", 21, { x: 24, y: TOP + 12, w: aboutW, h: mainH });
    zTop.current = 21;

    // old routes like /projects bring that window to the front
    const routed = routeApp[window.location.pathname];
    if (routed && start[routed]) {
      zTop.current += 1;
      start[routed].z = zTop.current;
    }
    return start;
  });

  const focused = useMemo(() => {
    let best = null;
    Object.entries(wins).forEach(([id, w]) => {
      if (w.open && !w.min && (!best || w.z > wins[best].z)) best = id;
    });
    return best;
  }, [wins]);

  const openApp = useCallback((id, args = null) => {
    if (!appById[id]) return;
    setOverview(false);
    setWins((prev) => {
      const cur = prev[id];
      zTop.current += 1;
      if (cur && cur.open) {
        return { ...prev, [id]: { ...cur, min: false, z: zTop.current, args: args ?? cur.args } };
      }
      const openCount = Object.values(prev).filter((w) => w.open).length;
      return {
        ...prev,
        [id]: { open: true, min: false, max: false, z: zTop.current, args, ...geomFor(id, (openCount % 4) * 18) },
      };
    });
    if (window.matchMedia("(max-width: 860px)").matches) {
      setTimeout(() => document.getElementById(`win-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
    }
  }, []);

  const closeApp = useCallback((id) => {
    setWins((prev) => (prev[id] ? { ...prev, [id]: { ...prev[id], open: false, max: false } } : prev));
  }, []);

  const focusApp = useCallback((id) => {
    setWins((prev) => {
      if (!prev[id] || prev[id].z === zTop.current) return prev;
      zTop.current += 1;
      return { ...prev, [id]: { ...prev[id], z: zTop.current } };
    });
  }, []);

  const minimizeApp = useCallback((id) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], min: true } }));
  }, []);

  const toggleMax = useCallback((id) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], max: !prev[id].max } }));
  }, []);

  const moveApp = useCallback((id, patch) => {
    setWins((prev) => ({ ...prev, [id]: { ...prev[id], ...patch } }));
  }, []);

  const dockClick = useCallback(
    (id) => {
      const w = wins[id];
      if (w && w.open && !w.min && focused === id) minimizeApp(id);
      else openApp(id);
    },
    [wins, focused, minimizeApp, openApp]
  );

  const finishBoot = useCallback(() => {
    storage.set("selmanos-booted", "1");
    setBooting(false);
  }, []);

  useEffect(() => {
    if (booting) return undefined;
    const t1 = setTimeout(() => setToast(true), 600);
    const t2 = setTimeout(() => setToast(false), 9000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [booting]);

  // Super key toggles the overview, Esc closes it
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOverview(false);
      if (e.key === "Meta" && !e.repeat && !isMobile) setOverview((v) => !v);
    };
    window.addEventListener("keyup", onKey);
    return () => window.removeEventListener("keyup", onKey);
  }, [isMobile]);

  const ctx = useMemo(
    () => ({ openApp, closeApp, isMobile, theme, setTheme, resume, restart: () => setBooting(true) }),
    [openApp, closeApp, isMobile, theme]
  );

  const desktopIcons = [
    { id: "home", label: "Home", icon: <FolderIcon size={54} />, run: () => openApp("files", { loc: "home" }) },
    { id: "proj", label: "Projects", icon: <FolderIcon size={54} />, run: () => openApp("projects") },
    {
      id: "cv",
      label: "resume.pdf",
      icon: <DocIcon size={54} />,
      run: () => window.open(resume, "_blank", "noopener"),
    },
    { id: "gh", label: "GitHub", icon: <span className="desk-link"><LuGithub size={28} /></span>, run: () => window.open(profile.github, "_blank", "noopener") },
    { id: "li", label: "LinkedIn", icon: <span className="desk-link desk-link--blue"><LuLinkedin size={28} /></span>, run: () => window.open(profile.linkedin, "_blank", "noopener") },
  ];

  const windowsToRender = isMobile
    ? mobileOrder.map((id) => [id, { open: true, min: false, max: false, z: 1, args: wins[id]?.args }])
    : Object.entries(wins).filter(([, w]) => w.open);

  return (
    <OSContext.Provider value={ctx}>
      <div className={`os ${isMobile ? "os--mobile" : ""}`} data-theme={theme}>
        <div className="wallpaper" aria-hidden="true">
          <span className="wall-blob wall-blob--a" />
          <span className="wall-blob wall-blob--b" />
          <span className="wall-blob wall-blob--c" />
          <span className="wall-mark">selman</span>
        </div>

        <TopBar onActivities={() => setOverview((v) => !v)} overview={overview} />

        {!isMobile && (
          <ul className="desk-icons" onClick={(e) => e.target === e.currentTarget && setSelectedIcon(null)}>
            {desktopIcons.map((d) => (
              <li key={d.id}>
                <button
                  className={`desk-icon ${selectedIcon === d.id ? "is-selected" : ""}`}
                  onClick={() => setSelectedIcon(d.id)}
                  onDoubleClick={d.run}
                  onKeyDown={(e) => e.key === "Enter" && d.run()}
                >
                  {d.icon}
                  <span>{d.label}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        <main className="win-layer" aria-label="Desktop">
          {isMobile && (
            <header className="m-hero">
              <p className="m-hero-hi">Hi, I'm</p>
              <h1>Selmanul Farizy</h1>
              <p>Backend · Full Stack Developer</p>
              <p className="m-hero-hint">Tap the dock below to jump around ↓</p>
            </header>
          )}
          {windowsToRender.map(([id, w]) => (
            <Window
              key={id}
              app={appById[id]}
              state={w}
              focused={!isMobile && focused === id}
              onFocus={() => focusApp(id)}
              onClose={() => closeApp(id)}
              onMinimize={() => minimizeApp(id)}
              onToggleMax={() => toggleMax(id)}
              onMove={(patch) => moveApp(id, patch)}
              bounds={{ top: TOP, left: DOCK }}
            />
          ))}
          {isMobile && (
            <footer className="m-foot">
              © {new Date().getFullYear()} {profile.fullName} · SelmanOS is a React tribute to GNOME
            </footer>
          )}
        </main>

        <Dock
          wins={wins}
          focused={focused}
          onClick={dockClick}
          onShowApps={() => setOverview((v) => !v)}
          isMobile={isMobile}
        />

        {overview && !isMobile && <Overview apps={apps} onClose={() => setOverview(false)} />}

        {toast && !isMobile && (
          <div className="toast" role="status">
            <span className="toast-icon">👋</span>
            <div>
              <strong>Welcome to SelmanOS</strong>
              <p>Double-click the desktop icons, use the dock, or type <code>help</code> in the terminal.</p>
            </div>
            <button aria-label="Dismiss" onClick={() => setToast(false)}>
              ✕
            </button>
          </div>
        )}

        {booting && <Boot onDone={finishBoot} />}
      </div>
    </OSContext.Provider>
  );
};

export default Desktop;
