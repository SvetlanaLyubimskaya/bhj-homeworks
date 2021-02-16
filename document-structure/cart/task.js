const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

const control = document.querySelectorAll('.product__quantity-control');
// const plus = document.querySelectorAll('.product__quantity-control_inc');
// const minus = document.querySelectorAll('.product__quantity-control_dec');

const productQuantityValue = document.querySelectorAll('.product__quantity-value');

for (const item of control) {
    item.addEventListener('click', () => {
        let count = item.closest('.product__quantity-controls').querySelector('.product__quantity-value');

        if (item.classList.contains('product__quantity-control_inc')) {
            count.innerText++;
        } else if (item.classList.contains('product__quantity-control_dec')) {
            count.innerText--;
            if (count.innerText < 1) {
                count.innerText = 1;
            }
        }

    })
}

for (const item of productAdd) {
    item.addEventListener('click', () => {

        const id = item.closest('.product').dataset.id;
        const img = item.closest('.product').querySelector('.product__image').getAttribute('src');
        const count = +item.closest('.product').querySelector('.product__quantity-value').innerText;

        // cartProducts.insertAdjacentHTML('beforeEnd', `
        //     <div class="cart__product" data-id="${id}">
        //         <img class="cart__product-image" src="${img}">
        //         <div class="cart__product-count">${count}</div>
        //     </div>
        // `)

        if (cartProducts.dataset.id == `${id}`) {
            let num = +cartProducts.dataset.id.querySelector('.cart__product-count').innerText;
            cartProducts.dataset.id.innerText = num + count;
        } else {
            cartProducts.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${count}</div>
                </div>
            `)

        }

    })
}
    

