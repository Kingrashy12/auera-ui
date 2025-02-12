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
import OverlayStructure from "@/components/guide/overlay-structure";
import BoxWithMotion from "@/components/example/box/WithMotion";
import CardDemo from "@/components/example/card/demo";
import CardWithImage from "@/components/example/card/with-image";
import CardWithCustomImage from "@/components/example/card/custom-image-render";
import FeedCard from "@/components/example/card/feed-card";
import CardWithForm from "@/components/example/card/card-with-form";
import Web3Card from "@/components/example/card/web-card";
import PricingCard from "@/components/example/card/pricing-card";
import CheckboxDemo from "@/components/example/checkbox/demo";
import CheckboxRadius from "@/components/example/checkbox/radius";
import CheckboxColorSchemes from "@/components/example/checkbox/color-scheme";
import CheckboxColors from "@/components/example/checkbox/colors";
import CheckboxSizes from "@/components/example/checkbox/size";
import OnCheck from "@/components/example/checkbox/oncheck";
import DrawerDemo from "@/components/example/drawer/demo";
import DrawerTypes from "@/components/example/drawer/types";
import DrawerPosition from "@/components/example/drawer/position";
import UsingDrawerTrigger from "@/components/example/drawer/drawer-trigger";
import {
  DemoDrawer,
  Drawer__Content,
  FloatDrawer,
  LeftDrawer,
} from "@/components/example/drawer/references";
import CollapseDemo from "@/components/example/collapse/demo";
import CollapseWithCustomHeader from "@/components/example/collapse/render-header";
import GroupMapDemo from "@/components/example/groupmap/demo";
import GroupMapEmpty from "@/components/example/groupmap/empty-list";

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
  OverlayStructure,
  BoxWithMotion,
  CardDemo,
  CardWithImage,
  CardWithCustomImage,
  FeedCard,
  CardWithForm,
  Web3Card,
  PricingCard,
  CheckboxDemo,
  CheckboxRadius,
  CheckboxColorSchemes,
  CheckboxColors,
  CheckboxSizes,
  OnCheck,
  DrawerDemo,
  DrawerTypes,
  DrawerPosition,
  UsingDrawerTrigger,
  DemoDrawer,
  Drawer__Content,
  FloatDrawer,
  LeftDrawer,
  CollapseDemo,
  CollapseWithCustomHeader,
  GroupMapDemo,
  GroupMapEmpty,
};

export const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((module) => ({ default: module.MDXRemote }))
);
