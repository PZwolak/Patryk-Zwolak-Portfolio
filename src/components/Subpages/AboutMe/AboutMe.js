import React from "react";
import "../../../styles/App.scss";
import "../../../styles/Section.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

const AboutMe = ({ displaySections, section }) => {
  let sectionClass;
  const oneSectionn = displaySections.filter(el => {
    sectionClass = `section main-section__element main-section__${displaySections.sectionClass}`;
    return el.key === section;
  });
  console.log(oneSectionn[0]);
  return (
    <div>
      <div className="main-section main-section-subpage">{oneSectionn}</div>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>v<h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
      <h1>Elo</h1>
    </div>
  );
};

export default AboutMe;
