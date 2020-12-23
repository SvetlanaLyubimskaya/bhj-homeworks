/* Процесс реализации
1. Установите обработчики события click на элементах «Влево» и «Вправо»
2. При смене слайдов учитывайте, что навигация должна быть бесконечной. 
То есть, смена крайнего левого слайда должна перекидывать к крайнему 
правому и наоборот.
В решении старайтесь делать разделение кода. 
Регистрация обработчиков отдельно, управление слайдером отдельно.
*/

/*
1. Получить массив слайдов один раз со страницы (а не при каждом клике обращаться к DOM)
2. Из этого массива с помощью findIndex вы можете найти один активный слайд
(точнее его позицию)
3. Затем по найденной позиции у слайда необходимо убрать класс активности.
4. После деактивации слайда вам нужно назначить новую позицию.
Эта новая позиция должна основываться на кликнутой стрелки и позиции активного слайда.
Тоесть вы должны выставлять либо соседний слайд либо крайний
(чтобы слайдер двигался по кругу)
5. И после назначения новой позиции, необходимо активировать новый слайд
(добавив ему класс активности).
В таком подходе у вас не будет ни циклов, ни переменной индекса слайда.
*/

"use strict";

const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');

const sliderItems = document.getElementsByClassName('slider__item');
const sliderItemsArr = Array.from(sliderItems);
console.log(sliderItemsArr);

let foundIndex = sliderItemsArr.findIndex(el => el.className === 'slider__item slider__item_active');
console.log(foundIndex);
let i = foundIndex;

sliderArrowPrev.onclick = function() {

    console.log(`активный слайд ${i}`);
    sliderItemsArr[i].classList.remove('slider__item_active'); //п.3
    i--;//п.4

    if (i === -1) {
        i = sliderItemsArr.length - 1;
    }

    console.log(`След слайд ${i}`);
    sliderItemsArr[i].classList.add('slider__item_active'); //п.5

}

sliderArrowNext.onclick = function() {

    console.log(`Активный слайд ${i}`);
    sliderItemsArr[i].classList.remove('slider__item_active'); //п.3
    i++; //п.4

    if (i === sliderItemsArr.length) {
        i = foundIndex;
    }

    console.log(`След слайд ${i}`);
    sliderItemsArr[i].classList.add('slider__item_active'); //п.5

}


// const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
// const sliderArrowNext = document.querySelector('.slider__arrow_next');

// /* Индекс слайда по умолчанию */
// let slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующий слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшает индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     let slides = document.getElementsByClassName("slider__item");

//     if (n > slides.length) { 
//         slideIndex = 1; // показываем первый слайд
//     }

//     if (n < 1) {
//         slideIndex = slides.length; // делаем навигацию бесконечной
//     }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }

// sliderArrowPrev.onclick = minusSlide; // функция записывается в перем без скобок
// sliderArrowNext.onclick = plusSlide; // записываем функцию в перем без скобок
