import Swiper from "../../node_modules/swiper/swiper-bundle";

export const slider = () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1.2,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        centeredSlides: true,
      },

      640: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1024: {
        slidesPerView: 3,
      },

      1366: {
        slidesPerView: 4,
        spaceBetween: 10,
        draggable: false,
        allowTouchMove: false,
        loop: false,
        navigation: false,
        pagination: false,
      },
    },
  });
};
