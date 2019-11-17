function setMyCookie() {
  myCookieVal = $('p').hasClass('tate') ? 'isActive' : 'notActive';
  $.cookie('myCookieName', myCookieVal, { expires: 365, path: '/' });
}
var flg = "off";
$("#tate").click(function () {
  $('p').toggleClass('tate');
  $(this).toggleClass('is-active');
  if(flg == "off"){
    $(this).html("<input type="button" value="縦書き" onclick="changeStyle('');">");
    flg = "on";
  }else{
    $(this).html("<input type="button" value="横書き" onclick="changeStyle('');">");
    flg = "off";
  }
  setMyCookie();
});
