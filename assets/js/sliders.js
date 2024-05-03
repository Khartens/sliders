// Index sliders
const swiper_one = new Swiper('.swiper_one', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    1285: {
      slidesPerView: 3,
      spaceBetween: 70,
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
const swiper_two = new Swiper('.swiper_two', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    1285: {
      slidesPerView: 3,
      spaceBetween: 70,
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
const swiper_three = new Swiper('.swiper_three', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  breakpoints: {
    1285: {
      slidesPerView: 3,
      spaceBetween: 70,
      },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
// End Index sliders


// Sliders tabs 
// Swiper Content
const swiperTabsNav = new Swiper('.swiper-tabs-nav', {
  slidesPerView: 3,
  loop: false,
});
const swiperTabsContent = new Swiper('.swiper-tabs-content', {
  // spaceBetween: 0,
  slidesPerView: 1,
  loop:false,
  simulateTouch:false,
  allowTouchMove: false,
  thumbs: {
    swiper: swiperTabsNav,
  },
});
const swiperTabsContentTwo = new Swiper('.swiper-tabs-content-two', {
  loop:false,
  simulateTouch:false,
  allowTouchMove: false,
  slidesPerView: 1,
});

const swipeAllSliders = (index) => {
  swiperTabsContent.slideTo(index);
  swiperTabsContentTwo.slideTo(index);
}

swiperTabsContent.on('slideChange', () => swipeAllSliders(swiperTabsContent.activeIndex));
swiperTabsContentTwo.on('slideChange', () => swipeAllSliders(swiperTabsContentTwo.activeIndex));

//Внутренний слайдер с картинками

const mySwiperOne = new Swiper(".mySwiperOne", {
  navigation: {
    nextEl: ".mySwiperOne-next",
    prevEl: ".mySwiperOne-prev",
  },
  simulateTouch:false,
  allowTouchMove: false,
  thumbs: {
    swiper: {
      el: '.mySwiperTwo',
      slidesPerView: 3
    }
  },
  breakpoints: {
    1275: {
      thumbs: {
        swiper: {
          el: '.mySwiperTwo',
          slidesPerView: 7
        }
      },
    },
    620: {
      thumbs: {
        swiper: {
          el: '.mySwiperTwo',
          slidesPerView: 4
        }
      },
    },
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
const mySwiperTwo = new Swiper(".mySwiperTwo", {

  spaceBetween: 4,
  slidesPerView: 3.12,
  navigation: {
    nextEl: ".mySwiperTwo-next",
    prevEl: ".mySwiperTwo-prev",
  },
  breakpoints: {
    1275: {
      spaceBetween: 7,
      slidesPerView: 7,
    },
    620: {
      spaceBetween: 7,
      slidesPerView: 4,
    },
  },
});