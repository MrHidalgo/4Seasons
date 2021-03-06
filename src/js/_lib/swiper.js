

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  /* HELPERS
  * ========== */
  
  // REVIEWS
  if($('.reviews__slider').length > 0) {
    $('.reviews__slider').css({paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left});
    $('.reviews__bg').css({width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50});
  }
  
  // GALLERY
  if($('.gallery__slider').length > 0) {
    $('.gallery__slider').css({paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left});
    $('.gallery__bg').css({width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50});
  }
  
  $(window).on('resize', () => {
    if($('.gallery__slider').length > 0) {
      $('.gallery__slider').css({paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left});
      $('.gallery__bg').css({width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50});
    }
  
    if($('.reviews__slider').length > 0) {
      $('.reviews__slider').css({paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left});
      $('.reviews__bg').css({width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50});
    }
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
      prevEl: '.reviews__btn--prev',
    },
    on: {
      init: function(swiper) {
        $(swiper.$el).animate({opacity: 1}, 550);
        $('.reviews__bg').animate({opacity: 1}, 550)
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
      prevEl: '.gallery__btn--prev',
    },
    on: {
      init: function(swiper) {
        $(swiper.$el).animate({opacity: 1}, 550);
        $('.gallery__bg').animate({opacity: 1}, 550)
      }
    }
  });
  // end :: GALLERY
  /* ========== */
  
  /* start :: POPULAR */
  const galleryThumbs = new Swiper('.popularSwiperThumb', {
    direction: 'vertical',
    mousewheel: true,
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  
  const galleryTop = new Swiper('.popularSwiper', {
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
