"use client"
import { useEffect, useId, useState } from "react";

type ThemePref = "light" | "dark" | "system"

function applyTheme(pref: ThemePref) {
  const dark = pref === "dark" ||
    (pref === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.dataset.theme = dark ? "dark" : "light"
}

export const ThemeToggle = () => {
  const [pref, setPref] = useState<ThemePref | null>(null)
  const theme = pref === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : pref

  useEffect(() => {
    setPref((localStorage.getItem("theme") as ThemePref) || "system")
  }, [])

  useEffect(() => {
    if (!pref) return
    applyTheme(pref)
    localStorage.setItem("theme", pref);

    if (pref !== "system") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system")
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange);
  }, [pref])

  const maskId = useId().replace(/:/g, "");

  if (!pref) return null

  const next: Record<ThemePref, ThemePref> = {
    system: "light",
    light: "dark",
    dark: "system",
  }

  return (
    <button
      type="button"
      onClick={() => setPref(next[pref])}
      className="theme-toggle"
      aria-label="Theme toggle button"
    >
      <svg className={`theme-icon ${pref}`} viewBox="0 0 200 200">
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
            <rect width="200" height="200" fill="white" />
            <path className="cutout" fill="black" />
          </mask>
        </defs>
        <g mask={`url(#${maskId})`}>
          <g className="rays" stroke="currentColor" strokeWidth="12" strokeLinecap="round">
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <line key={a} x1="100" y1="14" x2="100" y2="28" transform={`rotate(${a} 100 100)`} />
            ))}
          </g>
          <circle className="core" cx="100" cy="100" r="80" fill="currentColor" />
        </g>
      </svg>
    </button>
  );
};
