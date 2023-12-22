// JavaScript to toggle the menu on small screens
const menuIcon = document.getElementById("menu-icon");
const navList = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("show");
});

// JavaScript to handle page transitions
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPage = e.target.getAttribute("href");

        // Fade out current page
        document.body.style.opacity = 0;

        setTimeout(() => {
            // Load the new page
            window.location.href = targetPage;
        }, 500); // Adjust the delay as needed
    });
});
