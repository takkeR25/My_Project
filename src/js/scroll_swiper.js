import Swiper, {Pagination} from './swiper-bundle.min.js';
Swiper.use ([Pagination]);

function scrollMenu__swiperInit() {
	const swiper = new Swiper('.swiperScroll', {
	  // centeredSlides: true,   
	  // centeredSlidesBounds: true,
	  // watchOverflow: true,
	  direction: 'horizontal',
	  slidesPerView: "auto",
	  spaceBetween: 0,
	});
return(swiper);
}

scrollMenu__swiperInit();

