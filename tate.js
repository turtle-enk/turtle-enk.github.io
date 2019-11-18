function setMyCookie() {
  myCookieVal = $('p').hasClass('tate') ? 'isActive' : 'notActive';
  $.cookie('myCookieName', myCookieVal, { expires: 365, path: '/' });
}
var flg = "off";
$("#js-switch-mode").on('click' function () {
  $('p').toggleClass('tate');
  $(this).toggleClass('is-active');
  if(flg == "off"){
    $(this).html("<i class='fas fa-moon'></i>");
    flg = "on";
  }else{
    $(this).html("<i class='fas fa-moon'></i>");
    flg = "off";
  }
  setMyCookie();
});
