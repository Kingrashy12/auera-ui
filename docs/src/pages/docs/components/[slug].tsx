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
  slug: string;
}

const Page = ({ frontmatter, mdxSource, slug }: Props) => {
  return (
    <Suspense>
      <Title title={frontmatter?.title as string} />
      <DocsLayout hideNavigator={slug === "overview"}>
        <MDXRemote {...mdxSource} components={components} />
      </DocsLayout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { mdxSource } = await fetchContent(slug, "components");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["overview"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
