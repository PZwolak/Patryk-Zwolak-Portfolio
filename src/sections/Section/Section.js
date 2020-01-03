import React from "react";
import SectionLeftSide from "./SectionLeftSide";
import SectionRightSide from "./SectionRightSide";

const Section = ({ sectionData }) => {
  console.log(sectionData);
  const sectionClass = `section main-section__element main-section__${sectionData.sectionClass}`;
  return (
    <div className={sectionClass}>
      <SectionLeftSide sideData={sectionData.sectionLeftData} />
      <SectionRightSide sideData={sectionData.sectionRightData} />
    </div>
  );
};

export default Section;
