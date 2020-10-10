$(function(){
	$("select").change(function(event) {
		var email = $(this).val();
		if(email == ""){
			return;
		}
		var trs = $("table>tbody>tr");
		for(var i = 0; i <= trs.length - 1; i++) {
			var tds = $(trs[i]).children();
			if (email == $(tds[0]).text()) {
				$(".error").html(email + " đã tồn tại");
				$(trs).removeAttr('style');
				$(trs[i]).css('background-color','yellow');
				return;
			}
		}
		$(trs).removeAttr('style');
		$(".error").html("");
		
		var tr = 	"<tr>" +
						"<td>" + email + "</td>" +
						"<td>"	+
							"<input type='hidden' value='"+ email +"' name= 'email[]'>" +
							"<button type='button' onclick='deleteRow(this)'>x</button>" +
						"</td>" +
					"</tr>";
		
		$("table>tbody").append(tr);
	});
	$("form").submit(function(event) {
		if($("table>tbody>tr").length == 0){
			$(".error").html("Vui lòng chọn email!!");
			$("select").focus();
			return false;
		}
	});

});

function deleteRow(button){
	$(button).parent().parent().remove();
}

