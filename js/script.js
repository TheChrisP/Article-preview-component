"use strict";

const personPart = document.querySelector(".personPart");
const sharePart = document.querySelector(".sharePart");
const btnPersonShowShare = document.querySelector(".btnPersonShowShare");
const btnPersonCloseShare = document.querySelector(".btnPersonCloseShare");
const btnShareClose = document.querySelector(".btnShareClose");

const showShare = function () {
  sharePart.classList.remove("hidden");
  sharePart.classList.remove("sm:hidden");
  personPart.classList.add("hidden");
  btnPersonShowShare.classList.add("hidden");
  btnPersonCloseShare.classList.remove("hidden");
};

const closeShareMobile = function () {
  sharePart.classList.add("hidden");
  personPart.classList.remove("hidden");
};

const closeShareDesktop = function () {
  btnPersonShowShare.classList.remove("hidden");
  btnPersonCloseShare.classList.add("hidden");
  personPart.classList.remove("hidden");
  sharePart.classList.add("hidden");
};

btnPersonShowShare.addEventListener("click", showShare);
btnPersonCloseShare.addEventListener("click", closeShareDesktop);
btnShareClose.addEventListener("click", closeShareMobile);
