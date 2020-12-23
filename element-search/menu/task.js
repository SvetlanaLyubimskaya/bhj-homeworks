/* Процесс реализации
1. Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link
2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
В решении необходимо использовать методы, изученные на занятии, 
работы с ручной подстановкой индексов массива приниматься не будут. 
Необходимые методы указаны в "Подсказках"
*/
"use strict";

const menuLink = document.querySelectorAll('.menu__link');
const menuLinkArr = Array.from(menuLink);
console.log(menuLinkArr);

for (const link of menuLinkArr) {
    link.addEventListener('click', showList);
}

function showList(event) { // в саму функцию обработчик следует добавить аргумент
    console.log('клик!');

    const menuSub = this.parentElement.querySelector('.menu_sub');
    
    if (menuSub != null) {
        event.preventDefault(); // и у него вызывать метод отмены стандартного поведения браузера
        menuSub.classList.toggle('menu_active');
    }

}
