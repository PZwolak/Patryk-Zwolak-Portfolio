import React, { Component } from "react";
import "../../styles/Header.scss";
import HeaderHamburger from "./HeaderHamburger";
import HeaderInfo from "./HeaderInfo";
import HeaderEmpty from "./HeaderEmpty";

class Header extends Component {
  state = {
    hamburgerActive: false
  };

  handleHamburger = e => {
    e.preventDefault();
    this.setState({
      hamburgerActive: !this.state.hamburgerActive
    });
  };

  render() {
    const headerClass = ["header"];
    if (this.state.hamburgerActive) {
      headerClass.push("header--active");
    } else {
      headerClass.push("header--deactive");
      setTimeout(() => {
        document
          .querySelector("header.header")
          .classList.remove("header--deactive");
      }, 700);
    }
    return (
      <header className={headerClass.join(" ")}>
        <HeaderEmpty
          hamburgerActive={this.state.hamburgerActive}
          firstElement={true}
        />
        <HeaderHamburger
          handleHamburger={this.handleHamburger}
          hamburgerActive={this.state.hamburgerActive}
        />
        <HeaderInfo hamburgerActive={this.state.hamburgerActive} />
        <HeaderEmpty hamburgerActive={this.state.hamburgerActive} />
      </header>
    );
  }
}

export default Header;
