import { useState, useLayoutEffect } from "react";

const preferDarkSchema =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = preferDarkSchema ? "dark" : "light";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || defaultTheme
  );

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
