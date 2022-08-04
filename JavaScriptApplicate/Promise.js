function isPositive(number, resolve, reject){
    setTimeout(()=>{
        if(typeof number==="number"){
            resolve(number>=0?"양수":"음수");
        }else{
            reject("주어진 값이 숫자형 값이 아닙니다");
        }
    },2000);
}

isPositive("dsad",(res)=>{
    console.log('성공적으로 수행됨 :',res);
},(err)=>{
    console.log('실패 :',err);
});