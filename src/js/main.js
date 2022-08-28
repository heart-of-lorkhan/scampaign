import scrollToSmooth from "../../node_modules/scrolltosmooth/dist/scrolltosmooth.esm";

import scrollHeader from "./scrollHeader";
import { slider } from "./slider";

window.addEventListener(
  "load",
  () => {
    scrollHeader();

    const scrollButtons = document.querySelectorAll("[data-scrollto]");

    let smoothScroll = new scrollToSmooth("button", {
      targetAttribute: "data-scrollto",
      duration: 1000,
      offset: "#header-top",
      onScrollStart: () => {
        scrollButtons.forEach((button) => button.blur());
      },
    });

    smoothScroll.init();

    const scrollspyElements = document.querySelectorAll("[data-scrollspy]");

    function isAnyPartOfElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      const vertInView =
        rect.top <= windowHeight && rect.top + rect.height >= 0;
      const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;

      return vertInView && horInView;
    }

    window.addEventListener("scroll", () => {
      scrollspyElements.forEach((element) => {
        if (isAnyPartOfElementInViewport(element)) {
          const animationClass = element.dataset.scrollspy;
          element.classList.add("animate__animated");
          element.classList.add(animationClass);
        }
      });
    });

    scrollspyElements.forEach((element) => {
      if (isAnyPartOfElementInViewport(element)) {
        const animationClass = element.dataset.scrollspy;
        element.classList.add("animate__animated");
        element.classList.add(animationClass);
      }
    });

    slider();
  },
  false
);
