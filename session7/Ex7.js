function ChanLe(n){
	if (n % 2 == 0) {
		document.write(  n + " la so chan");
		document.write("<br>");
	}
	else{
		document.write( n + " la so le");
		document.write("<br>");
	}
}
ChanLe(6);

function KTFibo(x){
	var a = 1;
	var b = 1;
	var c;
		while((a+b) <= x) {
			c = a + b;
			a = b;
			b = c;
		}
	if (c == x) {
		document.write(x + " la so fiBO ");
		document.write("<br>");
	}
	else
	{
		document.write(x + " khong la so fiBO ");
		document.write("<br>");
	}
}
KTFibo(8);
function KTSoChinhPhuong(n){
	var i=0;
	while (i*i <= n) {
		if ((i*i) == n) {
			document.write(n +' la so chinh phuong');
			document.write("<br>");
		}
		
		i++;
	}
			document.write(n +' khong la so chinh phuong');
			document.write("<br>");
}
KTSoChinhPhuong(5);