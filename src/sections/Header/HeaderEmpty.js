import React from "react";

const HeaderEmpty = props => {
  const headerEmptyClass = ["header__empty"];
  if (props.firstElement) headerEmptyClass.push("header__empty--first-element");
  if (props.hamburgerActive) headerEmptyClass.push("header__empty--active");
  return (
    <div className={headerEmptyClass.join(" ")}>
      <div className="header__empty-inner"></div>
    </div>
  );
};

export default HeaderEmpty;
