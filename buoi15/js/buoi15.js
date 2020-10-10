var a = [5, 9, 4, 100, 20];
// alert(a[3]);
a[3] = 150;
// alert(a);

var b = {masv: 1257, ten: "Nguyen Van A", gioitinh: "Nam"};
// alert(b['masv']);
// b["masv"] = 1258;
// console.log(b);

// b.masv = 1259;
// console.log(b);
// += là cộng dồn

x = [5, 9, 10, 50];
var sum = 0;
for(var i = 0; i <= 3; i++){
	sum += x[i];
}
// alert(sum);

var y = {masv: 1257, ten: "Nguyen Van A", gioitinh: "Nam"};
for(p in y){
	// alert(y[p]);
}

var x = [5, 9, 10, 50];
condition = true;
sum = 0;
var i = 0;
while(condition) {
	sum += x[i];
	i++;
	if (i >= 4) {
		condition = false;
	}
}
// alert(sum);
//code ở dòng được đặt breakpoint chưa được chạy
x = [5, 9, 10, 50];
condition = true;
sum = 0;
i = 0;
do {
	sum = sum + x[i];
	i++;
	if (i >= 4) {
		condition = false;
	}
}
while(condition);
// alert(sum);

function tong(a, b){
	var c = a + b;
	return c;
}

function tongday(a, b){
	var sum = 0;
	for(var i = a; i <= b; i++){
		sum += i;
	}
	return sum;
}

// var k = tongday(1,5);
// alert(k);

var x = [5, 9, 10, 50];
var sum = 0;
for (var i = 0; i <= x.length - 1; i++) {
//code here
// sum = sum + x[i];
sum += x[i];
}
alert(sum);










