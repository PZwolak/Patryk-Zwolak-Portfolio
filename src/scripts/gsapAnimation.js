import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // gsap.fromTo(".active .main-section__header", {xPercent: -100,}, {duration: 1, xPercent: 100});
    let flag = true;

    TweenLite.from(`.active .main-section__header`, {
      duration: 1,
      x: "-300%",
      ease: "expo.out"
    });
    TweenLite.to(".active .main-section__header", {
      duration: 1,
      x: 0,
      ease: "expo.out"
    });

    const animateFunction = () => {
      TweenLite.from(`.active:not(.fp-completely) .main-section__header`, {
        x: "-300%"
      });
      TweenLite.to(`.active:not(.fp-completely) .main-section__header`, {
        duration: 1,
        x: 0,
        ease: "expo.out"
      });

      TweenLite.from(
        `.active:not(.fp-completely) .main-section__geometry-element--first`,
        {
          x: "-300%"
        }
      );
      TweenLite.to(
        `.active:not(.fp-completely) .main-section__geometry-element--first`,
        {
          duration: 1,
          x: 0,
          ease: "expo.out",
          delay: 1
        }
      );
    };

    window.addEventListener("wheel", () => {
      if (flag === true) {
        animateFunction();
        flag = !flag;
      }
      setTimeout(() => {
        flag = true;
      }, 1000);
    });
  }
};
