"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Function to update greeting
  function updateGreeting() {
      let today = new Date();
      let hourNow = today.getHours();
      let greeting;

      if (hourNow >= 18) {
          greeting = "Godaften";
      } else if (hourNow >= 15) {
          greeting = "Godeftermiddag";
        } else if (hourNow >= 11) {
          greeting = "Goddag";
      } else if (hourNow >= 5) {
          greeting = "Godmorgen";
      } else if (hourNow >= 0) {
          greeting = "Godnat";
      } else {
          greeting = "Velkommen";
      }

      let greetingMessageElement = document.getElementById("greetingMessage");

      if (greetingMessageElement) {
          greetingMessageElement.textContent = greeting;
      }

      // Schedule the next update after 1 minute
      setTimeout(updateGreeting, 60000); // 60000 milliseconds = 1 minute
  }

  // Initial call to start the update loop
  updateGreeting();
});

// Andet eksempel (billede slides)

const bodyElem = document.querySelector("body");

const slidesElem = document.querySelectorAll(".slide");

// targets set in the arrows
const leftBtn = document.querySelector("#left");

const rightBtn = document.querySelector("#right");

let activeSlide = 4;

// event click left
leftBtn.addEventListener("click", () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slidesElem.length - 1;
    }

    // remember to call the setActiveSlide() function
    setActiveSlide();
});

// event click right
rightBtn.addEventListener("click", () => {
    activeSlide++;

    if (activeSlide > slidesElem.length - 1) {
        activeSlide = 0;
    }

    // remember to call the setActiveSlide() function
    setActiveSlide();
});

function setActiveSlide() {
    slidesElem.forEach((elem) => elem.classList.remove('active'));

    slidesElem[activeSlide].classList.add('active');
}

// Initial call to set the initial active slide
setActiveSlide();