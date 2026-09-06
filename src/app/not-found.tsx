import Link from "next/link";
import { PageTitle } from "@/components/Heading";

export default function NotFound() {
  return (
    <div className="error-404">
      <PageTitle title="404" />
      <section className="container">
        <p>This is not the web page you are looking for.</p>
        <Link href="/">Back to home</Link>
      </section>
    </div>
  );
}
