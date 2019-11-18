function setMyCookie() {
  myCookieVal = $('p').hasClass('honbun') ? 'isActive' : 'notActive';
  $.cookie('myCookieName', myCookieVal, { expires: 365, path: '/' });
}
var flg = "off";
$("#js-switch-mode").click(function () {
  $('p').toggleClass('tate');
  $(this).toggleClass('is-active');
  if(flg == "off"){
    $(this).html("<button class='switch'></button>");
    flg = "on";
  }else{
    $(this).html("<button class='switch'></button>");
    flg = "off";
  }
  setMyCookie();
});
