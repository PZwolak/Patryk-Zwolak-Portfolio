import React, { Component } from "react";
import Parallax from "parallax-js";
import "../../styles/ParallaxBackground.scss";

class ParallaxBackground extends Component {
  state = {};

  componentDidMount() {
    new Parallax(document.querySelector(".parallax-background"));
  }

  render() {
    return (
      <div className="parallax-background">
        <div
          className="parallax-background__elements"
          data-depth="1"
          data-invert-x
          data-invert-y
        >
          <div className="parallax-background__element parallax-background__element--first"></div>
        </div>
        <div className="parallax-background__elements" data-depth="0.9">
          <div className="parallax-background__element parallax-background__element--second"></div>
        </div>
        <div className="parallax-background__elements" data-depth="0.8">
          <div className="parallax-background__element parallax-background__element--third"></div>
        </div>
        <div className="parallax-background__elements" data-depth="0.7">
          <div className="parallax-background__element parallax-background__element--fourth"></div>
        </div>
        <div className="parallax-background__elements" data-depth="0.6">
          <div className="parallax-background__element parallax-background__element--fifth"></div>
        </div>
        <div className="parallax-background__elements" data-depth="0.5">
          <div className="parallax-background__element parallax-background__element--sixth"></div>
        </div>
      </div>
    );
  }
}

export default ParallaxBackground;
