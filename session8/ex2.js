function showImg(img){
	switch(img){
		case 'dct':
			document.getElementById('name').innerHTML = " University technology education ";
			document.getElementById('changeimg').src="img/dct.jpg";
			
			break;
		case 'email':
			document.getElementById('name').innerHTML = " Email";
			document.getElementById('changeimg').src="img/email.png";
			

			break;
		case 'insta':
			document.getElementById('name').innerHTML = " Instagram";
			document.getElementById('changeimg').src="img/Insta.png";
			break;
		case 'fb':
			document.getElementById('name').innerHTML = " Facebook";
			document.getElementById('changeimg').src="img/FB.png";
			break;
		default:
			break;
	}

}
function xem(){
	var yes_score= document.getElementById('yes_score').checked;
	var no_score= document.getElementById('no_score').checked;
			if (yes_score) {
				document.getElementById('roi').style.display = ('block');
			}
			else if (no_score) {
				document.getElementById('roi').style.display = ('none');
			}
}