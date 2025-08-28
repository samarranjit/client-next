import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // e.g. h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
    ...components,
  };
}
