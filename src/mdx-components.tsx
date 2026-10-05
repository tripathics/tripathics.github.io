import type { MDXComponents } from "mdx/types";

const IMG_RE = /(?:\.{1,2}\/)?images\/(.+)$/;

const components = {
  img: (props: { src?: string; alt?: string;[key: string]: unknown }) => {
    const { src, alt, ...rest } = props;
    const match = typeof src === "string" ? src.match(IMG_RE) : null;
    return <img src={match ? `/blog-images/${match[1]}` : src} alt={alt} {...rest} />;
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
