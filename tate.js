function setMyCookie() {
  myCookieVal = $('p').hasClass('tate') ? 'isActive' : 'notActive';
  $.cookie('myCookieName', myCookieVal, { expires: 365, path: '/' });
}
var flg = "off";
$("#js-switch-mode").click(function () {
  $('p').toggleClass('tate');
  $(this).toggleClass('is-active');
  if(flg == "off"){
    $(this).html("");
    flg = "on";
  }else{
    $(this).html("");
    flg = "off";
  }
  setMyCookie();
});
