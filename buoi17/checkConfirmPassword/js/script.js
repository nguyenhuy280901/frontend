$(function(){
	$("form").submit(function(event) {
		//Way 1
		/* 	var password = $("input[name=password]").val();
		var confirmPassword = $("input[name=confirm-password]").val(); */

		//Way 2
		var inputPassword = $("input[type=password]");
		var password = $(inputPassword[0]).val();
		var confirmPassword = $(inputPassword[1]).val();

		if(password.trim() == "" || confirmPassword.trim() == ""){
			$(".password-error").html("Vui lòng nhập Password!");
			return false;
		}
		
		if(password != confirmPassword){
			$(".password-error").html("Password không trùng khớp!");
			return false;
		}

		if(password.length < 8){
			$(".password-error").html("Password phải từ 8 ký tự trở lên!");
			return false;
		}

		var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		if (!re.test(password)) {
			$(".password-error").html("Password ít nhất 1 ký tự số, 1 ký đặc biệt, 1 ký tự chữ thường, một ký tự chữ hoa");
			return false;
		}
		return true;
	});
});

