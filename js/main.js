"use strict";

let sliderBtns = [...document.querySelectorAll(".slider__btn")];
let slides = [...document.querySelectorAll(".slider__item")];
let sliderCounter = 0;

console.log(slides.length);

const slideElement = e => {
  let target = e.target;

  if (target.dataset.btn === "prevBtn") {
    if (sliderCounter === 0) {
      target.disabled = true;
      target.classList.add("inactive-btn");
    } else {
      sliderBtns.forEach(e => {
        e.disabled = false;
        e.classList.remove("inactive-btn");
      });
      slides[sliderCounter].classList.remove("active-slide");
      sliderCounter--;
      slides[sliderCounter].classList.add("active-slide");
    }
  } else if (target.dataset.btn === "nextBtn") {
    if (sliderCounter == slides.length - 1) {
      target.disabled = true;
      target.classList.add("inactive-btn");
    } else {
      sliderBtns.forEach(e => {
        e.disabled = false;
        e.classList.remove("inactive-btn");
      });
      slides[sliderCounter].classList.remove("active-slide");
      sliderCounter++;
      slides[sliderCounter].classList.add("active-slide");
    }
  }
};

sliderBtns.forEach(e => {
  e.addEventListener("click", slideElement);
});
