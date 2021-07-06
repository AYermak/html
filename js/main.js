let header__burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let nav__item = document.getElementsByClassName("nav__item");
let form__select = document.querySelector(".form__select");
let form__svg_arrow = document.querySelector(".form__svg_arrow");
let form__select_span_1 = document.querySelector(".form__select_span_1");
let form__select_span_2 = document.querySelector(".form__select_span_2");
let form__select_item = document.getElementsByClassName("form__select_item");
let form__select_input_year_hidden = document.querySelector(".form__select_input_year_hidden");

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
        if(form__select_span_2.innerHTML == ""){
            form__select_span_1.classList.toggle("form__select_span_1_active");

        }
    }
)

for(let i = 0; i < form__select_item.length; i++){
    form__select_item[i].addEventListener(
        'click',
        () => {
            //console.log(form__select_item[i].innerHTML);
            form__select_span_2.style.color = "black";
            form__select_span_2.classList.add("form__select_span_2_active");
            form__select_span_2.innerHTML = form__select_item[i].innerHTML;
            form__select_input_year_hidden.value = form__select_span_2.innerHTML;
        }
    )
}
