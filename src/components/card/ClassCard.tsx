import "../../index.css";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import type { ClassCardProps } from "./types";

const ClassCard: React.FC<ClassCardProps> = ({
  title = "Strength",
  descriptionTime = "Weekdays at 6AM",
  secondaryDescriptionTime = "Weekends and Holidays at 8AM",
  mainDescription = "Build a foundation of raw power with our comprehensive weightlifting and strength training programs.",
  buttonText = "reserve your spot",
  onButtonClick = () => {
    console.log("Button clicked");
  }
}) => {
  return (
    <div className="flex w-full flex-col gap-[65px] bg-[#E9ECFF] p-[30px]">
      <div className="content flex flex-col items-center gap-[100px]">
        <div className="w-full">
          <h2 className="headline-2 text-start uppercase 
          md:headline-2_md 
          lg:headline-2_lg 
          xl:headline-2_xl">{title}</h2>
        </div>
        <div className="sub-content flex w-full flex-col gap-6">
          <div className="w-full border-b-2 border-black pb-4">
            <p className="paragraph-1
            md:paragraph-1_md 
            lg:paragraph-1_lg 
            xl:paragraph-1_xl">{descriptionTime}</p>
          </div>
          <div className="w-full border-b-2 border-black pb-4">
            <p className="paragraph-1
            md:paragraph-1_md 
            lg:paragraph-1_lg 
            xl:paragraph-1_xl">{secondaryDescriptionTime}</p>
          </div>
          <p className="paragraph-1
          md:paragraph-1_md 
          lg:paragraph-1_lg 
          xl:paragraph-1_xl">{mainDescription}</p>
        </div>
        <div className="w-full">
          <PrimaryButton onClick={onButtonClick}>{buttonText}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
