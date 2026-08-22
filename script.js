const roles = [
    "Computer Science Student",
    "Full Stack Developer",
    "AI & Machine Learning",
    "Data Science & Analytics"
];

let roleIndex = 0;
const roleText = document.getElementById("role-text");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

if (new URLSearchParams(window.location.search).get("sent") === "1") {
    formStatus.textContent = "Thank you! Your message has been sent successfully.";
    formStatus.classList.add("success");
}

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

function setTheme(theme) {
    const isLight = theme === "light";
    document.body.classList.toggle("light-theme", isLight);
    themeToggle.textContent = isLight ? "🌙" : "☀️";
    themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}

setTheme(savedTheme || (prefersLightTheme ? "light" : "dark"));

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
});

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});

document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .education-card, .achievement-card"
).forEach((card) => {
    card.addEventListener("touchstart", () => {
        card.classList.add("touch-active");
        window.setTimeout(() => card.classList.remove("touch-active"), 350);
    }, { passive: true });
});

setInterval(() => {
    roleText.style.opacity = "0";

    setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleText.textContent = roles[roleIndex];
        roleText.style.opacity = "1";
    }, 400);

}, 2500);