import SplitTextJS from "split-text-js";
import { TweenLite, TimelineMax, Linear, Back, Sine } from "gsap";

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    let ms = document.querySelectorAll(
      ".main-section:not(.main-section-subpage)"
    );
    if (ms.length > 0) {
      let flag = true;

      const textAnimationFunction = () => {
        let tl = new TimelineMax({ repeat: -1 });

        const firstText = new SplitTextJS(
          document.querySelector(
            ".main-section__right-side-inner-description-element--number-1"
          )
        ).chars;
        const secondText = new SplitTextJS(
          document.querySelector(
            ".main-section__right-side-inner-description-element--number-2"
          )
        ).chars;
        const thirdText = new SplitTextJS(
          document.querySelector(
            ".main-section__right-side-inner-description-element--number-3"
          )
        ).chars;
        tl.staggerFrom(
          firstText,
          0.03,
          { opacity: 0, ease: "expo.out" },
          0.05,
          "+=0.1"
        );

        tl.to(firstText, { duration: 0, delay: 5, opacity: 0 });
        tl.staggerFrom(
          secondText,
          0.03,
          { opacity: 0, ease: "expo.out" },
          0.05,
          "+=0.1"
        );
        tl.to(secondText, { duration: 0, delay: 5, opacity: 0 });
        tl.staggerFrom(
          thirdText,
          0.03,
          { opacity: 0, ease: "expo.out" },
          0.05,
          "+=0.1"
        );
        tl.to(thirdText, { duration: 0, delay: 5, opacity: 0 });
      };

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
        `.active .main-section__right-side-inner-description`,
        { opacity: 0 },
        { duration: 0.5, delay: 1.5, opacity: 1 }
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
            `.main-section__element.active:not(.fp-completely) .main-section__right-side-inner-description`,
            { opacity: 0 },
            { duration: 0.5, delay: 1.5, opacity: 1 }
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
      setTimeout(() => {
        // textAnimationFunction();
      }, 1400);

      window.addEventListener("wheel", () => {
        if (flag === true) {
          animateFunction();
          flag = !flag;
          setTimeout(() => {
            flag = true;
          }, 1000);
        }
      });
    }
  }
};
