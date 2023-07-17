"use strict";

const card = document.querySelector("section");
const title = document.querySelectorAll("h5");
const text = document.querySelectorAll("p");
const icons = document.querySelectorAll(".image-c svg");
const items = document.querySelectorAll(".item");
const buttons = document.querySelectorAll("button svg");
const footer = document.querySelector(".footer a");

buttons[0].addEventListener("click", function () {
  buttons[1].style.display = "block";
  this.style.display = "none";

  document.body.style.backgroundColor = "#000000e6";
  card.style.backgroundColor = "#00000099";

  footer.style.color = "#cdd4dc";
  title.forEach((t) => (t.style.color = "#cdd4dc"));
  text.forEach((t) => (t.style.color = "#cdd4dc"));
  icons.forEach((icon) => (icon.style.fill = "#cdd4dc"));

  // hover effects to dark
  items.forEach((item) => {
    item.classList.remove("disableDark");
    item.classList.add("enableDark");
  });
});

buttons[1].addEventListener("click", function () {
  buttons[0].style.display = "block";
  this.style.display = "none";

  document.body.style.backgroundColor = "#e9ecef";
  card.style.backgroundColor = "#fff";

  footer.style.color = "#343a40";
  title.forEach((t) => (t.style.color = "#343a40"));
  text.forEach((t) => (t.style.color = "#343a40"));
  icons.forEach((icon) => (icon.style.fill = "#343a40"));

  // hover effects to light
  items.forEach((item) => {
    item.classList.remove("enableDark");
    item.classList.add("disableDark");
  });
});

// hover effects Default
items.forEach((item) => {
  item.classList.remove("enableDark");
  item.classList.add("disableDark");
});
