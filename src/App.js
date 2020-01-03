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
    // data: {
    //   sectionLeftData: [
    //     { id: 1, header: "Patryk Zwolak", subheader: "Front-end Developer" },
    //     { id: 2, header: "Ariette Zwolak", subheader: "Graphic Designer" }
    //   ],
    //   sectionLeftData: [
    //     { id: 1, image: "PatrykZwolak", pageNumber: "00" },
    //     { id: 1, image: "ArietteZwolak", pageNumber: "00" }
    //   ]
    // },
    data: [
      {
        sectionClass: "start-page",
        sectionLeftData: {
          id: 1,
          header: "Patryk Zwolak",
          subheader: "Front-end Developer"
        },
        sectionRightData: { image: "PatrykZwolak", pageNumber: "00" }
      },
      {
        sectionClass: "about-me",
        sectionLeftData: {
          id: 2,
          header: "Ariette Zwolakk",
          subheader: "Graphic Designer"
        },
        sectionRightData: { image: "ArietteZwolak", pageNumber: "01" }
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
    console.log(this.props.data);
    const displaySections = this.props.data.map(el => {
      return <Section key={el.sectionClass} sectionData={el} />;
    });
    console.log(displaySections);
    return (
      <div className="App">
        <ParallaxBackground />
        <Header />
        <div className="main-section">
          {displaySections}
          {/* <Section />

          <div className="section main-section__element">
            Some sectionassdasd
          </div>
          <div className="section main-section__element">
            Some sectioasdasdn
          </div>
          <div className="section main-section__element">
            Some sectioasdasdn */}
        </div>
      </div>
    );
  }
}

export default App;
