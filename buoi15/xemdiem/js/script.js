function xemKetQua(){
	var inputToan = document.getElementById('toan');
	var diemToan = Number(inputToan.value);
	var inputLy = document.getElementById('ly');
	var diemLy = Number(inputLy.value);
	var inputHoa = document.getElementById('hoa');
	var diemHoa = Number(inputHoa.value);

	var tongDiem = diemToan*2 + diemLy + diemHoa;
	var ketqua = document.getElementById("kq");
	if(tongDiem >= 30)	ketqua.innerHTML = "Đậu";
	else ketqua.innerHTML = "Rớt";
}