
let zadanie4=function(n){
    let sum1=0;
    let sum2=0;
    if(n>=10**12 && n<10**16){
        let k=n;
        let l=n;
        let ch=0;
        while(l>0){
            l=(l-(l%10))/10;
            ch++
        }
        for(let i=0;i<ch;i++){
            if(i%2==0){
                sum1+=k%10;
                k=(k-(k%10))/10;
            }else{
                if((k%10)*2>9)
                    sum2=sum2+(((k%10)*2)%10+((k%10)*2-((k%10)*2)%10)/10)
                else
                    sum2+=k%10*2;
                k=(k-(k%10))/10;
            }
        }
        if((sum1+sum2)%10==0){
            console.log("true")
            alert("true")
        }
        else{
            console.log("false")
            alert("false")
        }
    }
    else{
        console.log("неправильное количество цифр")
        alert("неправильное количество цифр")
    }
}