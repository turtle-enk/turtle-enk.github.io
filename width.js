$windowWidth = window.screen.width; // 画面の横幅
$breakPoint = 600;
 
isMobileSize = ($windowWidth <= $breakPoint);
isPcSize = ($windowWidth > $breakPoint);

if(isMobileSize){
//モバイルサイズの場合の記述
$("hmain").css("max-width", 100 + "%");}

if(isPcSize){
//PCサイズの場合の記述
$("hmain").css("max-width", 600 + "px");}
