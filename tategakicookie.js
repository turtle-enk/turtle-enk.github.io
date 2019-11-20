var event = $(#tate).get("changeStyle('//turtle-enk.github.io/tategaki.css');").onclick;

$(function(){
   if($.cookie("tate")){
      $("#tate").get("changeStyle('//turtle-enk.github.io/tategaki.css');").onclick = event;
  } else {
  $("#tate").get("changeStyle('//turtle-enk.github.io/tategaki.css');").onclick = "";
  
$("#tate").click(function() {
      $.cookie("tate" , "tate" , { expires: 30, path: "/" });
      }
$("#yoko").click(function() {
      $.removeCookie("tate" , { path: "/" });
    }
  return false;
  });
});
