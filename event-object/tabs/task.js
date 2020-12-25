// Для того, чтобы вкладка была выбранной, 
// у элемента с классом tab должен быть класс tab_active:
/*
Для удобного нахождения индекса вкладки, 
можно использовать метод indexOf в найденном массиве 
вкладок.tab.Найденный индекс можно использовать для 
показа нужного содержимого.tab__content

Процесс реализации
1. Зарегистрируйте обработчики событий на переключателях вкладок
2. Сделайте акцент на том, что таких механизмов переключения 
может быть несколько на странице*/

const tab = document.querySelectorAll('.tab');
const tabArr = Array.from(tab);
console.log(tabArr);

const tabContent = document.querySelectorAll('.tab__content');

// console.log(tab);
// console.log(tabContent);


for (const tab of tabArr) {
    tab.addEventListener('click', function() {
        console.log('клик');

        const tabActive = document.querySelector('.tab_active');
        const tabContentActive = document.querySelector('.tab__content_active');

        tabActive.classList.remove('tab_active'); //удаляем активный класс
        tabContentActive.classList.remove('tab__content_active'); //удаляем активный класс

        tab.classList.add('tab_active'); //добавляем активный класс

        let indexTab = tabArr.indexOf(tab); // находим индекс tab
        console.log(indexTab);

        tabContent[indexTab].classList.add('tab__content_active');

    });
}
