// windows load function to show the desired News
$(document).ready(function(){
	var a = window.location.search;
	var b = a.substring(a.indexOf("=")+1);
	document.getElementById("demo").innerHTML = b;
	$("#demo").attr("href", '#'+b);
	$("#demo").tab('show');
});
$(".widget a").click(function(){
	document.getElementById("tabShow").scrollIntoView();
	$(this).tab('show');
});