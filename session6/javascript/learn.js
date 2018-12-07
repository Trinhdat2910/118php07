 
// function FunctionName() {
// 	document.write("test funtion!");

// }
// FunctionName();
// function TestFunction(a, b) {
// 	return a +b ;
// }
// 	document.write('</br>');
// 	document.write(TestFunction(4, 5));
// 	document.write('</br>');
// 	document.write(TestFunction(7,8));
// 	document.write('</br>');
// 	document.write(TestFunction(10));

function fibo(n){
	var a=1;
	var b=1;
	var c;
	document.write(a);
	document.write("</br>");
	document.write(b);
	document.write("</br>");
		for (var i = 1; i <= n; i++) {
			c= a + b;
			document.write(c);
			document.write("</br>");
			a=b;
			b=c;
		}
			
			
	
}
	fibo(100);