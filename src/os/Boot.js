import React, { useEffect } from "react";

const Boot = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2100);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="boot" onClick={onDone} role="presentation">
      <div className="boot-logo" aria-hidden="true">
        <span>SF</span>
      </div>
      <p className="boot-name">
        selman<strong>OS</strong>
      </p>
      <div className="boot-dots" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <p className="boot-skip">click to skip</p>
    </div>
  );
};

export default Boot;
