import React from "react";

const HeaderInfo = props => {
  const headerInfoClass = ["header__info"];
  if (props.hamburgerActive) headerInfoClass.push("header__info--active");
  return (
    <div className={headerInfoClass.join(" ")}>
      <div className="header__info-inner"></div>
    </div>
  );
};

export default HeaderInfo;
