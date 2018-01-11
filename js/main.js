$(".work-grid a").on("click", function(eventobj){
	var id=$(this).attr("href");

	$(".portfolio-wrapper").attr("data-state","close");
	$(id) .attr("data-state","open");
	$(window).resize();
})

var $win = $(window);
var $compass = $('.compass');
var $main = $('.main');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$compass.css('transform', 'rotate(' + scrollPos / 1 + 'deg)');
	$main.css('background-position', 'center ' + scrollPos / 3 + 'px');
});
