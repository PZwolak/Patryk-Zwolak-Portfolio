import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    // gsap.fromTo(".active .main-section__header", {xPercent: -100,}, {duration: 1, xPercent: 100});
    let flag = true;

    TweenLite.fromTo(
      `.active .main-section__header`,
      { x: -1000 },
      { x: 0, duration: 1, delay: 0.5, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__geometry-element--first`,
      { x: -1000 },
      { x: 0, duration: 1, delay: 0.6, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__geometry-element--second`,
      { x: -1000 },
      { x: 0, duration: 1, delay: 0.7, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__geometry-element--third`,
      { x: -1000 },
      { x: 0, duration: 1, delay: 0.8, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__subheader`,
      { x: -1000 },
      { x: 0, duration: 1, delay: 1, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__right-side-inner-number`,
      { y: 500 },
      { y: 0, duration: 1, delay: 1.2, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__element-button.primary-button`,
      { x: 500 },
      { x: 0, duration: 1, delay: 1.4, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__right-side-inner-background-img`,
      { y: -2000 },
      { y: 0, duration: 0.5, delay: 0.4, ease: "expo.out" }
    );

    TweenLite.fromTo(
      `.active .main-section__right-side-inner-background-mask--color-5`,
      { x: 0 },
      { x: 1000, duration: 2, delay: 1, ease: "expo.out" }
    );
    TweenLite.fromTo(
      `.active .main-section__right-side-inner-background-mask--color-11`,
      { x: 0 },
      { x: 1000, duration: 1.2, delay: 1.2, ease: "expo.out" }
    );

    // const animateOutFunction = () => {
    //   if (
    //     document.querySelector(
    //       `.main-section__element.fp-completely:not(.active)`
    //     )
    //   ) {
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__header`,
    //       { x: 0 },
    //       { x: -1000, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__geometry-element--first`,
    //       { x: 0 },
    //       { x: -1000, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__geometry-element--second`,
    //       { x: 0 },
    //       { x: -1000, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__geometry-element--third`,
    //       { x: 0 },
    //       { x: -1000, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__subheader`,
    //       { x: 0 },
    //       { x: -1000, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__right-side-inner-number`,
    //       { y: 0 },
    //       { y: 500, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__element-button.primary-button`,
    //       { x: 0 },
    //       { x: 500, duration: 1.5, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__right-side-inner-background-img`,
    //       { y: 0 },
    //       { y: -2000, duration: 0.75, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__right-side-inner-background-mask--color-5`,
    //       { x: 1000 },
    //       { x: 0, duration: 3, ease: "expo.out" }
    //     );
    //     TweenLite.fromTo(
    //       `.main-section__element.fp-completely:not(.active) .main-section__right-side-inner-background-mask--color-11`,
    //       { x: 1000 },
    //       { x: 0, duration: 1.5, ease: "expo.out" }
    //     );
    //   }
    // };

    const animateFunction = () => {
      if (
        document.querySelector(
          `.main-section__element.active:not(.fp-completely)`
        )
      ) {
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__header`,
          { x: -1000 },
          { x: 0, duration: 1, delay: 0.5, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__geometry-element--first`,
          { x: -1000 },
          { x: 0, duration: 1, delay: 0.6, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__geometry-element--second`,
          { x: -1000 },
          { x: 0, duration: 1, delay: 0.7, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__geometry-element--third`,
          { x: -1000 },
          { x: 0, duration: 1, delay: 0.8, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__subheader`,
          { x: -1000 },
          { x: 0, duration: 1, delay: 1, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__right-side-inner-number`,
          { y: 500 },
          { y: 0, duration: 1, delay: 1.2, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__element-button.primary-button`,
          { x: 500 },
          { x: 0, duration: 1, delay: 1.4, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-img`,
          { y: -2000 },
          { y: 0, duration: 0.5, delay: 0.4, ease: "expo.out" }
        );

        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-5`,
          { x: 0 },
          { x: 1000, duration: 2, delay: 1, ease: "expo.out" }
        );
        TweenLite.fromTo(
          `.main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-11`,
          { x: 0 },
          { x: 1000, duration: 1.2, delay: 1.2, ease: "expo.out" }
        );
      }
    };

    window.addEventListener("wheel", () => {
      if (flag === true) {
        animateFunction();
        // animateOutFunction();
        flag = !flag;
        setTimeout(() => {
          flag = true;
        }, 1000);
      }
    });
  }
};
