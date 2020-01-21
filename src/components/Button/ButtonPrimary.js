import React from "react";
import { withRouter, useParams } from "react-router";
import { Link } from "react-router-dom";

const ButtonPrimary = ({ handleRightSide, sideData }) => {
  return sideData.url !== undefined ? (
    <div className="main-section__element-button primary-button">
      <span></span>
      <div className="mask">
        <div className="ring">
          <Link
            to={window.location.pathname !== "/" ? "" : sideData.url}
            onClick={handleRightSide}
          ></Link>
        </div>
      </div>
    </div>
  ) : null;
};

export default withRouter(ButtonPrimary);
