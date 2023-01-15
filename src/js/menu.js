const mobileMenu = document.getElementById('mobileMenu')
const mobileBtn = document.getElementById('mobileBtn')
const btnMid = document.getElementById('btn-mid')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('none')
    btnMid.classList.toggle('btn--active')
    document.body.classList.toggle('overflowy')
})
// Cities

const citiesBtn = document.getElementById('locationBtn')
const modalBtn = document.querySelectorAll('.modal-btn')
const citiesBtnXs = document.getElementById('locationBtnXs')

for (let i = 0 ; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click' , (e) => {
        e.preventDefault();
        citiesBtn.innerText = modalBtn[i].innerText;
        citiesBtnXs.innerText = modalBtn[i].innerText;
    }) ; 
}

// Cities