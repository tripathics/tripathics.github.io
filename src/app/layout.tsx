import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import config from "@/lib/config";
import "@/styles/index.scss";
import "@/styles/new-moon.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
