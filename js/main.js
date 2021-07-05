let header__burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let nav__item = document.getElementsByClassName("nav__item");
let form__select = document.querySelector(".form__select");
let form__svg_arrow = document.querySelector(".form__svg_arrow");
let form__select_span = document.querySelector(".form__select_span");
header__burger.addEventListener(
    "click",
    () => {
        header__burger.classList.toggle('header__burger_active')
        if(header__burger.classList.contains("header__burger_active")){
            nav.classList.add("nav__active");
        }else{
            nav.classList.remove("nav__active");
        }
    }
)

form__select.addEventListener(
    "click",
    () => {
        form__svg_arrow.classList.toggle('form__svg_arrow_active')
    }
)

//form__select_span.innerHTML = 'lol';