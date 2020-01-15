$(function() {
  // button要素をクリックしたら発動
  $('#button1').click(function() {
 
//クッキー登録
$.cookie('cookie1', 'tate1', { expires: 7 });

    // 所定の要素のテキストを書き換える
  $('#tatecss').html('<link rel="stylesheet" href="//turtle-enk.github.io/tategaki.css" type="text/css" id="tatelink">');

});
});

$(function(){
// クッキーがあったらタグ挿入
    if ($cookie("cookie1")){
        $('#tatecss').html('<link rel="stylesheet" href="//turtle-enk.github.io/tategaki.css" type="text/css" id="tatelink">')};
});
$(function() {
 
 // button要素をクリックしたら発動
  $('#button2').click(function() {

  // pの子要素以下を削除
  $('#tatecss').empty();

    $.removeCookie("cookie1");
});
});
