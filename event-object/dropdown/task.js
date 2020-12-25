/*
В элементе с классом dropdown__value содержится выбранное значение.

Нажатие на элемент с классом dropdown__item при открытом списке должно:
1. Закрывать список
2. Устанавливать новое значение в элемент с классом dropdown__value
Процесс реализации
1. Сделайте сворачивание / разворачивание списка по нажатию на кнопку
2. Сделайте замену значения по выбору соответствующего пункта меню
3. Предусмотрите случай, когда на странице может одновременно находиться несколько таких кнопок
4. Не забывайте запрещать переход по ссылке
*/
'use strict';

const dropdownList = document.querySelector('.dropdown__list');
let dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
// const dropdownLink = document.querySelectorAll('.dropdown__link')
const dropdownItemArr = Array.from(dropdownItem);
const dropdownListArr = Array.from(dropdownList);


dropdownValue.onclick = showList;

function showList() {
    console.log('клик');
    dropdownList.classList.toggle('dropdown__list_active');
}

for (const dropdownItem of dropdownItemArr) {
    dropdownItem.addEventListener('click', elemLink)
}

function elemLink(event) {
    console.log('другой элемент');
  
    console.log(event.target.textContent);
    let elem = event.target.textContent;

    event.preventDefault(); // запрещаем переход по ссылке

    dropdownValue.textContent = elem; // записываем выбранное значение

    showList();
}
