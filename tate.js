/*
* CssSwitcher jQuery Plugin 0.0.2
* Copyright (c) 2010-2011 thingsym (www.thingslabo.com)
* $Date: 11.06.27 13:56:41 $
* $Rev: 002 $
* Dual licensed under the MIT and GPL licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html

* required jQuery 1.4.+ (http://docs.jquery.com/Downloading_jQuery)
* required Cookie Plugin (http://plugins.jquery.com/project/Cookie)
*/

var CssSwitcher = {
  // Settings
  cssPath : "", // http://domain/path/to/css/
  idList : [ 'tate', 'yoko' ], // List up id attribute of 'stylesheet' rel attribute
  // Cookie Settings
  domain : "",
  path : "/",
  expires : 7, // days or a Date object Wdy, DD-Mon-YYYY HH:MM:SS GMT (ex. Fri, 01-Dec-2010 20:40:03 GMT)
  secure : 0, // 0 or 1

  change : function(json) {
    for (var i=0; i<json.length; i++){
      if (json[i].theme) {
        $('#' + json[i].id).attr({href : this.cssPath + json[i].theme + ".css"});
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

    $.cookie('CssSwitcher', '['+cookieVal+']', { expires: this.expires, path: this.path, domain: this.domain, secure: this.secure });
    this.getJSON();
  },

  getJSON : function() {
    var value = $.cookie('CssSwitcher');
    if (value) {
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
