import React, { Component } from "react";
import fullpage from "fullpage.js";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./styles/App.scss";
import "./styles/Section.scss";
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
        sectionRightData: {
          id: 0,
          textOnBanner: [
            { line: "I am person who:" },
            { line: "1. Belive that everything is possible" },
            { line: "2. Learns and develops constantly" },
            { line: "3. Never give up because... (read point no 1)" }
          ]
        }
      },
      {
        sectionClass: "about-me",
        sectionLeftData: {
          id: 1,
          header: "About me",
          subheader: "Some words about me"
        },
        sectionRightData: { id: 1 }
      },
      {
        sectionClass: "resume",
        sectionLeftData: {
          id: 2,
          header: "Curiculum vitae",
          subheader: "Check my CV and e-CV in 2 language version"
        },
        sectionRightData: { id: 2 }
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
