import Swiper, {Pagination} from './swiper-bundle.min.js';
Swiper.use ([Pagination]);

let services__switcher = document.querySelector('.services__wrapper:nth-child(2)');
let services__switcherTwo = document.querySelector('.services__main');
let services__switcherThree = document.querySelectorAll('.services__logo');
let services__isSviperInit = false;
let services__swiper;

function services__swiperInit() {
	const services__swiper = new Swiper('.swiperServices', {
	  direction: 'horizontal',
	  centeredSlides: true,   
	  centeredSlidesBounds: true,
	  slidesPerView: 1.1,
	  centeredSlides: true,
	  loop: false,
	  spaceBetween: 10,
	  breakpoints: {
	    320: {
	      slidesPerView: 1.3,
	      spaceBetween: 20
	    },
	    480: {
	      slidesPerView: 1.8,
	      spaceBetween: 30
	    },
	    640: {
	      slidesPerView: 2.4,
	      spaceBetween: 40
	    }
	  },
	  pagination: {
	    el: '.swiper-pagination_services',
	    dynamicBullets: true,
	    dynamicMainBullets: 5,
	    clickable: true,
	  },
	});
	// console.log('Свайпер инициализирован');
return(services__swiper);
}


let services__mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

function services__changeClasses () {
 	
 	if (services__mobile.matches) {
 		// console.log('Ширина экрана меньше или равна 767px');
 		//	Если ширина экрана меньше или равна 767px, 
 		//	подключаем классы для свайпера и инициализиурем свайпер.
 		services__switcher.classList.add('swiperServices'); 
 		services__switcherTwo.classList.add('swiper-wrapper');
 		for (var i=0; i<services__switcherThree.length; i++) {
 			services__switcherThree[i].classList.add('swiper-slide');
 		}
 
 		if (services__isSviperInit == false) {
 			services__swiper = services__swiperInit();	
 			services__isSviperInit = true;
 		}
 		
 	} else {
 		// console.log('Ширина экрана больше или равна 768px');
 		//	Если ширина экрана больше или равна 768px, отключаем классы для свайпера. 
 		//	Если свайпер был включён ранее, уничтожаем его. 
 		services__switcher.classList.remove('swiperServices');
 		services__switcherTwo.classList.remove('swiper-wrapper');
 		for (var i=0; i<services__switcherThree.length; i++) {
 			services__switcherThree[i].classList.remove('swiper-slide');
 		}

 		if (services__isSviperInit == true) {
 			services__swiper.destroy();
 			services__isSviperInit = false;
 		}
 	}
}

services__changeClasses();

window.addEventListener('resize',function() {
	services__changeClasses();    
});