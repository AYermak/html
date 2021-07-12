let header__burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let nav__item = document.getElementsByClassName("nav__item");
let form__select = document.querySelector(".form__select");
let form__svg_arrow = document.querySelector(".form__svg_arrow");
let form__select_span_1 = document.querySelector(".form__select_span_1");
let form__select_span_2 = document.querySelector(".form__select_span_2");
let form__select_item = document.getElementsByClassName("form__select_item");
let form__select_input_year_hidden = document.querySelector(".form__select_input_year_hidden");
let form__range_dot = document.querySelector(".form__range_dot");
let form__range = document.querySelector(".form__range");



//Menu 
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
//Select click active
form__select.addEventListener(
    "click",
    () => {
        form__svg_arrow.classList.toggle('form__svg_arrow_active')
        if(form__select_span_2.innerHTML == ""){
            form__select_span_1.classList.toggle("form__select_span_1_active");

        }
    }
)
//Select item click active
for(let i = 0; i < form__select_item.length; i++){
    form__select_item[i].addEventListener(
        'click',
        () => {
            form__select_span_2.style.color = "black";
            form__select_span_2.classList.add("form__select_span_2_active");
            form__select_span_2.innerHTML = form__select_item[i].innerHTML;
            form__select_input_year_hidden.value = form__select_span_2.innerHTML;
        }
    )
}

//Helper
document.addEventListener(
    "click",
    (e) => {
        
        if(!form__select.contains(e.target) && form__svg_arrow.classList.contains('form__svg_arrow_active') ){
            form__svg_arrow.classList.remove('form__svg_arrow_active')
            if(form__select_span_2.innerHTML == ""){
                form__select_span_1.classList.remove("form__select_span_1_active");
            }
        }
    }
)

let status = false;

form__range_dot.addEventListener(
    "mousedown",
    () => {
        status = true;
    }
)
document.addEventListener(
    "mouseup",
    () => {
        status = false;
    }
)

document.addEventListener(
    "mousemove",
    (e) => {

        if(status && e.clientX - form__range.getBoundingClientRect().left > 0 && e.clientX - form__range.getBoundingClientRect().right < 0){
            form__range_dot.style.left = e.clientX - form__range.getBoundingClientRect().left - form__range_dot.offsetWidth / 2  + 'px';
        }
    }
)
