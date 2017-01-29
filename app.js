//https://theysaidso.com/api/
$(document).ready(function(){
	$("#box").on("click", function(){
		$("#quote").html("http://quotes.rest/qod.json?category=art");
	});
});