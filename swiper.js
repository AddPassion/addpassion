let sliderSelector = '.swiper-container',
  options = {
    loop: true,
    speed: 800,
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: true,
    effect: 'coverflow',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true
    },
    grabCursor: true,
    parallax: true,
    on: {
      imagesReady: function () {
        this.el.classList.remove('loading');
      }
    }
  };
let mySwiper = new Swiper(sliderSelector, options);
mySwiper.init();