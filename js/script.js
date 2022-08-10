// swiper

const sliderHero = document.querySelector('#hero__swiper');
    const swiper = new Swiper (sliderHero, {
        loop:true,
    
});


const sliderGallery = document.querySelector('#gallery__swiper');
    const swiper1 = new Swiper (sliderGallery, {
        loop:true,
        breakpoints:{
            768:{
                slidesPerView:2,
                slidesPerGroup:2,
            },
            1025:{
                slidesPerView:3,
                slidesPerGroup:3,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        }
});

const sliderEvents = document.querySelector('#events__swiper');
    const swiper2 = new Swiper (sliderEvents, {
        loop:true,
        breakpoints:{
            768:{
                slidesPerView:3,
                slidesPerGroup:3,
            },
            1025:{
                slidesPerView:3,
                slidesPerGroup:1,
            },
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable:true,
        },
});

const sliderProjects = document.querySelector('#projects__swiper');
    const swiper3 = new Swiper (sliderProjects, {
        loop:true,
        breakpoints:{
        768:{
            slidesPerView:2,
            slidesPerGroup:2,
        },
        1025:{
            slidesPerView:3,
            slidesPerGroup:3,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween:15,
});


// burger

const burger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const navItem = document.querySelectorAll('.nav__link')
const navItemAdapt = document.querySelector('.nav__item-adaptive')

burger.addEventListener('click', function(){

    burger.classList.toggle('burger--active');

    nav.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');

})

navItemAdapt.addEventListener('click', function(){

    burger.classList.toggle('burger--active');

    nav.classList.toggle('nav--active');

    document.body.classList.toggle('stop-scroll');

})



navItem.forEach(function(el){
    el.addEventListener('click',function(){

        burger.classList.remove('burger--active');

        nav.classList.remove('nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

// searchAdaptiveBtn

const searchBtn = document.querySelector('.search__btn')
const searchInput = document.querySelector('.header__search-adaptive')
const searchBtnClose = document.querySelector('.search__btn-close')


searchBtn.addEventListener('click' , function(){
    searchBtn.classList.add('search__btn-hidden')
    searchInput.classList.add('header__search-adaptive-visible')
})

searchBtnClose.addEventListener('click', function() {
    searchBtn.classList.remove('search__btn-hidden')
    searchInput.classList.remove('header__search-adaptive-visible')

})







// select hero

// const element = document.querySelector('#selectCustom');
//     const choices = new Choices (element, {
//         searchEnabled: false,
//         itemSelectText: '',
//         sorter: function(a, b) {
//             return a.label.element - b.label.element;
//         },
//     });

// const element2 = document.querySelector('#selectCustom2');
//     const choices2 = new Choices (element2, {
//         searchEnabled: false,
//         itemSelectText: '',
//         sorter: function(a, b) {
//             return a.label.element - b.label.element;
//         },
//     });

// const element3 = document.querySelector('#selectCustom3');
//     const choices3 = new Choices (element3, {
//         searchEnabled: false,
//         itemSelectText: '',
//         sorter: function(a, b) {
//             return a.label.element - b.label.element;
//         },
//     });

// const element4 = document.querySelector('#selectCustom4');
//     const choices4 = new Choices (element4, {
//         searchEnabled: false,
//         itemSelectText: '',
//         sorter: function(a, b) {
//             return a.label.element - b.label.element;
//         },
//     });

// const element5 = document.querySelector('#selectCustom5');
//     const choices5 = new Choices (element5, {
//         searchEnabled: false,
//         itemSelectText: '',
//         sorter: function(a, b) {
//             return a.label.element - b.label.element;
//         },
//     });



// gallery

const colorText = document.querySelectorAll('[data-gallery]')
const colorCheck = document.querySelectorAll('[data-color]')

colorText.forEach(function(item){
    item.addEventListener('click', function(){
        this.dataset.gallery
        const color = document.querySelector('#' + this.dataset.gallery)
        color.classList.toggle('checkbox__text--active')
    })  
})

colorCheck.forEach(function(item) {
    item.addEventListener('mouseenter',function(){
        this.dataset.color
        const colorFake = document.querySelector('#' + this.dataset.color)
        colorFake.classList.add('checkbox__fake-hover')
    })
})

colorCheck.forEach(function(item) {
    item.addEventListener('mouseleave',function(){
        this.dataset.color
        const colorFake = document.querySelector('#' + this.dataset.color)
        colorFake.classList.remove('checkbox__fake-hover')
    })
})



//gallery__select

document.querySelectorAll('.select').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.select__button');
	const dropDownList = dropDownWrapper.querySelector('.select__list');
	const dropDownListItems = dropDownList.querySelectorAll('.select__list-item');

    dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('select__list--visible');
        dropDownBtn.classList.toggle('arrow')
	});

    dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownList.classList.remove('select__list--visible');
            dropDownBtn.classList.remove('arrow')
		});
	});
});




// catalog accordeon

const accardBtn = document.querySelectorAll('[data-accardeon]')


accardBtn.forEach(function (item){
    item.addEventListener('click', function (){
        this.nextElementSibling.classList.toggle('inner--active');
        const arrowUp = document.querySelector('#' + this.dataset.accardeon)
        arrowUp.classList.toggle('accardeon__arrow--flip')
    })
})


const nameBtn = document.querySelector('[data-name')
const nameAllBtn = document.querySelectorAll('[data-lastname]')
const nameAllBtnAdd = document.querySelector('[data-set1]')
const nameAllBtnRemove = document.querySelector('[data-set]')


nameBtn.addEventListener('click',function(){
    const choise = document.querySelector('#' + this.dataset.name)
    choise.classList.remove('catalog__wrapper--hidden')
    nameAllBtnRemove.classList.remove('undefinde--visible')
})

nameAllBtn.forEach(function(e){
    e.addEventListener('click', function(){
        const choise2 = document.querySelector('#' + this.dataset.lastname)
        choise2.classList.add('undefinde--visible')
        nameAllBtnAdd.classList.add('catalog__wrapper--hidden')
    })
})


// input

var selector = document.querySelector("input[type='tel']");
var selectorName = document.querySelector("input[type='name'")

var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new window.JustValidate('.form', {
    rules: {
        name: {
            required: true ,
            minLength: 2,
            maxLength: 10,
            function: (name, value) => {
                return /^[A-Za-zА-Яа-яЁё]+$/.test(value);
            }
        },
        tel: {
            required: true ,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
    },
    messages: {
        name:{
            required:"Вы не ввели имя",
            minLength:"Не допустимое количество символов",
            function:"Не допустимый формат ввода"
        },
        tel:{
            required:"Вы не ввели телефон",
            function:"Не правильный формат ввода"
        },
    }
});

// yandex-map

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75846806898367,37.60108849999989],
            zoom: 14,
            controls:['smallMapDefaultSet'],
            behaviors:['drag']
            
        },{
            geolocationControlFloat: 'none',
            geolocationControlPosition:{
                right:0,
                top:375,
            },
            zoomControlPosition:{
                right:0,
                top:300,
            },
        }
        );

        myMap.controls.remove('searchControl', {
        })
        myMap.controls.remove('fullscreenControl', {
        })
        myMap.controls.remove('typeSelector', {
        })
        var placemark = new ymaps.Placemark([55.75846806898367,37.60108849999989],{},{
            iconLayout:'default#image',
            iconImageHref:'img/contacts/map__spot.svg',
            iconImageSize:[20,20],
            iconImageOffset:[-3,-42]
        });
        myMap.geoObjects.add(placemark)
        
    }



