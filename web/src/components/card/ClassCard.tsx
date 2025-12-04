import "../../index.css";
import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import type { ClassCardProps } from "./types";

const ClassCard: React.FC<ClassCardProps> = ({
  title,
  descriptionTime,
  secondaryDescriptionTime,
  mainDescription,
  buttonText = "reserve your spot",
  onButtonClick = () => {
    console.log("Button clicked");
  }
}) => {
  return (
    <div className="flex w-full flex-col gap-[65px] bg-[#E9ECFF] p-[30px]">
      <div className="content flex flex-col items-center gap-[100px]">
        <div className="w-full">
          <h2 className="headline-2 text-start uppercase">{title}</h2>
        </div>
        <div className="sub-content flex w-full flex-col gap-6">
          <div className="w-full border-b-2 border-black pb-4">
            <p className="paragraph-1">{descriptionTime}</p>
          </div>
          <div className="w-full border-b-2 border-black pb-4">
            <p className="paragraph-1">{secondaryDescriptionTime}</p>
          </div>
          <p className="paragraph-1">{mainDescription}</p>
        </div>
        <div className="w-full">
          <PrimaryButton onClick={onButtonClick}>{buttonText}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
