$(function(){
	$("form").submit(function(event) {
		var birthDay = $("input[name=birthday]").val();
		var now = new Date();
		var born = new Date(birthDay);
		var born20LaterYear = born.getFullYear() + 20;
		born.setFullYear(born20LaterYear);
		if(born < now){
			$(".age-error").html("Bạn chưa đủ tuổi!");
			return false;
		}
		return true;
	});
});

