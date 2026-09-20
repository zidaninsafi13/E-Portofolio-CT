import { useEffect, useState } from "react";
import { Icon } from "./Icon";

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === "dark" ? "dark" : "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystem = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Storage can be unavailable. */ }
      if (saved !== "light" && saved !== "dark") setTheme(preference.matches ? "dark" : "light");
    };
    const syncTab = (event: StorageEvent) => {
      if (event.key === "portfolio-theme" || event.key === null) {
        if (event.newValue === "dark" || event.newValue === "light") setTheme(event.newValue);
        else syncSystem();
      }
    };
    preference.addEventListener("change", syncSystem);
    window.addEventListener("storage", syncTab);
    return () => {
      preference.removeEventListener("change", syncSystem);
      window.removeEventListener("storage", syncTab);
    };
  }, []);

  return (
    <button className="theme-toggle" type="button" role="switch" aria-checked={theme === "dark"}
      aria-label="Mode gelap" title={theme === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        try { localStorage.setItem("portfolio-theme", next); } catch { /* Theme still works without persistence. */ }
      }}>
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <Icon name="sun" size={17} /><Icon name="moon" size={17} />
    </button>
  );
}
