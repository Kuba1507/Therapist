const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");

const handleNav = () => {
	burgerBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("show-mobile");
};

burgerBtn.addEventListener("click", handleNav);
