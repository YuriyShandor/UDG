$(document).ready(function() {
  $('select').niceSelect();

  $(".search-box__search-symbol").click(function(){
    $(".search-box__content").addClass("search-box__content_visible");
    $(".logo-menu").addClass("logo-menu_no-border");
  });

  $(".close_search").click(function(){
    $(".search-box__content").removeClass("search-box__content_visible");
    $(".logo-menu").removeClass("logo-menu_no-border");
  });

 $('.slider').on('init', function(event, slick){
         $(this).append('<div class="slider-count"><p><span id="current">1</span> of <span id="total">'+slick.slideCount+'</span></p></div>');
     });
     $('.slider').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: true,
       fade: true
     });
     $('.slider')
         .on('afterChange', function(event, slick, currentSlide, nextSlide){
             // finally let's do this after changing slides
             $('.slider-count #current').html(currentSlide+1);
 });

  $('.open-menu').click(function(){
    $('.navbar-inner').addClass('in');
    $(this).addClass('open-menu_invisible');
    $('.close-menu').addClass('close-menu_visible');
    $(".header").addClass("header_change-bg");
    $(".slider-block").addClass("slider-block_hidden");
    $(".rectangls").addClass("rectangls_hidden");
  });

  $(".close-menu").click(function(){
    $('.navbar-inner').removeClass('in');
    $(this).removeClass("close-menu_visible");
    $(".open-menu").removeClass('open-menu_invisible');
    $(".header").removeClass("header_change-bg");
    $(".slider-block").removeClass("slider-block_hidden");
    $(".rectangls").removeClass("rectangls_hidden");
  });
});
