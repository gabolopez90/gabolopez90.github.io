$(document).ready(function(){
  $("#header,#sobreMi,#portafolio, #footer, hr").hide();
  $("#explorar").click(function(){
    $("#sobreMi,#portafolio, #footer, hr").show();
    $(this).hide();
  });
});
