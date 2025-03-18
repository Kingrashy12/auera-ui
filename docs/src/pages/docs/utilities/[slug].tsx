import { DocsLayout } from "@/components";
import Title from "@/components/Title";
import { components, MDXRemote } from "@/constant/mdx.config";
import { formatDateParms } from "@/data/parameters/format-date";
import { formatTimeParams } from "@/data/parameters/format-time";
import { fetchContent } from "@/hooks/fetch_content";
import SupportedFormat from "@/utilities/format-date/supported-format";
import UsageExample from "@/utilities/format-date/usage";
import FormatTimeAgeExample from "@/utilities/format-time-age/usage";
import FormatTimeUsage from "@/utilities/format-time/usage";
import StrFunUsage from "@/utilities/strfun/usage";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { Suspense } from "react";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
  frontmatter: Record<string, unknown>;
  slug: string;
}

const data = {
  formatDateParms,
  formatTimeParams,
};

const Docscomponents = {
  UsageExample,
  SupportedFormat,
  FormatTimeUsage,
  FormatTimeAgeExample,
  StrFunUsage,
};

const Page = ({ frontmatter, mdxSource, slug }: Props) => {
  return (
    <Suspense>
      <Title title={frontmatter?.title as string} />
      <DocsLayout hideNavigator={slug === "overview"}>
        <MDXRemote
          {...mdxSource}
          components={{ ...components, ...Docscomponents }}
          scope={data}
        />
      </DocsLayout>
    </Suspense>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const { mdxSource, notFound } = await fetchContent(slug, "utilities");
  const frontmatter = mdxSource?.frontmatter;
  return {
    props: { slug, mdxSource, frontmatter },
    revalidate: 60,
    notFound: notFound,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["format-date", "format-time", "format-time-ago", "strfun"];

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
