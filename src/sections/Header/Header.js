import React from "react";
import "../../styles/Header.scss";
import HeaderHamburger from "./HeaderHamburger";
import HeaderInfo from "./HeaderInfo";
import HeaderEmpty from "./HeaderEmpty";

class Header extends React.Component {
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
    return (
      <header className="header">
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
