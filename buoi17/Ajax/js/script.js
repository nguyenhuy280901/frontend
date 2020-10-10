$(function(){
	$("button").click(function(event) {
		$.ajax({
			url: 'getTime.php',
			type: 'GET',
		})
		.done(function(data) {
			$("span").html(data);
		})
		.fail(function() {
			alert("error");
		});
	});
});

