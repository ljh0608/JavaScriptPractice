// const x=1;

// function outer(){
//     const x=10;
//     const inner = function(){
//         console.log(x);
//     }

//     return inner;
// }

// const InnerFunction=outer();
// //outer 함수 생명주기 종료.

// InnerFunction(); // 10
//생명주기가 종료된 함수의 x가 console로 출력됨

// let num =0;
// const increase=function(){
//     return ++num;
// };


// const increase=(function(){
//     let num=0;

//     //클로저
//     return function(){
//         return ++num;
//     };
// }());

// console.log(increase()); //1
// console.log(increase()); //2
// console.log(increase()); //3


// const counter =(function(){
//     let counter=0;

//     // 함수를 인수로 전달받는 클로저를 반환
//     return function(aux){
//         // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
//         counter=aux(counter);
//         return counter;
//     }
// }());

// //보조함수
// function increase(n){
//     return ++n;
// }

// //보조함수
// function decrease(n){
//     return --n;
// }

// //보조 함수를 전달하여 호출

// console.log(counter(increase)); //1
// console.log(counter(increase)); //2

// console.log(counter(decrease)); //1
// console.log(counter(decrease)); //0


var funcs=[];

for(var i=0;i<3;i++){
    funcs[i]=function(){return i;};
}

for(var j=0;j<funcs.length;j++){
    console.log(funcs[j]());
}