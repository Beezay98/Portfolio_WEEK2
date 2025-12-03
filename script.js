
const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

function toggleMenu() {
    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.innerHTML = isOpen ? "✕" : "☰";
}


menuButton.addEventListener("click", toggleMenu);


navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
            toggleMenu();
        }
    });
});

    
const form = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;

    if (nameValue === "" || emailValue === "") {
        messageDiv.textContent = "Please fill out all required fields.";
        messageDiv.style.color = "red";
    } else {
        messageDiv.textContent = "Thank you! Your message has been sent.";
        messageDiv.style.color = "lightgreen";
        form.reset();
    }
});
