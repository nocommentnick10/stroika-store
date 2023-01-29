let cart = {};

function init () {
    $.getJSON("./json/stock.json", stockRender);
}

function stockRender (data){
    console.log(data);
    let render = '';
    for(let key in data){
        render += `
        <div class="stock__item">
            <img src="${data[key].img}" alt="Рубероид РКП-350">

            <div class="stock__item-content">
                <h3>${data[key].name}</h3>
                <span>${data[key].price}</span>
                <span class="old-price">${data[key].oldprice}</span>
                <button class="btn" data-key="${key}">
                    В корзину
                </button>
            </div>
        </div>
        `
        document.querySelector('.cards--stock').innerHTML = render;
        $('.btn').on('click', addToCart)
    }
}

function addToCart() { 
    let id = $(this).attr('data-key');
    console.log(id);
    if(cart[id] === undefined){
        cart[id] = 1;
    } else {
        cart[id]++;
    }
    console.log(cart);
    saveCart();
}

function saveCart (){
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart (){
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

$(document).ready(function () {
    init();
    loadCart();
});