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
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var countScroll = $(window).scrollTop(),
      headerElement = $('.header');

  if (countScroll > 10) {
    headerElement.addClass("is-fixed");
  } else {
    headerElement.removeClass("is-fixed");
  }
};

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

  $('[popup-gallery-js]').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'is-show',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function titleSrc(item) {
        return item.el.attr('title') + '<small>by Matthew Monk</small>';
      }
    }
  });

  $('[popup-popular-js]').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'is-show',
    fixedContentPos: true,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function titleSrc(item) {
        return item.el.attr('title') + '<small>by Matthew Monk</small>';
      }
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
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
  });

  var galleryTop = new Swiper('.popularSwiper', {
    spaceBetween: 20,
    effect: 'fade',
    speed: 1000,
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
  /* end :: POPULAR */
  /* ========== */
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
  initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
  initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start */
  var searchCB = function searchCB() {
    $('[search-js]').on('click', function (ev) {
      $('[search-content-js]').addClass('is-open');
    });

    $('[search-close-js]').on('click', function (ev) {
      $('[search-content-js]').removeClass('is-open');
    });
  };

  var countCB = function countCB() {
    $('[count-minus-js]').on('click', function (ev) {
      if (Number($('[count-js]').val()) > 1) {
        $('[count-js]').val(Number($('[count-js]').val()) - 1);
      }
    });
    $('[count-add-js]').on('click', function (ev) {
      $('[count-js]').val(Number($('[count-js]').val()) + 1);
    });
  };

  var initPathFloatingAnimation = function initPathFloatingAnimation() {
    var xMin = -25,
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
    searchCB();
    countCB();
    initPathFloatingAnimation();
    // ==========================================
  };
  initNative();
})();