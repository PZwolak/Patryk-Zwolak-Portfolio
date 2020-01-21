import React from "react";
import AboutMeWho from "./AboutMeWho";
import "../../../styles/App.scss";
import "../../../styles/Section.scss";
import "../../../styles/AboutMe.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

const AboutMe = ({ displaySections, section }) => {
  const oneSection = displaySections.filter(el => {
    // let sectionClass = `section main-section__element main-section__${displaySections.sectionClass}`;
    return el.key === section;
  });
  return (
    <>
      <div className="main-section main-section-subpage">
        <div className="main-section-subpage_inner">{oneSection}</div>
        <AboutMeWho />
      </div>
    </>
  );
};

export default AboutMe;
