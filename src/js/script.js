const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

const handleNav = () => {
	body.classList.toggle("disable-scroll");
	burgerBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("show-mobile");
};

burgerBtn.addEventListener("click", handleNav);
