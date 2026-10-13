import React, { useState } from "react";
import { LuCopy, LuCheck, LuMail, LuMapPin } from "react-icons/lu";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../../data";
import "./contact.css";

const socials = [
  { label: "GitHub", href: profile.github, Icon: SiGithub },
  { label: "LinkedIn", href: profile.linkedin, Icon: FaLinkedinIn },
  { label: "X / Twitter", href: profile.twitter, Icon: SiX },
  { label: "Instagram", href: profile.instagram, Icon: SiInstagram },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head reveal">
          <h2>
            <span className="star">★</span> Contact <span className="star">★</span>
          </h2>
          <span className="kicker">SAY HELLO</span>
        </div>

        <article className="contact-card paper paper--lg reveal">
          <span className="tape tape--left" />
          <span className="tape tape--right" />
          <span className="contact-stamp pixel" aria-hidden="true">
            AIR
            <br />
            MAIL
          </span>

          <p className="contact-to pixel">TO: YOU</p>
          <h3 className="contact-title pixel">
            Got an idea, a role, <span className="accent">or a bug to squash?</span>
          </h3>
          <p className="contact-text">
            I'm always happy to talk backend architecture, payments, side projects or a good
            hackathon. Drop a line and I'll get back to you.
          </p>

          <div className="contact-email">
            <a className="btn btn--blue" href={`mailto:${profile.email}`}>
              <LuMail size={16} /> Email me
            </a>
            <button className="contact-copy" onClick={copy} aria-live="polite">
              <span>{profile.email}</span>
              {copied ? <LuCheck size={16} /> : <LuCopy size={16} />}
              <span className="sr-only">{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>

          <div className="contact-foot">
            <ul className="contact-socials">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                    <Icon size={20} />
                  </a>
                </li>
              ))}
            </ul>
            <span className="contact-loc">
              <LuMapPin size={15} /> {profile.location}, India
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
