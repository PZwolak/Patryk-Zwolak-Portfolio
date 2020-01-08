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
        {sideData.subheader ? (
          <p className="subheader fw-200">{sideData.subheader}</p>
        ) : (
          <>
            <a className="fw-200" href={`mailto:${sideData.email}`}>
              <span>{sideData.email}</span>
            </a>
            <a className="fw-200" href={`tel:${sideData.phone}`}>
              <span>{sideData.phone}</span>
            </a>
            <a
              className="socials socials--linkedin"
              href={sideData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div></div>
            </a>
            <a
              className="socials socials--facebook "
              href={sideData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div></div>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionLeftSide;
