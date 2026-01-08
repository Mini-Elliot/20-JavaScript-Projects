"use strict";
const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function toggleNav() {
    menuBars.classList.toggle("change");
    // Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
    // Animate In - Overlay
    if (overlay.classList.contains("overlay-active")) {
        overlay.classList.remove("overlay-slide-left");
        overlay.classList.add("overlay-slide-right");
        navItems.forEach((element, index) => {
            element.classList.add(`slide-in-${index + 1}`);
            element.classList.remove(`slide-out-${index + 1}`);
        });
    } else {
        overlay.classList.remove("overlay-slide-right");
        overlay.classList.add("overlay-slide-left");
        navItems.forEach((element, index) => {
            element.classList.remove(`slide-in-${index + 1}`);
            element.classList.add(`slide-out-${index + 1}`);
        });
    }
}

menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});
