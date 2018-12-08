function ngaythang(a, b){
	switch(a ){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			document.write("Thang ", a , " co 31 ngay");
			break;
		case 2:
			if ((b % 4 == 0) && (b % 100 != 0)) {
				document.write('Thang 2 nam ', b , " co 29 ngay");
			}else{
				document.write('Thang 2 nam ', b , " co 28 ngay");
			}
			break;
		default:
			document.write("Thang ", a , " co 30 ngay");
			break;
	}
}
	ngaythang(2,2020);