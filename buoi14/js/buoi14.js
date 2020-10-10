var a = 5 //variable: biến
//gắn 5 cho biến a
//a có giá trị là 5
// alert(a);
a = 7;
// alert(a);

const PI =3.14;//constant: Hằng số
// PI = 3.15; //sai
// alert(PI);
// console.log(PI);
// document.write(PI);
var span = document.getElementById('id1');
span.innerHTML = PI;
var x = 8;
//Biến x có giá trị là 8
//Biến x có kiểu dữ liệu là number
var y = "Hello";
var z = 'Hello';
// alert(y);
// alert(z);

var m = true;
// alert(m);

var n = [7,100,2,8,9];
// Tập hợp các phần tử có thứ tự
// Các phần tử cách nhau bằng dấu phẩy
// Đặt điểm của array là dùng ngoặc vuông
// index, key: chỉ số phần tử
// Chỉ số của phần tử tính từ 0
n[1] = 200;
// alert(n);

var p = {masv: 579, ten: "Nguyen Van A", gioitinh: "nam"};
// Các thuộc tính cách nhau bằng dấu phẩy
// Đặt điểm của object là dùng ngoặc nhọn
// Trước dấu : là tên thuộc tính
// Sau dấu : là giá trị thuộc tính
// alert(p["masv"]);
p.masv = 580;
// console.log(p);

// var t;
// alert(t);

var b = false;
// alert(b);
// if(!b){
// 	document.write("[!] Chạy code trong thân if");
// }else{
// 	document.write("[!] Chạy code trong thân else");
// }
// document.write("<br>");

// var c = false;
// var d = true;
// // ||
// if (c || d) {
// document.write("[||] Chạy code trong thân if");
// }
// else {
// document.write("[||] Chạy code trong thân else");
// }
// document.write("<br>");

// // &&
// if (c && d) {
// document.write("[&&] Chạy code trong thân if");
// }
// else {
// document.write("[&&] Chạy code trong thân else");
// }
// document.write("<br>");

// var e = true;
// var f = false;
// var t = true;
// var w = false;
// if ((e&&w) || (f&&t) || (e&&t) && !f) {
// document.write("[Phức tạp] Chạy code trong thân if");
// }
// else {
// document.write("[Phức tạp] Chạy code trong thân else");
// }
// if (3 < 4) {
// 	document.write("[<]: 3 nhỏ hơn 4");
// }
// document.write("<br>");

// if (1 == "1") {
// 	document.write("[==]: 1 bằng \"1\"");
// }
// document.write("<br>");
// // 1 === "1"
// if (1 === "1") {
// document.write("[===]: 1 bằng \"1\"");
// }else {
// document.write("[===]: 1 không bằng \"1\"");
// }
// //Dùng dấu \ để bỏ qua ký tự đặc biệt

// var a = 7;
// var b = 9;
// if (a < b ) {
// document.writeln(" a < b");
// }
// else {
// document.writeln("a >= b");
// }
// document.write("<br>");
// var day = "monday"
// switch (day) {
// 	case "monday":
// 		document.write("monday");
// 		// break;
// 	case "tuesday":
// 		document.write("tuesday");
// 		break;
// 	default:
// 		document.write("Hôm nay không phải là monday hoặc tuesday");
// 		break;
// }
// let name = "Typescript";
// let price = 55;

// let el = document.getElementById('mContent');
// let str = `Khóa Học ${name}. Giá ${price} USD`;
// el.innerHTML = str;
// let act = {
// 	id: 654,
// 	name: "Learn Code",
// 	status: false
// }
// let el = document.getElementById('mContent');
// el.innerHTML = `<div id="act-id-${act.id}">
// 					<i class="${act.status == true ? 'fas fa-check' : ''}"></i>
// 					<span>${act.name}</span>
// 				</div>`

// let courseWeb 		= ["HTML", "CSS", "Js"];
// let courseMobile 	= ["Android", "IOS"];
// let course			= ["PHP", "jQuery", ...courseWeb, "Wordpress", ...courseMobile];
// console.log(course);

let abc = [9, 8, 10, 5, 1, 3, 2];

console.log(
	abc.sort(
		(x,y) => x < y ? true : false
	)
);












