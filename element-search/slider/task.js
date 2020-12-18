/* Процесс реализации
1. Установите обработчики события click на элементах «Влево» и «Вправо»
2. При смене слайдов учитывайте, что навигация должна быть бесконечной. 
То есть, смена крайнего левого слайда должна перекидывать к крайнему 
правому и наоборот.
В решении старайтесь делать разделение кода. 
Регистрация обработчиков отдельно, управление слайдером отдельно.
*/

"use strict";

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшает индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Основная функция слайдера */
function showSlides(n) {
    let slides = document.getElementsByClassName("slider__item");
    
    if (n > slides.length) { 
        slideIndex = 1; // показываем первый слайд
    }

    if (n < 1) {
        slideIndex = slides.length; // делаем навигацию бесконечной
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
}

sliderArrowPrev.onclick = minusSlide; // функция записывается в перем без скобок
sliderArrowNext.onclick = plusSlide; // записываем функцию в перем без скобок

