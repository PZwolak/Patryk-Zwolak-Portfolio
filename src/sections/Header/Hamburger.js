import React from "react";

const Hamburger = props => {
  //   const btnEl = document.getElementById("menu-icon-trigger");
  //   btnEl.addEventListener("click", e => {
  //     e.preventDefault();
  //     document.querySelector(".menu-icon-wrapper").classList.toggle("open");
  //     document.querySelector(".sidebar").classList.toggle("is-active");
  //   });
  console.log(props.hhh);
  return (
    <>
      <div id="outer">
        <div
          id="menu-icon-wrapper"
          class="menu-icon-wrapper"
          onClick={props.hhh.handleHamburger}
        >
          <svg width="1000px" height="1000px">
            <path
              class="path1"
              d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"
            ></path>
            <path class="path2" d="M 300 500 L 700 500"></path>
            <path
              class="path3"
              d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"
            ></path>
          </svg>
          <button id="menu-icon-trigger" class="menu-icon-trigger"></button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
