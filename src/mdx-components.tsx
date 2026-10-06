import type { MDXComponents } from "mdx/types";
import { StaticImageData } from "next/image";

const IMG_RE = /(?:\.{1,2}\/)?images\/(.+)$/;

const images = import.meta.glob("./posts/content/images/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, StaticImageData>;

const components = {
  img: (props: { src?: string; alt?: string;[key: string]: unknown }) => {
    const { src, alt, ...rest } = props;
    const match = typeof src === "string" ? src.match(IMG_RE) : null;
    const resolved = match
      ? images[`./posts/content/images/${match[1]}`]?.src
      : src;
    return <img src={resolved} alt={alt} {...rest} />;
  },
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
