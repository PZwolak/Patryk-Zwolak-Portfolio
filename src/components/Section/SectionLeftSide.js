import React from "react";

const SectionLeftSide = ({ sideData }) => {
  return (
    <div className="main-section__left-side">
      <div className="main-section__header">
        {sideData.id === 0 ? (
          <h1 className="fs-45 fw-600 ls-05">{sideData.header}</h1>
        ) : (
          <h2 className="fs-45 fw-600 ls-05">{sideData.header}</h2>
        )}
      </div>
      <div className="main-section__geometry-elements">
        <div className="main-section__geometry-element main-section__geometry-element--first"></div>
        <div className="main-section__geometry-element main-section__geometry-element--second"></div>
        <div className="main-section__geometry-element main-section__geometry-element--third"></div>
      </div>
      <div className="main-section__subheader">
        <p className="subheader">{sideData.subheader}</p>
      </div>
    </div>
  );
};

export default SectionLeftSide;
