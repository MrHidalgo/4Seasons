/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start */
	const searchCB = () => {
		$('[search-js]').on('click', (ev) => {
			$('[search-content-js]').addClass('is-open');
		});
		
		$('[search-close-js]').on('click', (ev) => {
			$('[search-content-js]').removeClass('is-open');
		});
	};
	
	
	const countCB = () => {
		$('[count-minus-js]').on('click', (ev) => {
			if(Number($('[count-js]').val()) > 1) {
				$('[count-js]').val(Number($('[count-js]').val()) - 1);
			}
		});
		$('[count-add-js]').on('click', (ev) => {
			$('[count-js]').val(Number($('[count-js]').val()) + 1);
		});
	};
	
	
	const initPathFloatingAnimation = () => {
		let xMin = -25,
			xMax = 25,
			yMin = -50,
			yMax = 50,
			positionsPerElement = 5,
			secondsPerIteration = 5,
			elements = $("[floating-node-js]");
		
		for (var i = 0; i < elements.length; i++) {
			randomFloat(elements[i], positionsPerElement, secondsPerIteration);
		}
		
		function random(min, max) {
			return min + Math.random() * (max - min);
		}
		
		function randomFloat(element, positions, duration) {
			var tl = new TimelineMax({
				repeat: -1,
				yoyo: true,
				delay: Math.random() * duration
			});
			
			for (var _i = 0; _i < positions; _i++) {
				tl.to(element, duration, {
					x: random(xMin, xMax),
					y: random(yMin, yMax),
					ease: Sine.easeInOut
				});
			}
			
			return tl;
		}
	};
	
	
	const aboutLine = () => {
		function helperCalcLinePosition() {
			if($('.about__visual').length > 0) {
				$('.about__visual-line-1').css({
					width: $('.about__visual-col--first')[0].getBoundingClientRect().left
				});
				$('.about__visual-line-2').css({
					width: $('.about__visual-col--last')[0].getBoundingClientRect().right
				});
			}
		}
		
		helperCalcLinePosition();
		
		$(window).on('resize', (ev) => {
			helperCalcLinePosition();
		});
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		initPopups();
		initSmoothScroll();
		initHamburger();
		// ==========================================

		// callback
		searchCB();
		countCB();
		initPathFloatingAnimation();
		aboutLine();
		// ==========================================
	};
	initNative();
})();
