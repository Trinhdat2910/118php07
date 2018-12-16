function show() {
	document.getElementById('show').style.display = ('block');
	var male= document.getElementById('male').checked;
	var female= document.getElementById('female').checked;
			if (male) {
				document.getElementById('hinh').src="img/male.jpg";
			}
			else if (female) {
				document.getElementById('hinh').src="img/female.jpg";
			}
	var name= document.getElementById('name').value;
	document.getElementById('hoten').innerHTML = name;
	var age= document.getElementById('age').value;
	document.getElementById('tuoi').innerHTML = age;
	if (age > 1998) {
		document.getElementById('show').style.background = ('yellow');
	}
	else if (age < 1998) {
		document.getElementById('show').style.background = ('green');
	}
}