window.onload = function(){
	var linkID = "mix";	// リンクを設定するタグのID
	var linkURL = "/jodre/category.php?cid=1";
	var baseTag = document.getElementById(linkID);
	var link1 = baseTag.firstChild.nodeValue;
	var aTag = document.createElement("a");
	aTag.href = linkURL;
	aTag.appendChild(document.createTextNode(link1));
	baseTag.replaceChild(aTag, baseTag.firstChild);
}
