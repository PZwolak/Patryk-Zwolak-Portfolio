import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import fullpage from "fullpage.js";
import ParallaxBackground from "./components/ParallaxBackground/ParallaxBackground";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import AboutMe from "./components/Subpages/AboutMe/AboutMe";
import "./styles/App.scss";
import "./styles/Section.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class App extends Component {
  state = {
    rightSideActive: false
  };

  static defaultProps = {
    data: [
      {
        sectionClass: "start-page",
        sectionLeftData: {
          id: 0,
          header: "Patryk Zwolak",
          subheader: "Front-end Developer",
          url: "/about-me"
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
          subheader: "Some words about me",
          url: "/about-me"
        },
        sectionRightData: { id: 1 }
      },
      {
        sectionClass: "resume",
        sectionLeftData: {
          id: 2,
          header: "Curiculum Vitae",
          subheader: "Check my CV and e-CV in 2 language version"
        },
        sectionRightData: { id: 2 }
      },
      {
        sectionClass: "projects",
        sectionLeftData: {
          id: 3,
          header: "Best Projects",
          subheader: "Greatest and best projects in many technologies"
        },
        sectionRightData: { id: 3 }
      },
      {
        sectionClass: "get-in-touch",
        sectionLeftData: {
          id: 4,
          header: "Get In Touch",
          email: "p.zwolak.93@gmail.com",
          phone: "+48798630903",
          linkedin: "https://www.linkedin.com/in/patryk-zwolak-5960a8164/",
          facebook: "https://www.facebook.com/patryk.zwolak.58"
        },
        sectionRightData: { id: 4 }
      }
    ]
  };

  sectionsData = {};

  componentDidMount() {
    new fullpage(".main-section:not(.main-section-subpage)", {
      // anchors: ["firstPage", "secondPage", "thirdPage"],
      navigation: true
      // navigationTooltips: ["Top Tier", "Middle Tier", "Bottom Tier"],
      // sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke"]
    });
    // fullpage.destroy("all");
  }

  handleRightSide = () => {
    setTimeout(() => {
      window.location.reload(false);
    }, 1);
  };

  render() {
    const displaySections = this.props.data.map(el => {
      return (
        <Section
          key={el.sectionClass}
          sectionData={el}
          handleRightSide={this.handleRightSide}
        />
      );
    });
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <>
                  <ParallaxBackground />
                  <Header />
                  <div className="main-section">{displaySections}</div>
                </>
              )}
            ></Route>
            <Route path="/about-me">
              <AboutMe displaySections={displaySections} section={"about-me"} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
