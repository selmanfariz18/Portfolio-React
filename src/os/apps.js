import Terminal from "./apps/Terminal";
import Files from "./apps/Files";
import Settings from "./apps/Settings";
import Editor from "./apps/Editor";
import Projects from "./apps/Projects";
import Trophies from "./apps/Trophies";
import Gallery from "./apps/Gallery";
import Mail from "./apps/Mail";

// Every window the desktop can open.
// geom: preferred size + position as fractions of the free desktop area.
export const apps = [
  {
    id: "about",
    name: "About Me",
    title: "Settings — About",
    icon: "settings",
    Component: Settings,
    geom: { w: 540, h: 620, fx: 0.02, fy: 0.03 },
  },
  {
    id: "terminal",
    name: "Terminal",
    title: "selman@kerala: ~",
    icon: "terminal",
    Component: Terminal,
    geom: { w: 660, h: 450, fx: 0.8, fy: 0.12 },
  },
  {
    id: "files",
    name: "Files",
    title: "Home",
    icon: "files",
    Component: Files,
    geom: { w: 700, h: 470, fx: 0.62, fy: 0.42 },
    desktopOnly: true,
  },
  {
    id: "work",
    name: "Text Editor",
    title: "experience.md — Text Editor",
    icon: "editor",
    Component: Editor,
    geom: { w: 760, h: 600, fx: 0.4, fy: 0.12 },
  },
  {
    id: "projects",
    name: "Projects",
    title: "Projects",
    icon: "projects",
    Component: Projects,
    geom: { w: 900, h: 600, fx: 0.5, fy: 0.2 },
  },
  {
    id: "highlights",
    name: "Trophies",
    title: "Trophies",
    icon: "trophies",
    Component: Trophies,
    geom: { w: 820, h: 600, fx: 0.45, fy: 0.25 },
  },
  {
    id: "certs",
    name: "Image Viewer",
    title: "Certificates — Image Viewer",
    icon: "gallery",
    Component: Gallery,
    geom: { w: 860, h: 600, fx: 0.55, fy: 0.3 },
  },
  {
    id: "contact",
    name: "Mail",
    title: "New Message",
    icon: "mail",
    Component: Mail,
    geom: { w: 620, h: 560, fx: 0.6, fy: 0.35 },
  },
];

export const appById = Object.fromEntries(apps.map((a) => [a.id, a]));

// dock order
export const dockApps = ["files", "terminal", "about", "work", "projects", "highlights", "certs", "contact"];

// order windows appear in when stacked on phones
export const mobileOrder = ["about", "terminal", "work", "projects", "highlights", "certs", "contact"];
