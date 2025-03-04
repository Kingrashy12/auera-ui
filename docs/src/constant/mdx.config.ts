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
import IButtonAsDiv from "@/components/example/i_button/as-div";
import IButtonRadius from "@/components/example/i_button/radius";
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
import TabsDemo from "@/components/example/tabs/demo";
import TabsWithFullWidth from "@/components/example/tabs/fullwidth";
import TabWithIcons from "@/components/example/tabs/icon";
import SolidTabs from "@/components/example/tabs/solid-variants";
import RoundedTabs from "@/components/example/tabs/rounded";
import TabsWithHiddenBorder from "@/components/example/tabs/hide-border";
import UsingNext from "@/components/guide/font-nextjs";
import ToastDemo from "@/components/example/toast/demo";
import ToastPositions from "@/components/example/toast/position";
import ToastTransition from "@/components/example/toast/transition";
import ToastVariants from "@/components/example/toast/variants";
import LoadingToast from "@/components/example/toast/loading-toast";
import AvatarDemo from "@/components/example/avatar/demo";
import AvatarSizes from "@/components/example/avatar/sizes";
import LoadingAvatar from "@/components/example/avatar/isloading";
import AvatarBorder from "@/components/example/avatar/border";
import FileUploadDemo from "@/components/example/file-upload/demo";
import MultipleUpload from "@/components/example/file-upload/multiple";
import FileSize from "@/components/example/file-upload/size";
import MaxFileSize from "@/components/example/file-upload/max-size";
import MaxFileUpload from "@/components/example/file-upload/max-file";
import UploadDropZone from "@/components/example/file-upload/dropzone";
import FileWithRemovable from "@/components/example/file-upload/removable";
import AcceptsFile from "@/components/example/file-upload/accept";
import ReceiveFile from "@/components/example/file-upload/receive";
import LoadingDemo from "@/components/example/loading/demo";
import LoadingCustomSpinner from "@/components/example/loading/custom-spinner";
import LoadingEmpty from "@/components/example/loading/empty";
import LoadingWithError from "@/components/example/loading/error";
import Loader from "@/components/example/loading/loader";
import ModalSizes from "@/components/example/modal/sizes";
import ModalPlacement from "@/components/example/modal/placement";
import ModalRadius from "@/components/example/modal/radius";
import ModalTransitions from "@/components/example/modal/transitions";
import ModalReference from "@/components/example/modal/reference";

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
  IButtonAsDiv,
  IButtonRadius,
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
  TabsDemo,
  TabsWithFullWidth,
  TabWithIcons,
  SolidTabs,
  RoundedTabs,
  TabsWithHiddenBorder,
  UsingNext,
  ToastDemo,
  ToastPositions,
  ToastTransition,
  ToastVariants,
  LoadingToast,
  AvatarDemo,
  AvatarSizes,
  LoadingAvatar,
  AvatarBorder,
  FileUploadDemo,
  MultipleUpload,
  FileSize,
  MaxFileSize,
  MaxFileUpload,
  UploadDropZone,
  FileWithRemovable,
  AcceptsFile,
  ReceiveFile,
  LoadingDemo,
  LoadingCustomSpinner,
  LoadingEmpty,
  LoadingWithError,
  Loader,
  ModalSizes,
  ModalPlacement,
  ModalRadius,
  ModalTransitions,
  ModalReference,
};

export const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((module) => ({ default: module.MDXRemote }))
);
