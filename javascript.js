$(document).ready(function(){
  $("#header,#sobreMi,#portafolio, #footer, hr").hide();
  $("#explorar").click(function(){
    $("#header, #sobreMi,#portafolio, #footer, hr").fadeTo("fast",1);
    $(this).fadeOut('slow');
  });
});
