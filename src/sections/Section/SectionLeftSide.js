import React from "react";

const SectionLeftSide = ({ sideData }) => {
  return (
    <div className="main-section__left-side">
      <div className="main-section__title">
        {sideData.id === 1 ? (
          <h1>{sideData.header}</h1>
        ) : (
          <h2>{sideData.header}</h2>
        )}
      </div>
    </div>
  );
};

export default SectionLeftSide;
