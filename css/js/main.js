var $navBtn = $('.toggle-button');
var $nav = $('.toggle-nav');

$navBtn.on('click', function () {
	$nav.toggleClass('toggle-nav-open');
})
