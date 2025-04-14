import { DocsLayout } from "@/components";
import Title from "@/components/Title";
import { components, MDXRemote } from "@/constant/mdx.config";
import { fetchContent } from "@/hooks/fetch_content";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { Suspense } from "react";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
}

const Page = ({ frontmatter, mdxSource }: Props) => {
  return (
    <Suspense>
      <Title title={frontmatter?.title as string} />
      <DocsLayout>
        <MDXRemote {...mdxSource} components={components} />
      </DocsLayout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { mdxSource, notFound } = await fetchContent(slug, "customization");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 60,
    notFound: notFound,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["design", "style-rules"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
