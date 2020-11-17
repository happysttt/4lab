let zadanie5=function(x){
	let sum=1;
	let ch=1;
	let fl;
	for (var i = 1; i < x+1 && Math.abs(fl)>=0.0001; i++) {
		for (var j=1; j<i+1; j++) {
			ch=ch*j;
		}
		sum+=(x**i/ch);
		fl=(x**i/ch);
		ch=1;
	}
	alert(Math.abs(Math.exp(x)-sum))
	console.log(Math.abs(Math.exp(x)-sum))
}