import type { MDXComponents } from "mdx/types";
import type { StaticImageData } from "next/image";
import { Cast, type CastProps } from "./components/Cast";

const IMG_RE = /(?:\.\/)?images\/(.+)$/;
const images = import.meta.glob("./posts/content/images/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, StaticImageData>;

const CAST_RE = /(?:\.\/)?casts\/(.+)$/;
const casts = import.meta.glob("./posts/content/casts/*.cast", {
  eager: true,
  query: "?url",
}) as Record<string, string>;

const components = {
  img: (props: { src?: string; alt?: string;[key: string]: unknown }) => {
    const { src, alt, ...rest } = props;
    const match = typeof src === "string" ? src.match(IMG_RE) : null;
    const resolved = match
      ? images[`./posts/content/images/${match[1]}`]?.src
      : src;
    return <img src={resolved} alt={alt} {...rest} />;
  },
  Cast: (props: CastProps) => {
    const { src, ...rest } = props
    const match = typeof src === "string" ? src.match(CAST_RE) : null;
    const resolved = match ? casts[`./posts/content/casts/${match[1]}`] : src
    return <Cast src={resolved} {...rest} />;
  }
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
