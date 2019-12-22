$(function(){
// クッキーがあったらタグ挿入
    if ($.cookie("cookie1")){
        var txt = $('#honbun').html();
  $('#honbun').html(
    txt.replace(/ “/g,'〝')
       .replace(/” /g,'〟')
  );
});
