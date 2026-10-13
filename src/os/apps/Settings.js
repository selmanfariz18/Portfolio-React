import React from "react";
import { LuDownload, LuMail, LuGithub, LuLinkedin, LuInstagram, LuShieldCheck } from "react-icons/lu";
import { SiX } from "react-icons/si";
import { useOS } from "../OSContext";
import photo from "../../assets/image.png";
import { profile, specs, stats } from "../../data";

const Settings = () => {
  const { openApp, resume } = useOS();
  return (
    <div className="settings app-scroll">
      <div className="set-hero">
        <div className="set-avatar">
          <img src={photo} alt="Selmanul Farizy" />
        </div>
        <h2>
          Hi, I'm <span>Selman</span>
        </h2>
        <p>Backend · Full Stack Developer — I build the payments, orders and APIs behind e-commerce.</p>
        <div className="set-actions">
          <a className="pill pill--accent" href={resume} target="_blank" rel="noopener noreferrer">
            <LuDownload size={15} /> Résumé
          </a>
          <button className="pill" onClick={() => openApp("contact")}>
            <LuMail size={15} /> Contact
          </button>
        </div>
      </div>

      <div className="set-group">
        {specs.map(([k, v]) => (
          <div key={k} className="set-row">
            <span>{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
        <div className="set-row">
          <span>Certifications</span>
          <strong className="set-badge">
            <LuShieldCheck size={14} /> OCSA · Prompt Engineering
          </strong>
        </div>
      </div>

      <div className="set-stats">
        {stats.map((s) => (
          <div key={s.label} className="set-stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="set-group">
        <a className="set-row set-row--link" href={profile.github} target="_blank" rel="noopener noreferrer">
          <span>
            <LuGithub size={16} /> GitHub
          </span>
          <strong>{profile.githubHandle} ↗</strong>
        </a>
        <a className="set-row set-row--link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <span>
            <LuLinkedin size={16} /> LinkedIn
          </span>
          <strong>in/selmanfariz ↗</strong>
        </a>
        <a className="set-row set-row--link" href={profile.twitter} target="_blank" rel="noopener noreferrer">
          <span>
            <SiX size={14} /> X / Twitter
          </span>
          <strong>@Selmanulfarizy ↗</strong>
        </a>
        <a className="set-row set-row--link" href={profile.instagram} target="_blank" rel="noopener noreferrer">
          <span>
            <LuInstagram size={16} /> Instagram
          </span>
          <strong>@fariz.deb ↗</strong>
        </a>
      </div>
    </div>
  );
};

export default Settings;
