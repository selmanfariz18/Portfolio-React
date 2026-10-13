import React, { useState } from "react";
import { LuSend, LuCopy, LuCheck, LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import { SiX } from "react-icons/si";
import { profile } from "../../data";

const Mail = () => {
  const [subject, setSubject] = useState("Hello Selman 👋");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      /* clipboard not available */
    }
  };

  return (
    <form
      className="mail app-scroll"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <div className="mail-row">
        <span>To</span>
        <span className="mail-to">
          <span className="mail-chip">Selmanul Farizy &lt;{profile.email}&gt;</span>
          <button type="button" className="mail-copy" onClick={copy} aria-label="Copy email address">
            {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
          </button>
        </span>
      </div>
      <label className="mail-row">
        <span>Subject</span>
        <input value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <textarea
        className="mail-body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={"Hi Selman,\n\nI saw your portfolio and wanted to talk about…"}
        aria-label="Message"
      />
      <div className="mail-foot">
        <div className="mail-socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <LuGithub size={17} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LuLinkedin size={17} />
          </a>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
            <SiX size={15} />
          </a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <LuInstagram size={17} />
          </a>
        </div>
        <button className="pill pill--accent" type="submit">
          <LuSend size={14} /> Send
        </button>
      </div>
      <p className="mail-note">“Send” opens your mail app with this message filled in.</p>
    </form>
  );
};

export default Mail;
