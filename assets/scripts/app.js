// подсвечиваем ссылки с одинаковым адресом
// if ($) $(function () {
//
//   $('a').hover(function () {
//     if ($(this).attr('href') != '' && $(this).attr('href') != '#') {
//       $('a[href="' + $(this).attr('href') + '"]').addClass('hover');
//     }
//   }, function () {
//     $('a').removeClass('hover');
//   });
//
// });
// /подсвечиваем ссылки с одинаковым адресом
"use strict";
'use strict';

$(document).ready(function () {
  var scrollerStart = false;

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('#scroller').fadeIn();
    } else {
      $('#scroller').fadeOut();
    }
  });

  $('#scroller').click(function () {
    scrollerStart = true;
    $('body,html').animate({ scrollTop: 0 }, 400, function () {
      scrollerStart = false;
    });
    return false;
  });
});
'use strict';

$(document).ready(function () {
  var mainHeader = $('.header_wrap').outerHeight();
  var menuWrap = $('.header-nav');

  $(window).scroll(function () {

    if ($(window).scrollTop() > mainHeader) {
      menuWrap.css({ position: 'fixed' });
      menuWrap.addClass('is-fixed');
    } else {
      menuWrap.css({ position: 'relative' });
      menuWrap.removeClass('is-fixed');
    }
  });
});

$(document).ready(function () {

  $('._nav-hamburger').click(function (e) {
    $(this).toggleClass("is-active");
    $('.header-nav-mobile-title').toggleClass("is-active");
    $('.header-nav_box').toggleClass("is-active");
    $('.menu').toggleClass('is-active');
  });

  $('.header-nav-mobile-title').click(function () {
    $(this).toggleClass("is-active");
    $('._nav-hamburger').toggleClass("is-active");
    $('.header-nav_box').toggleClass("is-active");
    $('.menu').toggleClass('is-active');
  });
});
"use strict";

$(".reviews-list").slick({
  dots: false,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 280
});
"use strict";

$(".sliders").slick({
  dots: false,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 280
});