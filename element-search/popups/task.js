// Процесс реализации
// В момент запуска скрипта, покажите окно #modal_main
// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
// По нажатию на элемент с классом show - success покажите окно #modal_success

"use strict";

const modalMain = document.getElementById('modal_main');
const modalActive = document.querySelector('.modal_active');

// закрытие активного окна. возвращает коллекцию элементов
const modalClose = document.querySelectorAll('.modal__close'); 
const modalCloseArr = Array.from(modalClose); // делаем массив из коллекции
console.log(modalCloseArr);

const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.querySelector('.show-success'); // По нажатию на элемент


for (const modalClose of modalCloseArr) { 
    modalClose.addEventListener('click', function () { 
        console.log('закрыть окно');

        // находим модальное окно
        let modal = document.querySelector('.modal__content').parentElement;

        modal.remove('modal_active'); 
        // modal.style.display = "none"; // тоже закрывает окно
    });
}

showSuccess.onclick = function () {
    console.log('сменить окно');

    modalMain.remove('modal_main'); // удаляет первое модальное окно
    modalSuccess.classList.add('modal_active'); // делаем активным другое окно
}