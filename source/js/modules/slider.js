import Swiper from "../plugins/swiper.min";

const swiperInit = (elem) => {
	if (elem.classList.contains('slider--press')) {
		return new Swiper('.slider--press .swiper-container', {
			slidesPerView: 1,
			spaceBetween: 26,
			navigation: {
				nextEl: '.slider--press .swiper-button-next',
				prevEl: '.slider--press .swiper-button-prev',
			},
			breakpoints: {
				960: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 2,
				},
			}
		});
	}
	if (elem.classList.contains('slider--cases')) {
		return new Swiper('.slider--cases .swiper-container', {
			slidesPerView: 1,
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: '.slider--cases .swiper-button-next',
			},
		});
	}
	if (elem.classList.contains('slider--challenges')) {
		return new Swiper('.slider--challenges .swiper-container', {
			slidesPerView: 1,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: '.slider--challenges .swiper-button-next',
				prevEl: '.slider--challenges .swiper-button-prev',
			},
		});
	}
	if (elem.classList.contains('slider--cards')) {
		return new Swiper('.slider--cards .swiper-container', {
			slidesPerView: 'auto',
			resistance: true,
			resistanceRatio: 0,
			freeMode: true,
			freeModeMomentumBounce: false,
		});
	}
}

export default swiperInit;
