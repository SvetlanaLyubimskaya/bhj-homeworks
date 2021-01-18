/*Процесс реализации
1. Реализуйте открытие окна чата при нажатии на красный боковой бэйдж +
2. По нажатию Enter, реализуйте отправку в чат непустого текстового сообщения
3. Реализуйте ответ робота (случайное сообщение из списка)
4. Проставляйте реальную дату переписки */

const chatWidget = document.querySelector('.chat-widget');

chatWidget.onclick = function() {
    chatWidget.classList.add('chat-widget_active');
}

const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

input.addEventListener('keydown', (event) => {

    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    if (event.key == 'Enter' && input.value != '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">${input.value}</div>
            </div>
        `;
        input.value = ""; // очищает поле ввода
    
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${hours}:${minutes}</div>
                <div class="message__text">
                    Добрый день, мы ещё не проснулись. Позвоните через 10 лет
                </div>
            </div>
        `;
    }
    
    // function showAnswer() {
        
    // }

    // const answers = [
    //     `Вы не купили ни одного товара, чтобы с нами так разговаривать!`,
    //     `Кто тут?`,
    //     `Где ваша совесть?`,
    //     `К сожалению все операторы сейчас заняты. Не звоните нам больше.`,
    //     `Добрый день. До свидания!`
    // ]
})
