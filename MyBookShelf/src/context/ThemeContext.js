import { createContext, useState } from "react";
import { DarkTheme, LightTheme } from "../constants/const";

// export const TheemContext = createContext();

// export default function TheemContextProvider({ children }) {
//   const [themeMode, setThemeMode] = useState(DarkTheme);

//   return (
//     <TheemContext.Provider value={{ themeMode, setThemeMode }}>
//       {children}
//     </TheemContext.Provider>
//   );
// }

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const theme = mode === "dark" ? DarkTheme : LightTheme;

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
