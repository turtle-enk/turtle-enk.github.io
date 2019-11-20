var event = $("#tate").get(0).onclick;

$(function(){
   if($.cookie("tate")){
      $("#tate").get(0).onclick = event;
  } else {
  $("#tate").get(0).onclick = "";
  
$("#tate").click(function() {
      $.cookie("tate" , "tate" , { expires: 30, path: "/" });
      });
$("#yoko").click(function() {
      $.removeCookie("tate" , { path: "/" });
    });
  return false;
  });
});
