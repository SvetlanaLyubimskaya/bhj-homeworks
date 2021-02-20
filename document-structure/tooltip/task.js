/*Данные для текста подсказки берутся из атрибута title

Процесс реализации
1. Реализуйте появление подсказки на основе положения текста
2. Показывайте подсказку при клике на элемент.*/

const messages = Array.from(document.querySelectorAll('.has-tooltip'));
console.log(messages);

const tooltip = document.createElement('div'); 
tooltip.classList.add('tooltip');

for (const message of messages) {
    message.addEventListener('click', (event) => {
        event.preventDefault(); // запрещаем переход по ссылке
        // console.log(message);

        message.appendChild(tooltip);

        if (tooltip.classList.contains('tooltip_active') && tooltip.textContent == message.getAttribute('title')) {
            tooltip.classList.remove('tooltip_active'); 
        } else {
            tooltip.classList.add('tooltip_active'); 
        } 

        tooltip.innerHTML = message.getAttribute('title');
        tooltip.style.top = message.getBoundingClientRect().bottom + 'px';
        tooltip.style.left = message.getBoundingClientRect().left + 'px';

        console.log(tooltip.textContent);
    });
}
