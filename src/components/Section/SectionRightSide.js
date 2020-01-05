import React from "react";

const SectionRightSide = ({ sideData }) => {
  let banner;
  if (sideData.textOnBanner) {
    banner = sideData.textOnBanner.map(el => {
      return <h3>aaaaaaa</h3>;
    });
  }
  // console.log(banner);
  // console.log(
  //   sideData.textOnBanner.forEach(el => {
  //     console.log(el.line);
  //   })
  // );
  // if (sideData.textOnBanner) {

  // }

  return (
    <div className="main-section__right-side">
      <div className="main-section__right-side-inner">
        <div className="main-section__right-side-inner-background-img">
          <div className="main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-11"></div>
          <div className="main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-5"></div>
          <div className="main-section__right-side-inner-background-description">
            {banner}
          </div>
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
