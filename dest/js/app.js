'use strict';

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
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

  $('[popup-js]').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });

  $('[popup-video-js]').magnificPopup({
    type: 'iframe',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'is-show',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function id(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function id(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    },
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      close: function close() {}
    }
  });
};

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

  // GALLERY
  $('.gallery__slider').css({ paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left });
  $('.gallery__bg').css({ width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50 });

  $(window).on('resize', function () {
    $('.gallery__slider').css({ paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left });
    $('.gallery__bg').css({ width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50 });

    $('.reviews__slider').css({ paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left });
    $('.reviews__bg').css({ width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50 });
  });

  // start :: REVIEWS
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
  // end :: REVIEWS
  /* ========== */

  // start :: GALLERY
  new Swiper('.gallerySwiper', {
    loop: false,
    effect: 'slide',
    speed: 1000,
    slidesPerView: 'auto',
    spaceBetween: 20,
    slidesOffsetAfter: 20,
    navigation: {
      nextEl: '.gallery__btn--next',
      prevEl: '.gallery__btn--prev'
    },
    on: {
      init: function init(swiper) {
        $(swiper.$el).animate({ opacity: 1 }, 550);
        $('.gallery__bg').animate({ opacity: 1 }, 550);
      }
    }
  });
  // end :: GALLERY
  /* ========== */

  /* start :: POPULAR */
  var galleryThumbs = new Swiper('.popularSwiperThumb', {
    direction: 'vertical',
    mousewheel: true,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });

  var galleryTop = new Swiper('.popularSwiper', {
    spaceBetween: 20,
    thumbs: {
      swiper: galleryThumbs
    }
  });
  /* end :: POPULAR */
  /* ========== */
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
    initPopups();
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();