"use strict";

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");
const nav = document.getElementById("nav");
const textBox = document.getElementById("text-box");

// Images
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

// Dark Mode
function darkMode() {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    textBox.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    image1.src = "img/undraw_proud_coder_dark.svg";
    image2.src = "img/undraw_feeling_proud_dark.svg";
    image3.src = "img/undraw_conceptual_idea_dark.svg";
}
// Light Mode
function lightMode() {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    textBox.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    image1.src = "img/undraw_proud_coder_light.svg";
    image2.src = "img/undraw_feeling_proud_light.svg";
    image3.src = "img/undraw_conceptual_idea_light.svg";
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Set the theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        darkMode();
    }
}
