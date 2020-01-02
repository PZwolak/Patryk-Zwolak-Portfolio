import React from "react";
import SectionLeftSide from "./SectionLeftSide";
import SectionRightSide from "./SectionRightSide";

const Section = () => {
  return (
    <div className="section main-section__element">
      <SectionLeftSide />
      <SectionRightSide />
    </div>
  );
};

export default Section;
