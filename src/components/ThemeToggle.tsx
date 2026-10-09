"use client";
import { useId } from "react";
import { type ThemePref, useTheme } from "./ThemeProvider";

const next: Record<ThemePref, ThemePref> = {
  system: "light",
  light: "dark",
  dark: "system",
};

export const ThemeToggle = () => {
  const { pref, setPref } = useTheme();
  const maskId = useId().replace(/:/g, "");

  if (!pref) return null;

  return (
    <button
      type="button"
      onClick={() => setPref(next[pref])}
      className="theme-toggle"
      aria-label="Theme toggle button"
    >
      <svg className={`theme-icon ${pref}`} viewBox="0 0 200 200">
        <title>Change theme</title>
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="200"
            height="200"
          >
            <rect width="200" height="200" fill="white" />
            <path className="cutout" fill="black" />
          </mask>
        </defs>
        <g mask={`url(#${maskId})`}>
          <g
            className="rays"
            stroke="currentColor"
            strokeWidth="28"
            strokeLinecap="round"
          >
            {[0, 60, 120, 180, 240, 300].map((a) => (
              <line
                key={a}
                x1="100"
                y1="22"
                x2="100"
                y2="22"
                transform={`rotate(${a} 100 100)`}
              />
            ))}
          </g>
          <circle
            className="core"
            cx="100"
            cy="100"
            r="80"
            fill="currentColor"
          />
        </g>
      </svg>
    </button>
  );
};
