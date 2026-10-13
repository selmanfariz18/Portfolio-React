import React from "react";
import { LuArrowUpRight, LuShieldCheck, LuSparkles } from "react-icons/lu";
import { certificates, certificatesFolder } from "../../data";
import "./certificates.css";

const Certificates = () => (
  <section id="certificates" className="section">
    <div className="container">
      <div className="section-head reveal">
        <h2>
          <span className="star">★</span> Certificates <span className="star">★</span>
        </h2>
        <span className="kicker">PAPER TRAIL</span>
      </div>

      <div className="cert-grid">
        {certificates.map((c, i) => {
          const tilt = i % 3 === 0 ? "tilt-l" : i % 3 === 1 ? "tilt-r" : "";
          const inner = (
            <>
              {c.image ? (
                <div className="cert-img">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </div>
              ) : (
                <div className={`cert-img cert-img--badge ${i % 2 ? "is-yellow" : ""}`}>
                  {i % 2 ? <LuSparkles size={34} /> : <LuShieldCheck size={34} />}
                </div>
              )}
              <div className="cert-body">
                <div className="cert-meta">
                  <span>{c.issuer}</span>
                  {c.isNew ? <span className="tag tag--blue">NEW</span> : <span>{c.date}</span>}
                </div>
                <h3>{c.title}</h3>
                {c.isNew && <span className="cert-date">{c.date}</span>}
              </div>
            </>
          );
          const cls = `cert paper paper--plain reveal ${tilt}`;
          const style = { "--delay": `${(i % 4) * 70}ms` };
          return c.link ? (
            <a key={c.title} className={cls} style={style} href={c.link} target="_blank" rel="noopener noreferrer">
              {inner}
            </a>
          ) : (
            <div key={c.title} className={cls} style={style}>
              {inner}
            </div>
          );
        })}
      </div>

      <div className="cert-more reveal">
        <a className="btn btn--light" href={certificatesFolder} target="_blank" rel="noopener noreferrer">
          Open the full folder <LuArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

export default Certificates;
