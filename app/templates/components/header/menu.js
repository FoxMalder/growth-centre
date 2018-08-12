$(document).ready(function() {
  var mainHeader = $('.header_wrap').outerHeight();
  var menuWrap = $('.header-nav');

  $(window).scroll(function() {

    if( $(window).scrollTop() > mainHeader ) {
      menuWrap.css({position: 'fixed'});
      menuWrap.addClass('is-fixed');
    } else {
      menuWrap.css({position: 'relative'});
      menuWrap.removeClass('is-fixed');
    }
  });
});
