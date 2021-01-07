const body = document.body;
const buttonMenu = document.querySelector(".button-menu");
const headerUl = document.querySelector(".header ul");
const linkMenu = document.querySelectorAll(".header ul li");

const openMenu = (event) => {
  event.currentTarget.classList.toggle("active");
  headerUl.classList.toggle("active");
  body.classList.toggle("active");
};

buttonMenu.addEventListener("click", openMenu);

const closeMenu = (event) => {
  buttonMenu.classList.remove("active");
  headerUl.classList.remove("active");
  body.classList.remove("active");
};

linkMenu.forEach(item => {
  item.addEventListener("click", closeMenu);
});