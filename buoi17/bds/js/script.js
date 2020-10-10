$(function(){
	activeButton("button:first-child");
	$("button").click(function(event) {
		/* Act on the event */
		var data = $(this).attr("data");
		$("img").attr("src","img/" + data + ".png");
		activeButton(this);
	});
});

function activeButton(selector){
	// $("button").attr("style","");
	$("button").removeAttr('style');
	$(selector).css("background-color", "orange");
}