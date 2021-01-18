/* Процесс реализации
1. Реализуйте функционал, когда при клике на галочку будут 
проставляться/сниматься галочки вложенных списков
2. В этом варианте задаче списки имеют максимум 1 уровень вложенности, 
поэтому не нужно делать максимально общее и абстрактное решение.

Используемые темы
1. Свойства checked и indeterminate
2. Методы closest, querySelector и querySelectorAll*/

const interestCheck = document.querySelectorAll('.interest__check');
console.log(interestCheck);

for (const item of interestCheck) {
    item.addEventListener('click', check);
}

function check() {

    console.log(this); //элемент, на кот произошло событие
    console.log('клик');

    const closest = this.closest('.interest').interestCheck;
    console.log(closest);
    const closestArr = Array.from(closest)

    if (this.checked == true && closest != null) {
        closestArr.forEach(el => el.checked = true);
    } else {
        closestArr.forEach(el => el.checked = false);
    }

}

