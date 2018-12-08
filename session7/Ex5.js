for (var i = 1; i <= 100; i++) {
	if((i % 5 == 0) && (i % 3 == 0))
	{
		document.write("so" + i + " chia het cho 15");
		document.write("<br>");
	}
	else if (i % 5 == 0) {
		document.write("so" + i + " chia het cho 5");
		document.write("<br>");
	}
	else if (i % 3 == 0) {
		document.write("so" + i + " chia het cho 3");
		document.write("<br>");
	}

}