import React from "react";
import fullpage from "fullpage.js";
import ParallaxBackground from "./sections/ParallaxBackground/ParallaxBackground";
import Header from "./sections/Header/Header";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

class App extends React.Component {
  state = {};
  componentDidMount() {
    new fullpage("#fullpage", {
      //options
      sectionsColor: ["#f2f2f2", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"]
    });
  }
  render() {
    return (
      <div className="App">
        <ParallaxBackground />
        <Header />
        <div id="fullpage">
          <div class="section">Some section</div>
          <div class="section">Some section</div>
          <div class="section">Some section</div>
          <div class="section">Some section</div>
        </div>
      </div>
    );
  }
}

export default App;
