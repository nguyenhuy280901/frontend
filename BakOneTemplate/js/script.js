$(function(){
	$(window).scroll(function(event) {
		if ($(this).scrollTop()) {// > 1: true
			//se hien ra nut back to top
			$(".back-to-top").show("slow");
		}
		else {
			//tat no di
			$(".back-to-top").hide("slow");
		}

		//Ẩn/hiện MenuTop
		if($(this).scrollTop() >= $("#portfolio").offset().top){
			$("header nav").addClass('navbar-fixed-top');
			$("body").addClass('fixed-top');
		}
		else{
			$("header nav").removeClass('navbar-fixed-top');
			$("body").removeClass('fixed-top');
		}
	});
	$(".back-to-top").click(function(event) {
		$("html").animate(
		{
			scrollTop: 0
		},
		1000
		);
	});
	activeButton(".portfolio button:first-of-type");
	$(".portfolio button").click(function(event) {
		$(".portfolio button").removeAttr('style');
		activeButton(this);
		var data = $(this).attr('data');
		if(!data){
			$(".portfolio .row>div").show("slow");
		}
		else{
			$(".portfolio .row>div[data=" + data + "]").show("slow");
			$(".portfolio .row>div").not("[data=" + data + "]").hide("slow");
		}		
	});
	//Click trên menu, sẽ target đến id tương ứng
	$('header nav ul li a').on('click',function (e) {
		e.preventDefault();//ngăn chạn chạy đến vùng có id
		var target = this.hash;//#portfolio
		if (target) {
			$target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
				}, 500, 'swing', function () {
					window.location.hash = target;//#portfolio
			});
		}
	});

});

function activeButton(button){
	$(button).css('background-color','yellow');
}