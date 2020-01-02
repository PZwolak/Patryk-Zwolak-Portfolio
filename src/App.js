import React, { Component } from "react";
import fullpage from "fullpage.js";
import ParallaxBackground from "./sections/ParallaxBackground/ParallaxBackground";
import Header from "./sections/Header/Header";
import Section from "./sections/Section/Section";
import "./styles/App.scss";
import "./styles/MainSection.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class App extends Component {
  state = {};

  static defaultProps = {
    data: {
      sectionLeftData: [
        { id: 1, header: "Patryk Zwolak", subheader: "Front-end Developer" },
        { id: 2, header: "Ariette Zwolak", subheader: "Graphic Designer" }
      ],
      sectionLeftData: [
        { id: 1, image: "PatrykZwolak", pageNumber: "00" },
        { id: 1, image: "ArietteZwolak", pageNumber: "00" }
      ]
    }
  };

  sectionsData = {};

  componentDidMount() {
    new fullpage(".main-section", {
      // anchors: ["firstPage", "secondPage", "thirdPage"],
      navigation: true
      // navigationTooltips: ["Top Tier", "Middle Tier", "Bottom Tier"],
      // sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke"]
    });
  }
  render() {
    console.log(this.props.data);
    // const displaySections = this.props.data
    return (
      <div className="App">
        <ParallaxBackground />
        <Header />
        <div className="main-section">
          <Section />

          <div className="section main-section__element">
            Some sectionassdasd
          </div>
          <div className="section main-section__element">
            Some sectioasdasdn
          </div>
          <div className="section main-section__element">
            Some sectioasdasdn
          </div>
        </div>
      </div>
    );
  }
}

export default App;
