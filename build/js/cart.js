let cart = {};

function loadCart (){
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
        showCart();
    }
}

function showCart () { 
    $.getJSON('./../json/stock.json', (data) => {
        let stock = data;
        let render = '';
        for(let key in cart){
            render += `
            <div class="goods__item">
                <img src="${stock[key].img}">

                <div class="goods__item-content">
                    <h3>${stock[key].name}</h3>
                    <span>${stock[key].price}</span>
                    <button class="btn-del">
                        Удалить
                    </button>
                </div>
            </div>
            `
            document.querySelector('.cards').innerHTML = render;
        }
    })
 }

$(document).ready(function () {
    loadCart();
});