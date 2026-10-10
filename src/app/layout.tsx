import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#212529",
};

const themeScript = `
(function () {
  var t = 'light';
  try {
    var pref = localStorage.getItem('theme') || 'system';
    var dark = pref === 'dark' ||
      (pref === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    t = dark ? 'dark' : 'light';
  } catch (e) {}
  document.documentElement.dataset.theme = t;
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
