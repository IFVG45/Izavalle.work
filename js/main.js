window.addEventListener("hashchange", function (){
  if (window.location.hash.match(/#piece/)){
    document.documentElement.style.overflow ="hidden";
  }
  else {
    document.documentElement.style.overflow ="auto";
  }
});

if (window.location.hash.match(/#piece/)){
    document.documentElement.style.overflow ="hidden";
  }

function navigate(location) {
	$('body').animate ({scrollTop:$(location).offset().top}, 500);
}





$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var middle_of_object = $(this).position().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > middle_of_object ){

                $(this).animate({'opacity':'1'}, 500);
                $(this).removeClass('hideme');

            }

        });

    });

});

// $(document).ready(function(){
// 	$(".portfolio-piece-1").hover(function(event){
// 			var x = $(event.target).position().left;
// 			var y = $(event.target).position().top;
// 			var width = $(event.target).width();
// 			var height = $(event.target).height();

// 			$(".piece-hover").css({left: x});
// 			$(".piece-hover").css({top: y});
// 			$(".piece-hover").css({width: width});
// 			$(".piece-hover").css({height: height});


// 			$(".piece-hover").css({opacity: 1});

// 	}, function(event) {

// 	});
// });
