"use client";

import { type ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Loading from "./Loading";
import Me from "./Me";
import Navigation from "./Navigation";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      {theme === "dark" && <link rel="stylesheet" href="/dark-mode.css" />}
      <Loading isLoading={isLoading} />
      <div className="layout-component">
        <Navigation
          theme={theme}
          toggleTheme={() => {
            if (theme === "light") {
              window.localStorage.setItem("theme", "dark");
              setTheme("dark");
            } else {
              window.localStorage.setItem("theme", "light");
              setTheme("light");
            }
          }}
        />
        <Me
          ghUsername="tripathics"
          instaHandle="c_strip.z"
          linkedinLink="tripathics"
          matrixHandle="@tripathics:matrix.org"
        />
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    </>
  );
}
