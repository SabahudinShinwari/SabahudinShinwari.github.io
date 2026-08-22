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