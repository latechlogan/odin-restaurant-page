import "./styles.css";
import "@fontsource/homemade-apple";
import "@fontsource/poppins";
import homeSection from "./home.js";
import aboutSection from "./about.js";
import menuSection from "./menu.js";

const contentOutput = document.querySelector("#content");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

function handleNavClick(e) {
  contentOutput.innerHTML = "";
  navLinks.forEach((link) => link.classList.remove("active"));
  switch (e.target.dataset.target) {
    case "Home":
      contentOutput.append(homeSection);
      navLinks[0].classList.add("active");
      break;
    case "About":
      contentOutput.append(aboutSection);
      navLinks[1].classList.add("active");
      break;
    case "Menu":
      contentOutput.append(menuSection);
      navLinks[2].classList.add("active");
      break;
    default:
      contentOutput.append(homeSection);
      navLinks[0].classList.add("active");
  }
}

function init() {
  contentOutput.append(homeSection);
  navLinks[0].classList.add("active");
  document.querySelector("nav").addEventListener("click", handleNavClick);
}

document.addEventListener("DOMContentLoaded", init);
