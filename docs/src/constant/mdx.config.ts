import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Installation from "@/components/guide/Installation";
import TabLink from "@/components/TabLink";
import CodeBlock from "@/components/layout/code/Block";
import { Box, Button, Card, Stack, Tabs } from "auera-ui";
import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import DetailCard from "@/components/layout/DetailCard";
import Link from "next/link";
import { lazy } from "react";
import CLI from "@/components/guide/CLI";
import CodeTag from "@/components/CodeTag";

export const components = {
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
  CLI,
  CodeTag,
};

export const MDXRemote = lazy(() =>
  import("next-mdx-remote").then((module) => ({ default: module.MDXRemote }))
);
