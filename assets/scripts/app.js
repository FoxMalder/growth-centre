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