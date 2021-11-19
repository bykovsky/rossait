var slider = new Swiper(".slider", {
  pagination: {
    el: ".slider__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + "<span class='" + className + "-stroke'></span><span class='" + className + "-digit'>0" + (index + 1) + "</span></div>";
    },
  },
  navigation: {
    nextEl: ".slider__buttons .slider__button--next",
    prevEl: ".slider__buttons .slider__button--prev",
  },
});

let catalog = new Swiper(".catalog__slider", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: ".catalog-controls .catalog-controls__button--next",
    prevEl: ".catalog-controls .catalog-controls__button--prev",
  },
});
