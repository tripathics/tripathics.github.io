import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import config from "@/lib/config";
import "@/styles/index.scss";
import "@/styles/new-moon.css";
import "asciinema-player/dist/bundle/asciinema-player.css";

export const metadata: Metadata = {
  title: {
    default: config.siteTitle,
    template: `%s | ${config.siteTitle}`,
  },
  description: config.description,
  icons: {
    icon: config.siteLogo,
  },
  metadataBase: new URL(config.siteUrl),
};

const themeScript = `
;(function() {
  var root = document.documentElement;
  var t = 'light';
  try {
    var pref = 'system';
    try {
      pref = window.localStorage.getItem('theme') || 'system';
    } catch (e) {}
    var dark = pref === 'dark';
    if (
      pref === 'system' &&
      typeof window.matchMedia === 'function'
    ) {
      dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    t = dark ? 'dark' : 'light';
  } catch (e) {}

  if (root.dataset) {
    root.dataset.theme = t;
  } else {
    root.setAttribute('data-theme', t);
  }

  try {
    if (typeof window.getComputedStyle === 'function') {
      var meta = document.querySelector('meta[name="theme-color"]');
      if (meta) {
        var appBg = window
          .getComputedStyle(root)
          .getPropertyValue('--app-bg-color')
          .trim();
        if (appBg) {
          meta.setAttribute('content', appBg);
        }
      }
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="theme-color" content="212529" />
        <noscript>
          <link rel="stylesheet" href="/dark-mode.css" />
        </noscript>
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
