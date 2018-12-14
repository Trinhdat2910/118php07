var m = 2000;
var p = 200;
var k=0;

while(m > 0){

	k++;
	if (k % 2 == 0) {
		k++;
	}
	m = m - p;
}
document.write('so keo mua duoc la : ' + k );