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
import IconDemo from "@/components/example/icon/demo";
import DynamicSvg from "@/components/example/icon/dynamic-svg";
import CustomSvg from "@/components/example/icon/custom-svg";
import Note from "@/components/Note";
import IButtonSizes from "@/components/example/i_button/sizes";
import IButtonDemo from "@/components/example/i_button/demo";
import IButtonVariants from "@/components/example/i_button/variants";
import IButtonAsChild from "@/components/example/i_button/asChild";
import IButtonRadius from "@/components/example/i_button/radius";
import IButtonWithTrigger from "@/components/example/i_button/with-trigger";
import MapItemsDemo from "@/components/example/mapitems/demo";
import Map_EmptyList from "@/components/example/mapitems/empty-list";
import MenuDemo from "@/components/example/menu/demo";
import PaddedMenu from "@/components/example/menu/padded";
import FeedMenu from "@/components/example/menu/feed-menu";
import ModalDemo from "@/components/example/modal/demo";
import FormModal from "@/components/example/modal/form-modal";
import FontGuide from "@/components/guide/font-guide";
import OTPError from "@/components/example/otp-input/error";
import OTPDemo from "@/components/example/otp-input/demo";
import OTPWithCard from "@/components/example/otp-input/with-card";
import OnCompleteOTP from "@/components/example/otp-input/on-complete";
import OTPLength from "@/components/example/otp-input/length";
import StackDemo from "@/components/example/stack/demo";
import StackAlignment from "@/components/example/stack/align";
import SBSizes from "@/components/example/status-badge/sizes";
import SBPlacement from "@/components/example/status-badge/placement";
import SBStatus from "@/components/example/status-badge/status";
import StatusBadgeDemo from "@/components/example/status-badge/demo";
import StatusBadge_Animate from "@/components/example/status-badge/animate";
import SwitchDemo from "@/components/example/switch/demo";
import SwitchColor from "@/components/example/switch/color";
import SwitchSizes from "@/components/example/switch/sizes";
import ControlledSwitch from "@/components/example/switch/controlled";
import SwitchState from "@/components/example/switch/state";
import DisabledCheck from "@/components/example/checkbox/disabled";
import ControlledCheck from "@/components/example/checkbox/controlled";
import DisabledSwitch from "@/components/example/switch/disabled";
import UsageDemo from "@/components/example/demo";

export const components = {
  DetailCard,
  Box,
  HeaderLabel,
  Details,
  Link,
  HiArrowTopRightOnSquare,
  Installation,
  FontGuide,
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
  IconDemo,
  DynamicSvg,
  CustomSvg,
  Note,
  IButtonSizes,
  IButtonDemo,
  IButtonVariants,
  IButtonAsChild,
  IButtonRadius,
  IButtonWithTrigger,
  MapItemsDemo,
  Map_EmptyList,
  MenuDemo,
  PaddedMenu,
  FeedMenu,
  ModalDemo,
  FormModal,
  OTPError,
  OTPDemo,
  OTPWithCard,
  OnCompleteOTP,
  OTPLength,
  StackDemo,
  StackAlignment,
  SBSizes,
  SBPlacement,
  SBStatus,
  StatusBadgeDemo,
  StatusBadge_Animate,
  SwitchDemo,
  SwitchColor,
  SwitchSizes,
  ControlledSwitch,
  SwitchState,
  DisabledCheck,
  ControlledCheck,
  DisabledSwitch,
  UsageDemo,
};

export const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((module) => ({ default: module.MDXRemote }))
);
