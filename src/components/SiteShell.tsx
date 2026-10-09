"use client";

import type { ReactNode } from "react";
import Footer from "./Footer";
import Me from "./Me";
import Navigation from "./Navigation";
import { ThemeProvider } from "./ThemeProvider";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <div className="layout-component">
        <Navigation />
        <Me
          ghUsername="tripathics"
          instaHandle="c_strip.z"
          linkedinLink="tripathics"
          matrixHandle="@tripathics:matrix.org"
        />
        <main className="layout-main">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
