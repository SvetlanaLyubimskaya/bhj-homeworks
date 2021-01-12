/* Процесс реализации
При нажатии на один из элементов с классом font-size, вам необходимо:
1. Поставить этому элементу класс font-size_active
2. В зависимости от размера, поставить элементу с классом book соответствующий класс*/

const fontSizeArr = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

for (let fontSize of fontSizeArr) {
    fontSize.addEventListener('click', changeFontSize);
}

function changeFontSize(event) {
    // console.log('клик');
    event.preventDefault();
    
    book.classList.remove('font-size_big');
    book.classList.remove('font-size_small');
    
    if (this.dataset.size == "small") {
        book.classList.add('font-size_small');
    } else if (this.dataset.size == "big") {
        book.classList.add('font-size_big');
    } 
  
}
