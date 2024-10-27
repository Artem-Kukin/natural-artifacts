
const mobileButton = document.querySelector(".mobile-btn");
const navigation = document.querySelector(".header__nav");

mobileButton.addEventListener("click", () => {
    navigation.classList.toggle("mobile-nav");
    mobileButton.classList.toggle("is-active");
})