import React, { Component } from "react";
import fullpage from "fullpage.js";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./styles/App.scss";
import "./styles/MainSection.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class App extends Component {
  state = {};

  static defaultProps = {
    data: [
      {
        sectionClass: "start-page",
        sectionLeftData: {
          id: 0,
          header: "Patryk Zwolak",
          subheader: "Front-end Developer"
        },
        sectionRightData: { id: 0, image: "PatrykZwolak" }
      },
      {
        sectionClass: "about-me",
        sectionLeftData: {
          id: 1,
          header: "Ariette Zwolakk",
          subheader: "Graphic Designer"
        },
        sectionRightData: { id: 1, image: "ArietteZwolak", pageNumber: "01" }
      }
    ]
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
    const displaySections = this.props.data.map(el => {
      return <Section key={el.sectionClass} sectionData={el} />;
    });
    return (
      <div className="App">
        <ParallaxBackground />
        <Header />
        <div className="main-section">{displaySections}</div>
      </div>
    );
  }
}

export default App;
