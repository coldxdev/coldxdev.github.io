$(function ()
{


$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active')
});



  $("[data-fancybox]").fancybox({
    youtube: {
      showinfo: 0,
      VideoPlaybackQuality: hd,
    },
  });
});

$(".heroes__slider-img").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".heroes__slider-text",
  prevArrow: '<button class="slick-btn slick-prev"><img src="./images/slider-btn.png" alt=""></button>',
  nextArrow: '<button class="slick-btn slick-next"><img src="./images/slider-btn.png" style="transform: rotate(180deg);" alt=""></button>',
  responsive: [
    {
    breakpoint: 740,
      settings: {
        arrows: 0,
      }
    }],
});

$(".heroes__slider-text").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".heroes__slider-img",
  fade: true,
  arrows: 0,
  
});
