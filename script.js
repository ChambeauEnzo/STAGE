document.addEventListener('DOMContentLoaded', function () {
    const menuHamburger = document.querySelector(".menu-deroule");
    const navLinks = document.querySelector(".nav-links");

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-menu');
    });
});
