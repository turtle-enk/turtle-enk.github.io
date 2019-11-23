$(document).ready(function () {
  hsize = $(window).height();
  $("main").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $("main").css("height", hsize + "px");
});
