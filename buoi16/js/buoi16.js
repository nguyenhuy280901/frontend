$(function(){
	$("#id2").click(function(event) {
		/* Act on the event */
		$("#id1").hide();
	});
	$("#id3").click(function(event) {
		/* Act on the event */
		$("#id1").show();
	});
	$("#id4").click(function(event) {
		/* Act on the event */
		$("#id1").toggle();
	});
	$("#id6").click(function(event) {
		/* Act on the event */
		var x = $("#id5").html();
		alert(x);
	});
	$("#id7").click(function(event) {
		/* Act on the event */
		$("#id5").html("Hello ta đây");
	});
	$("#id9").click(function(event) {
		/* Act on the event */
		var x = $("#id8").text();
		alert(x);
	});
	$("#id11").click(function(event) {
		/* Act on the event */
		var x = $("#id10").val();
		alert(x);
	});
	$("#id13").click(function(event) {
		/* Act on the event */
		$("#id12").append('z');
	});
	$("#id14").click(function(event) {
		/* Act on the event */
		$("#id12").prepend('z');
	});
	$("#id16").click(function(event) {
		/* Act on the event */
		$("#id15").remove();
	});
	$("#id18").click(function(event) {
		/* Act on the event */
		$("#id17").empty();
	});
	$("#id20").click(function(event) {
		/* Act on the event */
		$("#id19").attr("class","");
		$("#id19").addClass('den-do');
	});
	$("#id21").click(function(event) {
		/* Act on the event */
		$("#id19").attr("class","");
		$("#id19").addClass('den-xanh');
	});
	$("#id22").click(function(event) {
		/* Act on the event */
		$("#id19").attr("class","");
		$("#id19").addClass('den-vang');
	});
	$("#id24").click(function(event) {
		/* Act on the event */
		$("#id23").addClass('den-xanh');
	});
	$("#id25").click(function(event) {
		/* Act on the event */
		$("#id23").removeClass('den-xanh');
	});
	$("#id26").click(function(event) {
		/* Act on the event */
		$("#id23").toggleClass('den-xanh');
	});
	$("#id28").click(function(event) {
		/* Act on the event */
		$("#id27").css('background-color', 'orange');
	});
	$("#id29").click(function(event) {
		/* Act on the event */
		$("#id27").css({'background-color': 'yellow','color': 'white'});
	});
	$("#id31").click(function(event) {
		/* Act on the event */
		var el = $("#id30").parent();
		el.css('border','1px solid black');
	});
	$("#id33").click(function(event) {
		/* Act on the event */
		var els = $("#id32").parents();
		alert(els.length);
	});
	$("#id35").click(function(event) {
		/* Act on the event */
		var els = $("#id34").children();
		alert(els.length);
	});
	$("#id36").click(function(event) {
		/* Act on the event */
		var els = $("#id34").find("*");
		alert(els.length);
	});
	$("#id38").click(function(event) {
		/* Act on the event */
		var els = $("#id37").siblings();
		alert(els.length);
	});

	$("#id40").click(function(event) {
		/* Act on the event */
		var el = $("#id39").next();
		el.css('background-color','red');
	});
	$("#id41").click(function(event) {
		/* Act on the event */
		var el = $("#id39").nextAll();
		el.css('background-color','blue');
	});
	$("#id42").click(function(event) {
		/* Act on the event */
		var el = $("#id39").prev();
		el.css('background-color','green');
	});
	$("#id43").click(function(event) {
		/* Act on the event */
		var el = $("#id39").prevAll();
		el.css('background-color','yellow');
	});
	$("#id45").click(function(event) {
		/* Act on the event */
		var x = $("#id44").width();
		var y = $("#id44").innerWidth();
		var z = $("#id44").outerWidth();
		var o = $("#id44").outerWidth(true);
		alert(x);
		alert(y);
		alert(z);
		alert(o);
	})
	$("#id46").click(function(event) {
		$("#id44").width('400px');
		var x = $("#id44").width();
		alert(x);
	});
});