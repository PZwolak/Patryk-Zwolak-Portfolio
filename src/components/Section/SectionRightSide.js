import React from "react";

const SectionRightSide = ({ sideData }) => {
  let banner;
  if (sideData.textOnBanner) {
    banner = sideData.textOnBanner.map((el, index) => {
      return (
        <div
          key={el.line}
          className="main-section__right-side-inner-description-element"
        >
          <h3
            className={`main-section__right-side-inner-description-element--number-${index} fw-500`}
          >
            {el.line}
          </h3>
        </div>
      );
    });
  }

  return (
    <div className="main-section__right-side">
      <div className="main-section__right-side-inner">
        <div className="main-section__right-side-inner-background-img">
          <div className="main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-11"></div>
          <div className="main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-5"></div>
          <div className="main-section__right-side-inner-background-mask"></div>
          <div
            className={`main-section__right-side-inner-background-img main-section__right-side-inner-background-img--${sideData.id}`}
          ></div>
        </div>
        <div className="main-section__right-side-inner-number">
          <span className="numbers">{"0" + (sideData.id + 1)}</span>
        </div>
        <div className="main-section__right-side-inner-description">
          {banner}
        </div>
      </div>
    </div>
  );
};

export default SectionRightSide;
