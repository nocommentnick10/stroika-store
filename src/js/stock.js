function init () {
    $.getJSON("./../json/stock.json", stockRender);
}

function stockRender (data){
    console.log(data);
    let render = '';
    for(key in data){
        render += `
        <div class="stock__item">
            <img src="${data[key].img}" alt="Рубероид РКП-350">

            <div class="stock__item-content">
                <h3>${data[key].name}</h3>
                <span>${data[key].price}</span>
                <span class="old-price">${data[key].oldprice}</span>
                <button class="btn">
                    В корзину
                </button>
            </div>
        </div>
        `
        document.querySelector('.cards--stock').innerHTML = render;
    }
}

$(document).ready(function () {
    init();
});