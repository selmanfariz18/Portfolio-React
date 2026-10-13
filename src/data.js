// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  text, links, projects, highlights and certificates.
// ─────────────────────────────────────────────────────────────

import dot_connect from "./assets/projects/dot_connect.png";
import ictacme from "./assets/projects/ICTACME.png";
import hack3_0 from "./assets/projects/Hack_3.0.png";
import fluid_simulator from "./assets/projects/fluid_simulator.png";
import mp3_player from "./assets/projects/mp3_player.png";
import weather_web from "./assets/projects/weather_web.png";
import qr_code_generator from "./assets/projects/qr_code_generator.png";

import foss3_0 from "./assets/certificates/Foss3_0.png";
import joy_of_programming from "./assets/certificates/joy_of_programming.png";
import iedc_summit from "./assets/certificates/IEDC_summit_2022.png";
import talk_session from "./assets/certificates/talk_session.png";
import backend_api from "./assets/certificates/backend_api_udemy_certificate.png";
import codestorm from "./assets/certificates/codestorm.png";
import tinkerhack from "./assets/certificates/Selmanul_Farizy_K_A_Tinkerhack.jpg";
import ai_workshop from "./assets/certificates/Ai workshop certificate Tinkerhub collab-1.png";
import python_workshop from "./assets/certificates/python_workshop-1.png";
import coders from "./assets/certificates/100coders certificate .jpg";

export const profile = {
  handle: "FARIZ.DEB",
  firstName: "SELMAN",
  fullName: "Selmanul Farizy",
  role: "Backend · Full Stack",
  location: "Ernakulam, Kerala",
  email: "salmanulfarizyka@gmail.com",
  github: "https://github.com/selmanfariz18",
  githubHandle: "@selmanfariz18",
  linkedin: "https://www.linkedin.com/in/selmanfariz/",
  twitter: "https://twitter.com/Selmanulfarizy",
  instagram: "https://www.instagram.com/fariz.deb/",
};

export const navLinks = {
  left: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
  ],
  right: [
    { id: "highlights", label: "Highlights" },
    { id: "certificates", label: "Certs" },
    { id: "contact", label: "Contact" },
  ],
};

export const stats = [
  { value: "2+", label: "Years shipping production code" },
  { value: "1", label: "Startup co-founded" },
  { value: "25+", label: "Milestones on the log" },
  { value: "#2", label: "Top 100 Coders shortlist" },
];

export const experience = [
  {
    company: "Systalent Software",
    role: "Programmer Analyst · Full Stack",
    period: "Apr 2025 — Present",
    tag: "CURRENT",
    tagColor: "blue",
    headline: ["Shipping payments & commerce", "for a Qatar e-commerce platform"],
    summary:
      "Building backend services and integrations for a large e-commerce platform in Qatar — mostly TypeScript, Node.js and PostgreSQL, with plenty of PL/pgSQL and REST APIs in between.",
    features: [
      { icon: "card", title: "Payments", text: "Card, BNPL and cash-on-delivery flows, webhooks and redirects." },
      { icon: "layers", title: "Order Lifecycle", text: "Order status engine and the APIs that drive it." },
      { icon: "server", title: "Shopping Features", text: "Smart shopping-list templates — DB to microservice to API." },
    ],
  },
  {
    company: "TZET IT Solutions",
    role: "Co-founder · Django Developer",
    period: "Jun 2023 — Feb 2024",
    tag: "STARTUP",
    tagColor: "olive",
    headline: ["Co-founded a 9-person startup", "while still in college"],
    summary:
      "Started a service-based software company incubated at KMEA Engineering College, then worked on it as a Django developer — client websites, REST APIs and everything in between.",
    features: [
      { icon: "rocket", title: "Founder", text: "Built the team and the first client pipeline." },
      { icon: "code", title: "Django + DRF", text: "Backends and REST APIs for client projects." },
      { icon: "users", title: "Team of 9", text: "Incubated at KMEA Engineering College." },
    ],
  },
  {
    company: "KMEA Engineering College",
    role: "B.Tech · Computer Science & Engineering",
    period: "2021 — 2025",
    tag: "EDUCATION",
    tagColor: "red",
    headline: ["CS degree, plus a lot of", "community work on the side"],
    summary:
      "Tech Lead at TinkerHub KMEA, mentor for the Joy of Programming course, hackathon organiser and the person who built the websites for college events.",
  },
];

export const skills = [
  {
    group: "Backend",
    items: ["Node.js", "TypeScript", "Express", "Python", "Django", "REST APIs"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "PL/pgSQL", "MySQL", "MongoDB", "Oracle"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vue.js", "JavaScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    group: "Mobile & Cloud",
    items: ["Flutter", "Dart", "AWS", "Git", "Linux"],
  },
];

export const spotlightProjects = [
  {
    name: "Fluid Simulator",
    domain: "github.io/Fluid-simulator",
    image: fluid_simulator,
    headline: ["Real-time fluid physics,", "right in your browser"],
    accent: "right in your browser",
    description:
      "An interactive fluid simulation rendered with WebGL. Drag across the canvas and watch colour and velocity swirl in real time — all running on the GPU, no installs.",
    stack: ["WebGL", "JavaScript", "HTML", "CSS"],
    code: "https://github.com/selmanfariz18/Fluid-simulator.git",
    live: "https://selmanfariz18.github.io/Fluid-simulator/",
    cta: "Play with it",
  },
  {
    name: "Dot Connect",
    domain: "dot-connect.vercel.app",
    image: dot_connect,
    headline: ["The pen-and-paper classic,", "rebuilt in React"],
    accent: "rebuilt in React",
    description:
      "The dots-and-boxes game you played on the back of a notebook — now in the browser. Take turns drawing lines and close boxes to score.",
    stack: ["React", "JavaScript", "CSS"],
    code: "https://github.com/selmanfariz18/Dot_connect.git",
    live: "https://dot-connect-omega.vercel.app/",
    cta: "Play a round",
  },
];

export const projects = [
  {
    name: "ICTACME",
    blurb: "Website for an international conference on civil & mechanical engineering.",
    image: ictacme,
    stack: ["HTML", "Tailwind"],
    code: "https://github.com/selmanfariz18/ICTACME.git",
    live: "https://ictacme.vercel.app/",
  },
  {
    name: "Hack 3.0",
    blurb: "Event site for a 24-hour hackathon run by the CS department.",
    image: hack3_0,
    stack: ["HTML", "CSS", "JS"],
    code: "https://github.com/selmanfariz18/hack3.0.git",
    live: "https://selmanfariz18.github.io/hack3.0/",
  },
  {
    name: "QR Generator",
    blurb: "Turn any text or link into a QR code in one click.",
    image: qr_code_generator,
    stack: ["HTML", "CSS"],
    code: "https://github.com/selmanfariz18/Qr-generator-HTML-",
    live: "https://selmanfariz18.github.io/Qr-generator-HTML-/",
  },
  {
    name: "Weather App",
    blurb: "Search a city, get the current weather.",
    image: weather_web,
    stack: ["HTML", "CSS", "JS"],
    code: "https://github.com/selmanfariz18/weather_app_web.git",
    live: "https://selmanfariz18.github.io/weather_app_web/",
  },
  {
    name: "MP3 Player",
    blurb: "A desktop music player written in Python.",
    image: mp3_player,
    stack: ["Python"],
    code: "https://github.com/selmanfariz18/MP3-player.git",
  },
];

export const highlights = [
  {
    tag: "AWARD",
    tagColor: "red",
    source: "Gtech MuLearn",
    title: "Top 100 Coders — Shortlisted #2",
    text: "Selected for Top100Coders, showcased at Huddle Global 2023.",
  },
  {
    tag: "SELECTED",
    tagColor: "blue",
    source: "TinkerHub",
    title: "FOSS FORCE @ India FOSS 3.0",
    text: "Shortlisted for the FOSS FORCE program and attended India FOSS 3.0 in Bengaluru.",
  },
  {
    tag: "LEAD",
    tagColor: "olive",
    source: "TinkerHub KMEA",
    title: "Tech Lead, 2023 — 24",
    text: "Led the campus tech community; represented KMEA at the TinkerHub Campus Summit.",
  },
  {
    tag: "ORGANIZER",
    tagColor: "olive",
    source: "TinkerHub",
    title: "Tink-Her-Hack 2.0",
    text: "Venue organiser for the hackathon hosted at KMEA Engineering College.",
  },
  {
    tag: "HACKATHON",
    tagColor: "blue",
    source: "Gtech MuLearn",
    title: "CodeStorm — GTA",
    text: "Competed in the offline hackathon conducted by Gtech MuLearn.",
  },
  {
    tag: "MENTOR",
    tagColor: "red",
    source: "IEDC Summit 2022",
    title: "Python Mentor",
    text: "Ran the Python learning station for TinkerHub at the IEDC Summit, Palai.",
  },
];

export const timeline = [
  ["Jun 2025", "Graduated — B.Tech Computer Science & Engineering, KMEA"],
  ["Apr 2025", "Joined Systalent as a Programmer Analyst"],
  ["Feb 2025", "Organised the Worst Code challenge at Kapricious25"],
  ["Jan 2025", "Technical support for the FDP on IT Workshop"],
  ["Mar 2024", "Venue organiser — Tink-Her-Hack 2.0"],
  ["Feb 2024", "Built the ICTACME conference website"],
  ["2023 — 24", "Tech Lead, TinkerHub KMEA"],
  ["Nov 2023", "Shortlisted #2 for Top100Coders, Huddle Global 2023"],
  ["Oct 2023", "India FOSS 3.0 — FOSS FORCE program, Bengaluru"],
  ["Oct 2023", "Completed 'Backend REST API with Python & Django — Advanced'"],
  ["Sep 2023", "Tech Lead rep at TinkerHub Campus Summit, Idukki"],
  ["Aug 2023", "GTA | CodeStorm offline hackathon"],
  ["Jun 2023", "Django Developer at TZET IT Solutions (till Feb 2024)"],
  ["May 2023", "Mentor — Joy of Programming (2nd batch)"],
  ["Apr 2023", "Built the Hack23 website + volunteered at Kapricious23"],
  ["2022 — 23", "Co-founded TZET IT Solutions (team of 9)"],
  ["Nov 2022", "Git / GitHub session at TinkerHub KMEA"],
  ["Nov 2022", "Volunteer — Digital Skills Project, CITIC CUSAT"],
  ["Oct 2022", "Computer Hardware & Networking internship (50 hrs)"],
  ["Sep 2022", "Python + Django internship (30 hrs)"],
  ["Jul 2022", "2-day Python workshop, TinkerHub KMEA"],
  ["Mar 2022", "Python Mentor, IEDC Summit 2022"],
  ["Jan 2022", "Mentor — Joy of Programming"],
  ["2021 — 23", "Execom member, Tech Team TinkerHub KMEA"],
  ["Dec 2021", "Completed Joy of Programming (Monschool)"],
];

export const certificates = [
  { title: "Offenso Certified Security Analyst", issuer: "Offenso Hackers Academy", date: "Jul 2025", isNew: true },
  { title: "Prompt Engineering for ChatGPT", issuer: "Great Learning", date: "Nov 2025", isNew: true },
  { title: "Organizer · Tink-Her-Hack 2.0", issuer: "TinkerHub", date: "Mar 2024", image: tinkerhack, link: "https://drive.google.com/uc?id=1PRQeuMVchNiaHWWhrbozfwzn_rxTRZEP" },
  { title: "Finalist · 100 Coders 2023", issuer: "Gtech MuLearn", date: "Nov 2023", image: coders, link: "https://drive.google.com/uc?id=1dxgwAvxvch5zkRHzf48BLXNtaQW9TIH2" },
  { title: "India FOSS 3.0", issuer: "TinkerHub", date: "Oct 2023", image: foss3_0, link: "https://drive.google.com/uc?id=1CDdYNNFJ0hu753g3MrFwfP-k8X4k2Z-A" },
  { title: "REST API with Python & Django", issuer: "Udemy", date: "Oct 2023", image: backend_api, link: "https://drive.google.com/uc?id=1b-5NHIucyK2guOh9dBWuRjifnJgbs0za" },
  { title: "Talk Session", issuer: "IEDC", date: "Oct 2023", image: talk_session, link: "https://drive.google.com/uc?id=1NqNT9_H6IpxWgxQo0D9gmGvpRsfvn9JD" },
  { title: "CodeStorm Hackathon", issuer: "Gtech MuLearn", date: "Aug 2023", image: codestorm, link: "https://drive.google.com/uc?id=1BY3Ow06gSyfTfX8AZTut12KtFRFn3SCx" },
  { title: "AI Workshop", issuer: "TinkerHub", date: "Jan 2023", image: ai_workshop, link: "https://drive.google.com/uc?id=1YvOuJ9sxyFX9hcjYQpgYQX_VP_bhrPXq" },
  { title: "Python Workshop", issuer: "TinkerHub KMEA", date: "Jul 2022", image: python_workshop, link: "https://drive.google.com/uc?id=1MDw-gtVrJEuryJpbvyJ9yHHQDJPM5ZiA" },
  { title: "Mentor · IEDC Summit", issuer: "IEDC", date: "2022", image: iedc_summit, link: "https://drive.google.com/uc?id=1oXnw9YmtbD-wHOokS6_31IFZH65eCSuf" },
  { title: "Joy of Programming", issuer: "Monschool", date: "Jan 2022", image: joy_of_programming, link: "https://drive.google.com/uc?id=1RqnPaPeUN3zMWwOJ2BaqVLEzpNmNF96j" },
];

export const certificatesFolder =
  "https://drive.google.com/drive/folders/1YSns-EeDuRiK4zzWZ-YSeke_adgq5ISD?usp=sharing";

// ───────────── Used by the desktop (Ubuntu-style) UI ─────────────
export const about = [
  "I'm a backend-leaning full-stack developer from Kerala. My day job is the part of e-commerce nobody sees but everybody feels — payments, orders and the APIs that hold them together.",
  "Before that I co-founded a small software startup in college, led the TinkerHub tech community on campus, and built websites for whatever event needed one that week.",
  "These days I'm into clean database design, reliable integrations, and poking at things from a security angle.",
];

export const specs = [
  ["Device Name", "Selmanul Farizy"],
  ["Role", "Programmer Analyst · Systalent"],
  ["Focus", "Backend · Full Stack"],
  ["Primary Stack", "TypeScript · Node.js · PostgreSQL"],
  ["Also Runs", "Python · Django · React · Flutter"],
  ["Education", "B.Tech CSE · KMEA (2025)"],
  ["Location", "Ernakulam, Kerala, India"],
];

export const neofetch = [
  ["OS", "SelmanOS 25.04 LTS (Kerala)"],
  ["Host", "Systalent Software"],
  ["Kernel", "Programmer Analyst"],
  ["Uptime", "2+ years in production"],
  ["Packages", "node, typescript, postgres, django"],
  ["Shell", "zsh"],
  ["DE", "GNOME (well, a React tribute)"],
  ["Focus", "payments · orders · APIs"],
  ["Memory", "25+ milestones logged"],
];
