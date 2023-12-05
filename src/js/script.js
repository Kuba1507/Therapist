const body = document.querySelector("body");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const headerImg = document.querySelector(".header__image-img");

const handleNav = () => {
	body.classList.toggle("disable-scroll");
	burgerBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("show-mobile");
};

const changeImage = () => {
	if (window.innerWidth >= 1050) {
		headerImg.src = "dist/img/header-img.jpg";
	} else {
		headerImg.src = "dist/img/header-img-mobile.jpg";
	}
};

burgerBtn.addEventListener("click", handleNav);
window.onload = changeImage;
window.onresize = changeImage;
