import { DocsLayout } from "@/components";
import Title from "@/components/Title";
import { components, MDXRemote } from "@/constant/mdx.config";
import { backdropRef } from "@/data/api-ref/backdrop";
import { boxRef } from "@/data/api-ref/box";
import { buttonRef } from "@/data/api-ref/button";
import { cardRef } from "@/data/api-ref/card";
import { checkboxRef } from "@/data/api-ref/checkbox";
import { collapseRef } from "@/data/api-ref/collapse";
import { drawerRef } from "@/data/api-ref/drawer";
import { groupMapRef } from "@/data/api-ref/group-map";
import { i_buttonRef } from "@/data/api-ref/iconbuttonRef";
import { iconRef } from "@/data/api-ref/iconRef";
import { mapitems_ref } from "@/data/api-ref/mapitems_ref";
import { fetchContent } from "@/hooks/fetch_content";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { Suspense } from "react";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
  slug: string;
}

const data = {
  backdropRef,
  boxRef,
  buttonRef,
  cardRef,
  checkboxRef,
  drawerRef,
  collapseRef,
  groupMapRef,
  iconRef,
  i_buttonRef,
  mapitems_ref,
};

const Page = ({ frontmatter, mdxSource, slug }: Props) => {
  return (
    <Suspense>
      <Title title={frontmatter?.title as string} />
      <DocsLayout hideNavigator={slug === "overview"}>
        <MDXRemote {...mdxSource} components={components} scope={data} />
      </DocsLayout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { mdxSource, notFound } = await fetchContent(slug, "components");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 60,
    notFound: notFound,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = [
    "overview",
    "backdrop",
    "box",
    "button",
    "card",
    "checkbox",
    "collapse",
    "drawer",
    "fab",
    "groupmap",
    "icon",
    "icon-button",
    "mapitems",
  ];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
