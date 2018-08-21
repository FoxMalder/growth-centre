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

$(document).ready(function() {

  $('._nav-hamburger').click(function(e) {
    $(this).toggleClass("is-active");
    $('.header-nav-mobile-title').toggleClass("is-active");
    $('.header-nav_box').toggleClass("is-active");
    $('.menu').toggleClass('is-active');
  });

  $('.header-nav-mobile-title').click(function() {
    $(this).toggleClass("is-active");
    $('._nav-hamburger').toggleClass("is-active");
    $('.header-nav_box').toggleClass("is-active");
    $('.menu').toggleClass('is-active');
  });

});
