let zadanie3=function(m,n){
	let min;
	let x;
    if(m>n)
        min=n;
    else
        min=m;
    for(let i=1; i<min+1; i++){
        if(n%i==0 && m%i==0)
            x=i;
    }
    alert(x);
    console.log(x);
}