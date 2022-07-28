import Swiper, {Pagination} from './swiper-bundle.min.js';
Swiper.use ([Pagination]);

let repairs__switcher = document.querySelector('.repairs__wrapper:nth-child(2)');
let repairs__switcherTwo = document.querySelector('.repairs__main');
let repairs__switcherThree = document.querySelectorAll('.repairs__logo');
let repairs__isSviperInit = false;
let repairs__swiper;

function repairs__swiperInit() {
	const repairs__swiper = new Swiper('.swiper2', {
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
	      slidesPerView: 2,
	      spaceBetween: 30
	    },
	    640: {
	      slidesPerView: 2.7,
	      spaceBetween: 40
	    }
	  },
	  pagination: {
	    el: '.swiper-pagination2',
	    dynamicBullets: true,
	    dynamicMainBullets: 5,
	    clickable: true,
	  },
	});
	// console.log('Свайпер инициализирован');
return(repairs__swiper);
}


let repairs__mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

function repairs__changeClasses () {
 	
 	if (repairs__mobile.matches) {
 		// console.log('Ширина экрана меньше или равна 767px');
 		//	Если ширина экрана меньше или равна 767px, 
 		//	подключаем классы для свайпера и инициализиурем свайпер.
 		repairs__switcher.classList.add('swiper2'); 
 		repairs__switcherTwo.classList.add('swiper-wrapper');
 		for (var i=0; i<repairs__switcherThree.length; i++) {
 			repairs__switcherThree[i].classList.add('swiper-slide');
 		}
 
 		if (repairs__isSviperInit == false) {
 			repairs__swiper = repairs__swiperInit();	
 			repairs__isSviperInit = true;
 		}
 		
 	} else {
 		// console.log('Ширина экрана больше или равна 768px');
 		//	Если ширина экрана больше или равна 768px, отключаем классы для свайпера. 
 		//	Если свайпер был включён ранее, уничтожаем его. 
 		repairs__switcher.classList.remove('swiper2');
 		repairs__switcherTwo.classList.remove('swiper-wrapper');
 		for (var i=0; i<repairs__switcherThree.length; i++) {
 			repairs__switcherThree[i].classList.remove('swiper-slide');
 		}

 		if (repairs__isSviperInit == true) {
 			repairs__swiper.destroy();
 			repairs__isSviperInit = false;
 		}
 	}
}

repairs__changeClasses();

window.addEventListener('resize',function() {
	repairs__changeClasses();    
});