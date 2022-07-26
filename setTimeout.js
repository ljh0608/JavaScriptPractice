

//3초 후 타이머가 만료되면 콜백 함수 호출
setTimeout(()=>console.log('Hi~~'), 3000); //Hi~~

// 콜백 함수에 Lee가 인수로 전달됨
setTimeout((name)=>console.log(`Hi~~${name}`), 1000,'Lee'); //Hi~~Lee


//setTimeout 함수가 반환한 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소
const timerid=setTimeout(() => {
    console.log('취소용 타이머'); //출력되지 않음
}, 1000);

 clearTimeout(timerid); //타이머 취소



