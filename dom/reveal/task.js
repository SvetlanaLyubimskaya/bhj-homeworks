const viewportHeight = window.innerHeight; // высота экрана
console.log(viewportHeight);

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {

    for(const reveal of reveals) {// для каждого скрытого блока

        const revealBottom = reveal.getBoundingClientRect().bottom; // появление нижней границы

        if (revealBottom < viewportHeight) {
            reveal.classList.add('reveal_active');
        }
    }

});


////////////////////////////////////////////////////////////
// работает с одним блоком
// const viewportHeight = window.innerHeight;
// console.log(viewportHeight);

// window.onscroll = function() {

//     const reveal = document.querySelector('.reveal');
//     const revealBottom = reveal.getBoundingClientRect().bottom; // появление нижней границы

//     if (revealBottom < viewportHeight) {
//         reveal.classList.add('reveal_active');
//     }

// }
