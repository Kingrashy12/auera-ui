import { DocsLayout } from "@/components";
import Title from "@/components/Title";
import { components, MDXRemote } from "@/constant/mdx.config";
import {
  modalContainerImp,
  placementImp,
  radiusImp,
  sizesImp,
  transitionImp,
} from "@/data/imp/modal";
import { fetchContent } from "@/hooks/fetch_content";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { Suspense } from "react";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
}

const scope = {
  sizesImp,
  placementImp,
  radiusImp,
  transitionImp,
  modalContainerImp,
};

const Page = ({ frontmatter, mdxSource }: Props) => {
  return (
    <Suspense>
      <Title title={frontmatter?.title as string} />
      <DocsLayout>
        <MDXRemote {...mdxSource} components={components} scope={scope} />
      </DocsLayout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { mdxSource, notFound } = await fetchContent(slug, "reference");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 60,
    notFound: notFound,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["modal", "drawer"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
