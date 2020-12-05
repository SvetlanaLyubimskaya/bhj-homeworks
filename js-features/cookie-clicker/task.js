const image = document.getElementById("cookie"); 

function changeSizes(){ 
    const clicker = document.getElementById("clicker__counter");
    let clicks = parseInt(clicker.textContent, 10) + 1;
    clicker.textContent = clicks;

    if (clicks % 2 == 0) {
        image.width = 200; 
    } else {
        image.width = 250;
    }
}

image.onclick = changeSizes;

/*
Это работает при клике на 0
const clicker = document.getElementById("clicker__counter");
function counter() {
    let clicks = parseInt(clicker.textContent, 10) + 1;
    clicker.textContent = clicks;
}
clicker.onclick = counter;
*/

// Второй вариант записи
// const image = document.getElementById("cookie");
// image.onclick = function() {
//     const clicker = document.getElementById("clicker__counter");
//     let clicks = parseInt(clicker.textContent, 10) + 1;
//     clicker.textContent = clicks;

//     if (clicks % 2 == 0) {
//         this.width = 200;
//     } else {
//         this.width = 250;
//     }
// }