import { createContext, useContext } from "react";

export const OSContext = createContext({
  openApp: () => {},
  closeApp: () => {},
  isMobile: false,
  theme: "dark",
});

export const useOS = () => useContext(OSContext);
