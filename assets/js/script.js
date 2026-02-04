const burguer = document.querySelector(".burgerIcon");
const navMenu = document.querySelector(".navBar__menu");

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});