function Max(a , b , c , d){
	if ((a > b) && (a > c) && (a > d)) {
		document.write('Max: '+ a);
	}
	else if ((b > c) && (b > d)) {
		document.write('Max: '+ b);
	}
	else if (c > d) {
		document.write('Max: '+ c);
	}
	else {
		document.write('Max: '+ d);
	}
}
function Min(a , b , c , d){
	if ((a < b) && (a < c) && (a < d)) {
		document.write('Min: '+ a);
	}
	else if ( (b < c) && (b < d)) {
		document.write('Min: '+ b);
	}
	else if (c < d) {
		document.write('Min: '+ c);
	}
	else {
		document.write('Min: '+ d);
	}
}
Max(100,6,1,90);
Min(100,6,1,90);