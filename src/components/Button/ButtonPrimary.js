import React from "react";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";

const ButtonPrimary = ({ handleRightSide, sideData }) => {
  return (
    <div className="main-section__element-button primary-button">
      <span></span>
      <div className="mask">
        <div className="ring">
          <Link to={sideData.url} onClick={handleRightSide}></Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ButtonPrimary);
