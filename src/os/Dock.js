import React from "react";
import { appById, dockApps, mobileOrder } from "./apps";
import { AppIcon } from "./icons";

const Dock = ({ wins, focused, onClick, onShowApps, isMobile }) => {
  const list = isMobile ? mobileOrder : dockApps;
  return (
    <nav className="dock" aria-label="Dock">
      <ul>
        {list.map((id) => {
          const app = appById[id];
          const w = wins[id];
          const running = !isMobile && w && w.open;
          return (
            <li key={id}>
              <button
                className={`dock-item ${running ? "is-running" : ""} ${!isMobile && focused === id ? "is-focused" : ""}`}
                onClick={() => onClick(id)}
                aria-label={app.name}
              >
                <AppIcon kind={app.icon} size={isMobile ? 34 : 42} />
                <span className="dock-tip">{app.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {!isMobile && (
        <button className="dock-item dock-grid" onClick={onShowApps} aria-label="Show Apps">
          <AppIcon kind="grid" size={42} />
          <span className="dock-tip">Show Apps</span>
        </button>
      )}
    </nav>
  );
};

export default Dock;
