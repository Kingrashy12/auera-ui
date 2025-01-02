import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Installation from "@/components/guide/Installation";
import TabLink from "@/components/TabLink";
import CodeBlock from "@/components/layout/code/Block";
import { Box, Button, Card, Stack, Tabs, TabHandle, TabPanel } from "auera-ui";
import Details from "@/components/Details";
import HeaderLabel from "@/components/HeaderLabel";
import DetailCard from "@/components/layout/DetailCard";
import Link from "next/link";
import CLI from "@/components/guide/CLI";
import CodeTag from "@/components/CodeTag";
import dynamic from "next/dynamic";
import Mockups from "@/components/Mockups";
import SimpleBackdrop from "@/components/example/backdrop/SimpleBackdrop";
import APITable from "@/components/APITable";
import BoxBasic from "@/components/example/box/Basic";
import BoxWithDirection from "@/components/example/box/Direction";
import ButtonDemo from "@/components/example/button/demo";
import ButtonVariants from "@/components/example/button/variants";
import ButtonColors from "@/components/example/button/colors";
import ButtonRadius from "@/components/example/button/radius";
import ButtonSizes from "@/components/example/button/sizes";
import ButtonFlavours from "@/components/example/button/flavours";
import LoadingButton from "@/components/example/button/loading";
import CustomSpinner from "@/components/example/button/custom-spinner";
import ButtonWithIcon from "@/components/example/button/icon";
import ButtonWithTrigger from "@/components/example/button/with-trigger";

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
  TabHandle,
  TabPanel,
  Stack,
  CodeBlock,
  CLI,
  CodeTag,
  Mockups,
  SimpleBackdrop,
  APITable,
  BoxBasic,
  BoxWithDirection,
  ButtonDemo,
  ButtonVariants,
  ButtonColors,
  ButtonRadius,
  ButtonSizes,
  ButtonFlavours,
  LoadingButton,
  CustomSpinner,
  ButtonWithIcon,
  ButtonWithTrigger,
};

export const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((module) => ({ default: module.MDXRemote }))
);
