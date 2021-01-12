/*  Процесс реализации
Каждую секунду меняйте класс с одного элемента на другой
Сделайте акцент на том, чтобы на странице можно было использовать несколько ротаторов одновременно
Смена текстовых блоков должна быть бесконечной.
Подумайте, как из setInterval сделать бесконечный цикл  */

const rotators = Array.from(document.querySelectorAll('.rotator__case'));

function changeClass() {
    let i = rotators.findIndex(item => item.classList.contains('rotator__case_active'));
    console.log(i);

    rotators[i].classList.remove('rotator__case_active'); 
    i++;

    if (i === rotators.length) {
        i = 0;
    }

    rotators[i].classList.add('rotator__case_active'); 
    rotators[i].style.color = rotators[i].dataset.color;

}

setInterval(changeClass, 1000);