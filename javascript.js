$(document).ready(function(){
  $("#header, #sobreMi, #habilidades, #portafolio, #footer, #bot,hr").hide();
  $("#explorar").click(function(){
    $("#header, #sobreMi, #habilidades, #portafolio, #footer, #bot, hr").fadeTo("slow",1);
    $(this).fadeOut('slow');
  });
  //Burger to X toggle
  $(".navbar-toggle").click(function(){
    $(this).toggleClass("open");
  });
  //Smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
