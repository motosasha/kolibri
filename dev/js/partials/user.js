'use strict';

let thanks;

window.onload = function() {
	// scrollbar width
	let scrollBarWidth = window.innerWidth - document.body.clientWidth;
	document.documentElement.style.setProperty('--scrollbar-width', scrollBarWidth + 'px');

	// side mobile menu
	let $body = document.querySelector('body');
	let $menuTrigger = document.querySelector('.header__menu');
	let $menuDarker = document.querySelector('.page__darker');
	let $navLinks = document.querySelectorAll('.nav .nav__links-item');
	let $navButton = document.querySelector('.nav .nav__button');
	$menuTrigger.addEventListener('click', function () {
		$body.dataset.state = 'open'
	});
	$menuDarker.addEventListener('click', function () {
		$body.dataset.state = ''
	});
	$navButton.addEventListener('click', function () {
		$body.dataset.state = ''
	});
	for (let i = 0; i < $navLinks.length; i++) {
		$navLinks[i].addEventListener('click', function () {
			$body.dataset.state = ''
		});
	}

	// modals
	let modals = new HystModal({
		linkAttributeName: 'data-hystmodal',
	});
	thanks = function () {
		modals.open('#thanks')
	};

	// sliders
	let girlsSwiper = new Swiper('.girls__slider', {
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		slideClass: 'girls__slide',
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 100,
			depth: 250,
			modifier: 1.44,
		},
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		navigation: {
			nextEl: '.girls__next',
			prevEl: '.girls__prev',
		},
	});
	let reviewsSwiper = new Swiper('.reviews__slider', {
		slideClass: 'reviews__slide',
		slidesPerView: 1,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			dynamicBullets: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 0,
			},
		},
		navigation: {
			nextEl: '.reviews__next',
			prevEl: '.reviews__prev',
		},
	});

	// faq
	let question = document.querySelectorAll('.faq__header');
	question.forEach(question => {
		question.addEventListener('click', event => {
			const active = document.querySelector('.faq__header.faq__header_active');
			if(active && active !== question ) {
				active.classList.toggle('faq__header_active');
				active.nextElementSibling.style.maxHeight = 0;
			}
			question.classList.toggle('faq__header_active');
			const answer = question.nextElementSibling;
			if(question.classList.contains('faq__header_active')){
				answer.style.maxHeight = answer.scrollHeight + 'px';
			} else {
				answer.style.maxHeight = 0;
			}
		})
	})

	// input
	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		input.addEventListener('input', function() {
			if(this.value.length !== 0) {
				this.classList.add('field__input_has-value');
			}
			else {
				this.classList.remove('field__input_has-value');
			}
		})
	}

	// smooth scroll
	let scroll = new SmoothScroll('a[href*="#"]', {
		speed: 500
	});

	// phone mask
	let phoneFields = document.querySelectorAll('input[type=tel]');
	for (let field of phoneFields) {
		let phoneMask = IMask(field, {
			mask: '+{7} (000) 000-00-00',
		});
	}
};
