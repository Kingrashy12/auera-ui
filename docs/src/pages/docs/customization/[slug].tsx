import DocsLayout from "@/components/layout/DocsLayout";
import LoadIndicator from "@/components/LoadIndicator";
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
    <Suspense fallback={<LoadIndicator />}>
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
  const { mdxSource } = await fetchContent(slug, "customization");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["design", "overide-styles"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
