import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  turbopack: {
    rules: {
      "*.cast": {
        type: "asset",
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-prism-plus", { ignoreMissing: true }],
    ],
  },
});

export default withMDX(nextConfig);
