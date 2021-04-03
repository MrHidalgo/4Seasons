"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
  /* HELPERS
  * ========== */

  // REVIEWS
  $('.reviews__slider').css({ paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left });
  $('.reviews__bg').css({ width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50 });

  $(window).on('resize', function () {
    $('.reviews__slider').css({ paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left });
    $('.reviews__bg').css({ width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50 });
  });
  // end :: REVIEWS
  /* ========== */

  new Swiper('.reviewsSwiper', {
    loop: false,
    effect: 'slide',
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev'
    },
    on: {
      init: function init(swiper) {
        $(swiper.$el).animate({ opacity: 1 }, 550);
        $('.reviews__bg').animate({ opacity: 1 }, 550);
      }
    }
  });
};

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initSwiper();
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();