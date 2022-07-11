/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, Mousewheel } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
 import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-container')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-container', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			
			modules: [Pagination, Mousewheel],
			 
			direction: "vertical",
			slidesPerView: 1,
			paginationClickable: true,
			observer: true,
			observeParents: true,
			observeSlideChildren:true,
			mousewheel: true,
				
			parallax: true,
			speed: 600,
		
			
			
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			 },
			

			// Скроллбар
			
		
			

			// Кнопки "влево/вправо"
	
			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			
			on: {
				init: function () {
					console.log('swiper initialized');
					
				},
			
				

				slideChange: function () {
					// if (document.getElementsByClassName('swiper-slide-active').length > 0) {
					// 	console.log('_anim_items');
					// 	let h = document.getElementsByClassName('_anim-items');
					// 	for(let value of h) value.classList.add('_active');
						
					// }
					
					 
				
					
	
					

					
				}
			}
		 });
		
	}
	
}


// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	
	       initSliders(), 
	 
	// Swiper.on('slideChange', function (){
	// 	console.log('slide changed');
	//  });
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	initSlidersScroll();
});