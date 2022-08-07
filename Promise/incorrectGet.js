
// let todos;

const { ɵpatchComponentDefWithScope } = require("@angular/core");

// const get= url=>{
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET',url);
//     xhr.send();

//     xhr.onload=()=>{
//         if(xhr.status===200){
//             //상위 스코프 변수에 할당
//             todos= JSON.parse(xhr.response);
//         }
//         console.error(`${xhr.status} ${xhr.statusText}`);
//     };
// };

// get('https://jsonplaceholder.typicode/com/posts/1');
// console.log(todos); //undefined

// const get=(url,successCallback, failureCallback)=>{
//     const xhr=new XMLHttpRequest();
//     xhr.open('GET',url);
//     xhr.send();

//     xhr.onload=()=>{
//         if(xhr.status===200){
//             //성공했을 때 서버의 응답을 콜백 함수 인수로 전달 호출
//             successCallback(JSON.parse(xhr.response));
//         }else{
//             //실패했을 때 에러 정보를 콜백함수 인수로 전달 호출
//             failureCallback(xhr.status);
//         }
//     };
// };

// get('https://jsonplaceholder.typicode.com/posts/1',console.log, console.error);
//  //{userId: 1, id: 1, title: "sunt aut ...}

try{
    setTimeout(()=>{
        throw new Error('Error!');
    },1000);
}catch(e){
    //에러를 캐치하지 못한다.
    console.log('캐치한 에러',e);
}





