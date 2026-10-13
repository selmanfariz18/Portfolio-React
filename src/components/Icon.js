import React from "react";
import {
  LuCreditCard,
  LuLayers,
  LuServer,
  LuRocket,
  LuCode,
  LuUsers,
} from "react-icons/lu";
import {
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiFlutter,
  SiDart,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaAws, FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const map = {
  card: LuCreditCard,
  layers: LuLayers,
  server: LuServer,
  rocket: LuRocket,
  code: LuCode,
  users: LuUsers,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  Express: SiExpress,
  Python: SiPython,
  Django: SiDjango,
  "REST APIs": TbApi,
  PostgreSQL: SiPostgresql,
  "PL/pgSQL": SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Oracle: FaDatabase,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "HTML / CSS": SiHtml5,
  Flutter: SiFlutter,
  Dart: SiDart,
  AWS: FaAws,
  Git: SiGit,
  Linux: SiLinux,
};

const Icon = ({ name, size = 18, ...rest }) => {
  const Cmp = map[name];
  return Cmp ? <Cmp size={size} aria-hidden="true" {...rest} /> : null;
};

export default Icon;
