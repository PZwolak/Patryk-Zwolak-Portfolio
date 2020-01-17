import React from "react";
import SectionLeftSide from "./SectionLeftSide";
import SectionRightSide from "./SectionRightSide";
import ButtonPrimary from "../Button/ButtonPrimary";

const Section = ({ sectionData, handleRightSide }) => {
  const sectionClass = `section main-section__element main-section__${sectionData.sectionClass}`;
  return (
    <div className={sectionClass}>
      <SectionLeftSide sideData={sectionData.sectionLeftData} />
      <SectionRightSide sideData={sectionData.sectionRightData} />
      <ButtonPrimary
        handleRightSide={handleRightSide}
        sideData={sectionData.sectionLeftData}
      />
    </div>
  );
};

export default Section;
