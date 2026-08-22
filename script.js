const roles = [
    "Computer Science Student",
    "Full Stack Developer",
    "AI & Machine Learning",
    "Data Science & Analytics"
];

let roleIndex = 0;
const roleText = document.getElementById("role-text");

setInterval(() => {
    roleText.style.opacity = "0";

    setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleText.textContent = roles[roleIndex];
        roleText.style.opacity = "1";
    }, 400);

}, 2500);