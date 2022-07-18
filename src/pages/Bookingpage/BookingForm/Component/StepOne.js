import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const StepOne = () => {
  return (
    <div className="h-screen w-full">
      <ProgressBar completed={25} bgColor={'#3A3A3A'} height={'1.5px'} isLabelVisible={false} />
      <h1 className="mt-52px font-Gilroy font-light text-28px leading-58px text-blackshade-0">Select your perfect stay</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default StepOne;