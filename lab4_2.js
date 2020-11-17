let s=''
let zadanie2=function(n){
    for(let i=0;i<n;i++){
        s=''
        for(let j=0; j<n-1-i; j++)
            s+=" "
        for(let h=0; h<1+2*i; h++)
            s+="#"
        console.log(s)
    }
}