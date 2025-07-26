  AOS.init();
const swiper = new Swiper('.parallax-swiper', {
  speed: 1000,
  loop: true,
  parallax: true,         // Enables parallax
  effect: 'fade',         // Enables fade effect
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
const fadeSwiper = new Swiper('.fade-swiper', {
  loop: true,
  effect: 'fade',
  speed: 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.fade-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.fade-next',
    prevEl: '.fade-prev'
  }
});
var mixer = mixitup("#world", {
        animation: {
        duration: 300
    }
});
 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
$('.someBlock').preloader({

  // loading text
  text: '', 

  // from 0 to 100 
  percent: '', 

  // duration in ms
  duration: '2000', 

  // z-index property
  zIndex: '', 

  // sets relative position to preloader's parent
  setRelative: false 

  
});

$('.wrapper').slick({

   infinite: true,
  slidesToShow: 2,
  slidesToScroll: 3,
   dots: true,
 responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
$(document).ready( function () {
    $('#myTable').DataTable({
responsive: true
    });
} );
new DataTable('#example');

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  });
new WOW().init();
var mixer = mixitup("#word", {
        animation: {
        duration: 300
    }
});

const instance = $('#trigger').bsLayer({
   ajax: {
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  name: undefined,
  title: undefined,
  width: undefined,
  bgStyle: {
    classes: 'text-dark',
    css: {
      background: 'rgba(255, 255, 255, 0.74)',
      boxShadow: '0 16px 80px rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(9.1px)',
      WebkitBackdropFilter: 'blur(9.1px)',
    }
  },
  backdrop: true,
  url: undefined,
  refreshable: false,
  closeable: true,
  expandable: true,
  queryParams(params) {
    return params;
  },
  onAll: function (_eventName, ..._args) {
  },
  onPostBody: function (_$content) {
  },
  onShow: function () {
  },
  onShown: function () {
  },
  onHide: function () {
  },
  onHidden: function () {
  },
  onRefresh: function (_$content) {
  },
  onCustomEvent: function (_eventName, ...params) {
  },
   debug: true,
  ajax: {
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  fullWidthBreakpoint: 576, 
  firstLayerWithInPercent: .80,
  distanceBetweenLayers: 100, 
  animationDuration: 600, 
  zIndexStart: 1050, 
  parent: 'body',
  icons: {
    close: 'bi bi-x-lg',
    refresh: 'bi bi-arrow-clockwise',
    maximize: 'bi bi-arrows-angle-expand',
    minimize: 'bi bi-arrows-angle-contract', 
  },
   name: 'dynamic-layer',
  url: async function(params) {
    const response = await fetch(`/api/content?id=${params.id}`);
    const html = await response.text();
    return html;
  },
  queryParams: (params) => {
    params.id = 123;
    return params;
  }
});
$(".testing").progressBar({
  value: "70" // 70%
});

// jQuery AJAX with button loader
$.ajax({
  url: 'your-endpoint.php',   // Replace with your real URL
  type: 'POST',
  data: $('#myForm').serialize(),

  beforeSend: function() {
    const $btn = $('.button-loader');
    $btn.data('original-text', $btn.html()); // Save original text
    $btn.html($btn.data('loading-text')).attr('disabled', true);
  },

  success: function(response) {
    // Handle response if needed
    alert('Form submitted successfully!');
  },

  complete: function() {
    const $btn = $('.button-loader');
    $btn.html($btn.data('original-text')).attr('disabled', false);
  }
});
$(function(){
  $('#myList').lazyLoad();
});

$(window).load(function() {
$('#slider').nivoSlider({
effect: 'random',
slices: 15,
boxCols: 8,
boxRows: 4,
animSpeed: 500,
pauseTime: 3000,
startSlide: 0,
directionNav: true,
controlNav: true,
controlNavThumbs: false,
pauseOnHover: true,
manualAdvance: false,
prevText: 'Prev',
nextText: 'Next',
randomStart: false,
beforeChange: function(){},
afterChange: function(){},
slideshowEnd: function(){},
lastSlide: function(){},
afterLoad: function(){}
});
});
$(function () {

  var goToCartIcon = function($addTocartBtn){
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500 , "linear", function() {
      $image.remove();
    });
  }

  $('.my-cart-btn').myCart({
    classCartIcon: 'my-cart-icon',
    classCartBadge: 'my-cart-badge',
    affixCartIcon: true,
    checkoutCart: function(products) {
      $.each(products, function(){
        console.log(this);
      });
    },
    clickOnAddToCart: function($addTocart){
      goToCartIcon($addTocart);
    },
    getDiscountPrice: function(products) {
      var total = 0;
      $.each(products, function(){
        total += this.quantity * this.price;
      });
      return total * 0.5;
    }

  });

});
$('.mqscroller').mqScroller({
  htmlDir: 'auto',
  loop: false,
  duration: 5000, 
  direction: 'left',
  gap: 0, 
  pauseOnHover: true,
  separator: '',
  cloneCount: 0,
});
var steady = new Swiper(".moSwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

$('#easy-filter-wrap').easyFilter({

  // or 'fade'
  animation: 'slide',

  // duration of the animation
  duration: 400
  
});
$('.rating').starRating({
  starIconEmpty: 'far fa-star',
  starIconFull: 'fas fa-star',
  starColorEmpty: 'lightgray',
  starColorFull: '#FFC107',
  starsSize: 4, // em
  stars: 5,
});
 $(document).ready(function () {
  var swiler = new Swiper(".miSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
