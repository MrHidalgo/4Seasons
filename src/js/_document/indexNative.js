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
		// ==========================================

		// callback
		searchCB();
		countCB();
		// ==========================================
	};
	initNative();
})();
