import { createContext, useState } from 'react';

export const ModeContext = createContext();

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(false);
  const toggleButton = () => setMode((set) => !set);
  return (
    <ModeContext.Provider value={{ mode, toggleButton }}>
      {children}
    </ModeContext.Provider>
  );
}
