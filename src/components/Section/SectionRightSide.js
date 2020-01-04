import React from "react";

const SectionRightSide = ({ sideData }) => {
  return (
    <div className="main-section__right-side">
      <div className="main-section__right-side-inner">
        <div className="main-section__right-side-inner-background-img">
          <div className="main-section__right-side-inner-background-mask"></div>
          <div
            className={`main-section__right-side-inner-background-img main-section__right-side-inner-background-img--${sideData.id}`}
          ></div>
        </div>
        <div className="main-section__right-side-inner-number">
          <span className="numbers">{"0" + (sideData.id + 1)}</span>
        </div>
      </div>
    </div>
  );
};

export default SectionRightSide;
