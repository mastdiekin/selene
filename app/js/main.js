import hello from './lib/hello.js';
import $ from 'jquery';
import preloader from './lib/preloader.js';
import svg4everybody from '../libs/svg4everybody/dist/svg4everybody.legacy.js';
import '../libs/slick-carousel/slick/slick.js';
import Waypoint from '../libs/waypoints/lib/jquery.waypoints.js';

hello();
preloader();
svg4everybody({
  polyfill: true 
});

$('.hero__menu-mobile').click(function() {
  $(this).toggleClass('is-active');
  $('.hero__menu').toggleClass('is-active');
});

$('.hero__slider').slick({
  nextArrow: '.hero__arrow-next',
  prevArrow: '.hero__arrow-prev',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  fade: true,
  draggable: false,
  cssEase: 'linear',
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 500,
  speed: 900,
  dots: true,
  appendDots: '.hero__buttons'
});

$('.projects__slider').slick({
  nextArrow: '.projects__prev',
  prevArrow: '.projects__next',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 10000,
  fade: true,
  draggable: false,
  cssEase: 'linear',
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 500,
  speed: 900,
  dots: false,
  adaptiveHeight: true,
  asNavFor: '.projects__nav'
});


$('.projects__nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.projects__slider',
  dots: false,
  arrows: false,
  centerPadding: '0px',
  centerMode: true,
  cssEase: 'linear',
  draggable: false,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  touchThreshold: 500,
  speed: 900,
  focusOnSelect: true
});
