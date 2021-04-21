

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {
  /* HELPERS
  * ========== */
  
  // REVIEWS
  $('.reviews__slider').css({paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left});
  $('.reviews__bg').css({width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50});
  
  // GALLERY
  $('.gallery__slider').css({paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left});
  $('.gallery__bg').css({width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50});
  
  $(window).on('resize', () => {
    $('.gallery__slider').css({paddingLeft: $('.gallery__title')[0].getBoundingClientRect().left});
    $('.gallery__bg').css({width: $('.gallery__btn--next')[0].getBoundingClientRect().right + 50});
    
    $('.reviews__slider').css({paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left});
    $('.reviews__bg').css({width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50});
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
};
