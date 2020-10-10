var n = [1,0,0];
function clickButton(a){
	var para = document.getElementsByClassName('paragraph')
	var i = document.getElementsByTagName('i');
	if(n[a] == 0){
		para[a].style.setProperty("display","block");
		i[a].classList.add('fa-angle-up');
		i[a].classList.remove('fa-angle-down');
		n[a]++;
	}
	else{
		para[a].style.setProperty("display","none");
		i[a].classList.add('fa-angle-down');
		i[a].classList.remove('fa-angle-up');
		n[a]--;
	}
}