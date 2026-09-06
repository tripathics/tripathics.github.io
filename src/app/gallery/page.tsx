import type { Metadata } from "next";
import { PageTitle } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageTitle id="section-g0" title="Gallery" />
      <section className="container">
        <div id="todo">
          <img src="/comingsoon.png" alt="Coming soon" />
        </div>
      </section>
    </>
  );
}
