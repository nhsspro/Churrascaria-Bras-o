document.addEventListener("DOMContentLoaded", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");

    navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
    });
});
