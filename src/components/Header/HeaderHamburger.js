import React from "react";

const HeaderHamburger = props => {
  const headerHamburgerIconClass = ["header__hamburger-icon"];
  if (props.hamburgerActive)
    headerHamburgerIconClass.push("header__hamburger-active");
  return (
    <div className="header__hamburger">
      <div
        className={headerHamburgerIconClass.join(" ")}
        onClick={props.handleHamburger}
      >
        <svg width="1000px" height="1000px">
          <path
            className="header__hamburger-path1"
            d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
          ></path>
          <path
            className="header__hamburger-path2"
            d="M 300 500 L 700 500"
          ></path>
          <path
            className="header__hamburger-path3"
            d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
          ></path>
        </svg>
        <button className="header__hamburger-icon-button"></button>
      </div>
    </div>
  );
};

export default HeaderHamburger;
