import React, { useRef } from "react";
import { LuMinus, LuSquare, LuCopy, LuX } from "react-icons/lu";
import { useOS } from "./OSContext";

const MIN_W = 340;
const MIN_H = 240;

const Window = ({ app, state, focused, onFocus, onClose, onMinimize, onToggleMax, onMove, bounds }) => {
  const { isMobile } = useOS();
  const drag = useRef(null);
  const { Component } = app;

  const startDrag = (e) => {
    if (isMobile || e.button !== 0) return;
    if (e.target.closest("button, input, a, textarea, [data-nodrag]")) return;
    onFocus();
    if (state.max) return;
    drag.current = { mode: "move", px: e.clientX, py: e.clientY, x: state.x, y: state.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const startResize = (e) => {
    if (isMobile || state.max) return;
    e.stopPropagation();
    onFocus();
    drag.current = { mode: "size", px: e.clientX, py: e.clientY, w: state.w, h: state.h };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.px;
    const dy = e.clientY - d.py;
    if (d.mode === "move") {
      const maxX = window.innerWidth - 120;
      const maxY = window.innerHeight - 48;
      onMove({
        x: Math.min(maxX, Math.max(bounds.left - state.w + 120, d.x + dx)),
        y: Math.min(maxY, Math.max(bounds.top, d.y + dy)),
      });
    } else {
      onMove({
        w: Math.max(MIN_W, Math.min(window.innerWidth - state.x - 4, d.w + dx)),
        h: Math.max(MIN_H, Math.min(window.innerHeight - state.y - 4, d.h + dy)),
      });
    }
  };

  const endDrag = () => {
    drag.current = null;
  };

  const style = isMobile
    ? undefined
    : state.max
    ? { zIndex: state.z }
    : { zIndex: state.z, left: state.x, top: state.y, width: state.w, height: state.h };

  return (
    <section
      id={`win-${app.id}`}
      className={`win win--${app.id} ${focused ? "is-focused" : ""} ${state.max ? "is-max" : ""} ${
        state.min ? "is-min" : ""
      }`}
      style={style}
      onPointerDown={() => !focused && onFocus()}
      aria-label={app.title}
    >
      <header
        className="win-head"
        onPointerDown={startDrag}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={(e) => !isMobile && !e.target.closest("button, input, a") && onToggleMax()}
      >
        <span className="win-title">{app.title}</span>
        {!isMobile && (
          <div className="win-controls">
            <button onClick={onMinimize} aria-label="Minimize">
              <LuMinus size={14} />
            </button>
            <button onClick={onToggleMax} aria-label={state.max ? "Restore" : "Maximize"}>
              {state.max ? <LuCopy size={12} /> : <LuSquare size={11} />}
            </button>
            <button className="win-close" onClick={onClose} aria-label="Close">
              <LuX size={14} />
            </button>
          </div>
        )}
      </header>
      <div className="win-body">
        <Component args={state.args} />
      </div>
      {!isMobile && !state.max && (
        <span
          className="win-resize"
          onPointerDown={startResize}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default Window;
