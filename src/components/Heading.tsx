import Link from "next/link";

interface HeadingProps {
  id?: string;
  title: string;
  pageLink?: string;
  extLink?: string;
  extLinkText?: string;
}

export const Heading = ({
  id,
  title,
  pageLink,
  extLink,
  extLinkText,
}: HeadingProps) => {
  return (
    <div className="section-heading">
      <h2 id={id}>
        <a href={`#${id}`}>{title}</a>
      </h2>
      {extLink && (
        <a className="button" href={extLink} target="_blank" rel="noreferrer">
          {extLinkText}
        </a>
      )}
      {pageLink && (
        <Link className="button" href={pageLink}>
          View all
        </Link>
      )}
    </div>
  );
};

interface PageTitleProps {
  id?: string;
  title: string;
}

export const PageTitle = ({ id, title }: PageTitleProps) => {
  const resolvedId = id ?? "";
  return (
    <header className="head-container">
      <h1 id={resolvedId}>
        {resolvedId ? <a href={`#${resolvedId}`}>{title}</a> : title}
      </h1>
    </header>
  );
};
