$('.toggle-menu').localScroll();
$('.nav-push').localScroll();
$('.js-arrow-scroll').localScroll();
$('.nav-t2-item').localScroll();
$('.nav-t-item').localScroll();
$('.arrow').localScroll();
$('.js-smooth-scroll').localScroll();

$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});