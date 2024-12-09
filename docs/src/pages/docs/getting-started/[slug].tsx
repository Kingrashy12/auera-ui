import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import DetailCard from "@/components/layout/DetailCard";
import DocsLayout from "@/components/layout/DocsLayout";
import LoadIndicator from "@/components/LoadIndicator";
import Title from "@/components/Title";
import { fetchContent } from "@/hooks/fetch_content";
import { Box, Button, Card, Stack, Tabs } from "auera-ui";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import React, { Suspense } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Installation from "@/components/guide/Installation";
import TabLink from "@/components/TabLink";
import CodeBlock from "@/components/layout/code/Block";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
}
const components = {
  DetailCard,
  Box,
  HeaderLabel,
  Details,
  Link,
  HiArrowTopRightOnSquare,
  Installation,
  TabLink,
  Card,
  Button,
  Tabs,
  Stack,
  CodeBlock,
};
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
  const { mdxSource } = await fetchContent(slug, "getting-started");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 10, //TODO: Remove this from been add to production
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["quick-start", "usage"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};
