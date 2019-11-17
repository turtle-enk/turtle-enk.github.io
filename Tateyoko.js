// CSSのURLを定義
    // 縦書きCSS
    var tatecssurl= 'http://turtle-enk.github.io/tategaki.css';
    // 横書きCSS
    var yokocssurl= 'http://turtle-enk.github.io/yokogaki.css';
// メイン処理
$(document).ready(
    function() {
    // 縦書き横書き切り替え
        if (!Cookies.get('cookieTateyoko')) {
            // クッキー未登録時にlinkタグを診断してカレントクラスを付与
                if ($("#novelTateyoko").attr("href").match('/tategaki/')) {
                    $('#btn_tategaki').addClass('current');
                } else {
                    $('#btn_yokogaki').addClass('current');
                }
        } else if (Cookies.get('cookieTateyoko') == 'tategaki') {
            // クッキー縦書き登録であれば縦書き表示にクラス付与
                $('#btn_yokogaki').removeClass('current');
                $('#btn_tategaki').addClass('current');
            // 縦書きCSSを読み込み設定
                $("#novelTateyoko").attr("href" , tatecssurl);
        } else if (Cookies.get('cookieTateyoko') == 'yokogaki') {
            // クッキー横書き登録であれば縦書き表示にクラス付与
                $('#btn_tategaki').removeClass('current');
                $('#btn_yokogaki').addClass('current');
            // 横書きCSSを読み込み設定
                $("#novelTateyoko").attr("href" , yokocssurl);
        }
    // 縦書き設定ボタン押下時にカレントクラスを付与
        $("#btn_tategaki").click(function () {
        // ボタンにカレントクラスを付与
            $("#btn_tategaki").addClass('current');
            $("#btn_yokogaki").removeClass('current');
        // 縦書きCSSを読み込み設定
            $('#novelTateyoko').attr({href:tatecssurl});
        // クッキーに選択結果を登録する
            Cookies.set('cookieTateyoko', 'tategaki', { expires: 7 });
        });
    // 横書き設定ボタン押下時にカレントクラスを付与
        $("#btn_yokogaki").click(function () {
        // ボタンにカレントクラスを付与
            $("#btn_yokogaki").addClass('current');
            $("#btn_tategaki").removeClass('current');
        // 横書きCSSを読み込み設定
            $('#novelTateyoko').attr({href:yokocssurl});
        // クッキーに選択結果を登録する
            Cookies.set('cookieTateyoko', 'yokogaki', { expires: 7 });
        });
    }
);
