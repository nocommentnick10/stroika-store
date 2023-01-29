const mobileMenu = document.getElementById('mobileMenu')
const mobileBtn = document.getElementById('mobileBtn')
const btnMid = document.getElementById('btn-mid')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('none')
    btnMid.classList.toggle('btn--active')
    document.body.classList.toggle('overflowy')
})

// Micromodal

MicroModal.init({
    disableScroll: true, // [6]
});

// Micromodal

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

// OwlCarousel - MobileSLiderTop

$(document).ready(function(){

    const mSliderTop = $('#mobile-slider-top');
    mSliderTop.owlCarousel({
        loop: true,
        items: 1,
        margin: 10,
        autoWidth: true,
        center: true,
        autoplay: true,
        // dots: false,
        responsive : {
            768: {
                dots: false
            },
            1440 : {
                autoWidth: false,
                dots: false
            }
        }
    });

    const prevMobTop = $('#sliderPrevMobTop');
    const nextMobTop = $('#sliderNextMobTop');

    prevMobTop.click(function(){
        mSliderTop.trigger('prev.owl.carousel');
    });

    nextMobTop.click(function(){
        mSliderTop.trigger('next.owl.carousel');
    });
});

// OwlCarousel - MobileSLiderTop

// OwlCarousel - MobileSliderBotton

$(document).ready(function(){

    const mSliderBot = $('#mobile-slider-bottom');
    mSliderBot.owlCarousel({
        loop: true,
        center: true,
        items: 1,
        autoWidth: true,
        margin: 24,
        dots: false
    })

    const prevMobBot = $('#sliderPrevMobBot');
    const nextMobBot = $('#sliderNextMobBot');

    prevMobBot.click(function(){
        mSliderBot.trigger('prev.owl.carousel');
    });

    nextMobBot.click(function(){
        mSliderBot.trigger('next.owl.carousel');
    });
})

// OwlCarousel - MobileSliderBotton

// OwlCarousel - XsSlider

$(document).ready(function(){

    const stockSlider = $('#stockSlider');
    stockSlider.owlCarousel({
        loop: true,
        center: true,
        items: 1,
        autoWidth: true,
        margin: 24,
        dots: false
    })
})

// OwlCarousel - XsSlider