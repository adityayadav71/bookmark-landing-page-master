"use strict";

// Accordion
const expandBtn = document.getElementsByClassName("question");
const answer = document.getElementsByClassName("answer");

for (let i = 0; i < expandBtn.length; i++) {
  expandBtn[i].addEventListener("click", function () {
    const answerPanel = this.nextElementSibling;
    if (answerPanel.style.display === "block") {
      answerPanel.style.display = "none";
    } else {
      answerPanel.style.display = "block";
    }
  });
}

// Features
const featureBtn = document.getElementsByClassName("feature-content");
const feature = document.getElementsByClassName("feature");
for (let i = 0; i < featureBtn.length; i++) {
  featureBtn[i].addEventListener("click", function () {
    this.classList.add("feature-on");
    feature[i].classList.remove("hidden-tab");
  });
  for (let j = 0; j < featureBtn.length; j++) {
    if (j != i) {
      featureBtn[j].addEventListener("click", function () {
        featureBtn[i].classList.remove("feature-on");
        featureBtn[j].classList.add("feature-on");
        feature[i].classList.add("hidden-tab");
      });
    }
  }
}

// Email Error
// const input = document.querySelector(".email");
// const contactBtn = document.querySelector(".contact-us-btn");

// contactBtn.addEventListener("click", function () {
//   if (!input.validity.typeMismatch) {
//     document.querySelector(".email-pseudo").classList.toggle("error");
//   }
// });
