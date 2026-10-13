import React, { useEffect, useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuExternalLink, LuShieldCheck, LuSparkles, LuFolderOpen } from "react-icons/lu";
import { certificates, certificatesFolder } from "../../data";

const Badge = ({ c, i, big }) => (
  <span className={`gal-badge ${i % 2 ? "is-alt" : ""} ${big ? "is-big" : ""}`}>
    {i % 2 ? <LuSparkles size={big ? 56 : 22} /> : <LuShieldCheck size={big ? 56 : 22} />}
    {big && <strong>{c.title}</strong>}
  </span>
);

const Gallery = () => {
  const [i, setI] = useState(0);
  const c = certificates[i];
  const n = certificates.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  const strip = useRef(null);
  useEffect(() => {
    // keep the active thumbnail visible without scrolling the page
    const box = strip.current;
    const el = box?.querySelector(`[data-i="${i}"]`);
    if (!box || !el) return;
    const left = el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2;
    box.scrollTo({ left, behavior: "smooth" });
  }, [i]);

  return (
    <div
      className="gallery"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="gal-stage">
        <button className="gal-nav gal-nav--l" onClick={() => go(-1)} aria-label="Previous">
          <LuChevronLeft size={20} />
        </button>
        {c.image ? (
          <img key={c.title} src={c.image} alt={c.title} className="gal-img" />
        ) : (
          <Badge c={c} i={i} big />
        )}
        <button className="gal-nav gal-nav--r" onClick={() => go(1)} aria-label="Next">
          <LuChevronRight size={20} />
        </button>
      </div>

      <div className="gal-caption">
        <div>
          <strong>{c.title}</strong>
          <span>
            {c.issuer} · {c.date}
            {c.isNew && <em className="chip-accent">New</em>}
          </span>
        </div>
        <span className="gal-count">
          {i + 1} / {n}
        </span>
        {c.link ? (
          <a className="pill" href={c.link} target="_blank" rel="noopener noreferrer">
            <LuExternalLink size={14} /> Original
          </a>
        ) : (
          <a className="pill" href={certificatesFolder} target="_blank" rel="noopener noreferrer">
            <LuFolderOpen size={14} /> All certs
          </a>
        )}
      </div>

      <div className="gal-thumbs" role="tablist" ref={strip}>
        {certificates.map((t, k) => (
          <button
            key={t.title}
            data-i={k}
            role="tab"
            aria-selected={k === i}
            aria-label={t.title}
            className={k === i ? "is-active" : ""}
            onClick={() => setI(k)}
          >
            {t.image ? <img src={t.image} alt="" loading="lazy" /> : <Badge c={t} i={k} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
