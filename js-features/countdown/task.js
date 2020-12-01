function timerStart() {
    let elem = document.getElementById("timer");
    let number = parseInt(elem.textContent, 10); // получаем на вход число. Изначально 59
    elem.textContent = number - 1; // предыдущее число - 1
    
    console.log(number);

    if (number == 0) {
        alert('Вы победили в конкурсе!');
        location.reload();
    } 
}

setInterval(timerStart, 1000);
