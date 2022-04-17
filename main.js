"use strict";
var body = document.querySelector("body");
var nav = document.querySelector("#boton");
var boton = document.querySelector("button");
nav.addEventListener("click", function () {
  if (body.className == "lightMode") {
    body.className = "darkMode";
    nav.className = "nav-dark";
    boton.className = "btn-dark";
  } else {
    body.className = "lightMode";
    nav.className = "nav-light";
    boton.className = "btn-light";
  }
});
