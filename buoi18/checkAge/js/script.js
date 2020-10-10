$(function(){
	$("form").submit(function(event) {
		var birthDay = $("input[name=birthday]").val();
		var now = new Date();
		var year = now.getFullYear();
		var born = new Date(birthDay);
		var bornYear = born.getFullYear();
		var age = year - bornYear;
		if(age < 20){
			$(".age-error").html("Bạn chưa đủ tuổi!");
			return false;
		}
		return true;
	});
});

