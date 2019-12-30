import React from "react";
import "../../styles/Header.scss";
import Hamburger from "./Hamburger";
// import "../../styles/Header.scss";

class Header extends React.Component {
  state = {};

  handleHamburger = event => {
    console.log("elio");
    event.preventDefault();
    // document.querySelector(".menu-icon-wrapper").classList.toggle("open");
    // document.querySelector(".sidebar").classList.toggle("is-active");
  };

  render() {
    return (
      <header className="header">
        <div className="header__inner">
          <Hamburger hhh={this.handleHamburger} />
        </div>
      </header>
    );
  }
}

export default Header;
