

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
  
  $(window).on('resize', () => {
    $('.reviews__slider').css({paddingLeft: $('.reviews__title')[0].getBoundingClientRect().left});
    $('.reviews__bg').css({width: $('.reviews__btn--next')[0].getBoundingClientRect().right + 50});
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
      prevEl: '.reviews__btn--prev',
    },
    on: {
      init: function(swiper) {
        $(swiper.$el).animate({opacity: 1}, 550);
        $('.reviews__bg').animate({opacity: 1}, 550)
      }
    }
  });
};
