import React from "react";
import SizeAuto from "./size-auto";
import SizeMd from "./size-md";
import SizeLg from "./size-lg";
import SizeXl from "./size-xl";
import SizeFull from "./size.full";
import SizeFullScreen from "./size-full-screen";
import SizeSmall from "./size-sm";
import PlacementBottom from "./placement-bottom";
import PlacementCenter from "./placement-center";
import PlacementTop from "./placement-top";
import Radius2xl from "./radius-2xl";
import RadiusLg from "./radius-lg";
import RadiusMd from "./radius-md";
import RadiusXL from "./radius-xl";
import Radius3xl from "./radius-3xl";
import SlideInTransition from "./slide-in";
import WalkInTransition from "./walk-in";
import DropInTransition from "./drop-in";

const ModalDemoConatiner = () => {
  return (
    <>
      <SizeAuto />
      <SizeSmall />
      <SizeMd />
      <SizeLg />
      <SizeXl />
      <SizeFull />
      <SizeFullScreen />
      <PlacementBottom />
      <PlacementCenter />
      <PlacementTop />
      <Radius2xl />
      <RadiusLg />
      <RadiusMd />
      <RadiusXL />
      <Radius3xl />
      <SlideInTransition />
      <WalkInTransition />
      <DropInTransition />
    </>
  );
};

export default ModalDemoConatiner;
