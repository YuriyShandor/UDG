$(document).ready(function() {
  $('select').niceSelect();

  $(".search-box__search-symbol").click(function(){
    $(".search-box__content").addClass("search-box__content_visible");
  });

  $(".close_search").click(function(){
    $(".search-box__content").removeClass("search-box__content_visible");
  });


  $('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: $("#right_arrow"),
   prevArrow: $("#left_arrow"),
  });
});

var $gallery = $('.slider');
var slideCount = null;

$gallery.on('init', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
  var $el = $('.slide-count-wrap').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
  var $el = $('.slide-count-wrap').find('.current');
  $el.text(currentSlide + 1);
}
