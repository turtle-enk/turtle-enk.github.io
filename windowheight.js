$(document).ready(function () {
  hsize = $(window).height();
  $("body").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $("body").css("height", hsize + "px");
});
