let nav = document.querySelector(".header__nav");
let btn = document.querySelector(".header__elements__btn");
btn.addEventListener("click", function () {
  nav.classList.toggle("header__nav--closed");
  btn.classList.toggle("header__elements__btn--closed");
});
//Slider usando slick
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  });
});