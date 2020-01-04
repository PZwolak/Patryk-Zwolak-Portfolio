import React from "react";
import SectionLeftSide from "./SectionLeftSide";
import SectionRightSide from "./SectionRightSide";
import ButtonPrimary from "../Button/ButtonPrimary";

const Section = ({ sectionData }) => {
  const sectionClass = `section main-section__element main-section__${sectionData.sectionClass}`;
  return (
    <div className={sectionClass}>
      <SectionLeftSide sideData={sectionData.sectionLeftData} />
      <SectionRightSide sideData={sectionData.sectionRightData} />
      <ButtonPrimary />
    </div>
  );
};

export default Section;
