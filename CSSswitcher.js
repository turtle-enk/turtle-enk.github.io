/*
* CssSwitcher 0.0.2
* Copyright (c) 2010-2011 thingsym (www.thingslabo.com)
* $Date: 11.06.27 13:56:41 $
* $Rev: 005 $
* Dual licensed under the MIT and GPL licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/

var CssSwitcher = {
  // Settings
  cssPath : "", // http://domain/path/to/css/
  idList : [ 'hoge', 'hoge' ], // List up id attribute of 'stylesheet' rel attribute
  // Cookie Settings
  domain : "",
  path : "/",
  expires : 7, // days or a Date object Wdy, DD-Mon-YYYY HH:MM:SS GMT (ex. Fri, 01-Dec-2010 20:40:03 GMT)
  secure : 0, // 0 or 1

  change : function(json) {
    for (var i=0; i<json.length; i++){
      var $ = document.getElementById(json[i].id);
      if ($ && json[i].theme) {
        $.href = this.cssPath + json[i].theme + ".css";
      }
    }

    var cookieVal = [];
    for (var i=0; i<this.idList.length; i++) {
      var match_id;
      for (var j=0; j<json.length; j++) {
        if (this.idList[i] == json[j].id) {
          cookieVal.push(["{'id':'", json[j].id, "'\,'theme':'", json[j].theme, "'}"].join(''));
          match_id = json[j].id;
          break;
        }
      }

      for (var j=0; j<this.json.length; j++) {
        if (this.idList[i] == this.json[j].id && this.idList[i] != match_id) {
          cookieVal.push(["{'id':'", this.json[j].id, "'\,'theme':'", this.json[j].theme, "'}"].join(''));
        }
      }
    }

    var expires;
    if (typeof this.expires == 'number') {
      var date = new Date();
      date.setTime(date.getTime() + (this.expires * 24 * 60 * 60 * 1000) );
      expires = ';expires=' + date.toUTCString();
    }
    else {
      expires = ';expires=' + this.expires;
    }
    var path = this.path ? '; path=' + this.path : '';
    var domain = this.domain ? '; domain=' + this.domain : '';
    var secure = this.secure ? '; secure' : '';

    document.cookie = ['CssSwitcher=', encodeURIComponent('['+cookieVal+']'), expires, path, domain, secure].join('');
    this.getJSON();
  },

  getJSON : function() {
    var cookieKey = "CssSwitcher=";
    var cookies = document.cookie + ";";
    var start = cookies.indexOf(cookieKey);
    if (start != -1) {
      var end = cookies.indexOf(";",start);
      var value = decodeURIComponent(cookies.substring(start + cookieKey.length, end));
      this.json = eval(value);
    }
    else {
      this.json = eval([{}]);
    }
  },

  init : function() {
    window.onunload = function() {};
    this.getJSON();
    this.change(this.json);
  }

}

CssSwitcher.init();
