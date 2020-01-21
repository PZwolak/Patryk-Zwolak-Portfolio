import React from "react";

const AboutMeWho = () => {
  const aboutMe = {
    header: "Who I am",
    numberOfSection: "01"
  };
  return (
    <div className="container">
      <div className="about-me-who row">
        <div className="about-me-who__description col-7">bbbb</div>
        <div className="about-me-who__header col-5">
          <div className="about-me-who__header-text">{aboutMe.header}</div>
          <div className="about-me-who__header-number">
            {aboutMe.numberOfSection}
          </div>
          <div className="about-me-who__header-separator">-</div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeWho;
