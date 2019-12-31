import React from "react";
import fullpage from "fullpage.js";
import ParallaxBackground from "./sections/ParallaxBackground/ParallaxBackground";
import Header from "./sections/Header/Header";
import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";

function App() {
  return (
    <div className="App">
      <ParallaxBackground />
      <Header />
    </div>
  );
}

export default App;
