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

function changePage(page)
{
  if ($(".main-page").css("display") != "none")
  {
    if (page == "side-projects")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".main-page").fadeOut("fast", function(){
          $(".side-projects-page").fadeIn(500);
        });
      });
    }
    else if (page == "about-me")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".main-page").fadeOut("fast", function(){
          $(".about-me-page").fadeIn(500);
        });
      });
    }
  }
  else if ($(".side-projects-page").css("display") != "none")
  {
    if (page == "home")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".side-projects-page").fadeOut("fast", function(){
          $(".main-page").fadeIn(500);
        });
      });
    }
    else if (page == "about-me")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".side-projects-page").fadeOut("fast", function(){
          $(".about-me-page").fadeIn(500);
        });
      });
    }
  }


  else if ($(".about-me-page").css("display") != "none")
  {
    if (page == "home")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".about-me-page").fadeOut("fast", function(){
          $(".main-page").fadeIn(500);
        });
      });
    }
    else if (page == "side-projects")
    {
      $('body').animate ({scrollTop:0}, 35, function()
      {
        $(".about-me-page").fadeOut("fast", function(){
          $(".side-projects-page").fadeIn(500);
        });
      });
    }
  }
}



$(function(){  // $(document).ready shorthand
  $('.cquinn').fadeIn('slow');
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
