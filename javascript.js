$(document).ready(function(){
  $("#header,#sobreMi,#portafolio, #footer, hr").hide();
  $("#explorar").click(function(){
    $("#header, #sobreMi,#portafolio, #footer, hr").show();
    $(this).hide();
  });
});
