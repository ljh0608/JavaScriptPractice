// // 함수는 무명의 리터럴로 생성할 수 있다.
// // 함수는 변수에 저장할 수 있다.
// const increase= function(num){
//     return ++num;
// }

// const decrease = function(num){
//     return --num;
// }


// //함수는 객체에 저장할 수 있다.
// const auxs={increase, decrease};

// // 함수의 매개변수에 전달할 수 있다.
// // 함수의 반환값으로 사용할 수 있다.


// function makeCounter(aux) {
//     let num=0;

//     return function(){
//         num =aux(num);
//         return num;
//     };
// }


// const increaser = makeCounter(auxs.increase);
// console.log(increaser()); //1
// console.log(increaser()); //2

// const decreaser= makeCounter(auxs.decrease);
// console.log(decreaser()); //-1
// console.log(decreaser());  //-2




// function sum(){
//     let res=0;

//     for(let i=0;i<arguments.length;i++){
//         res+=arguments[i];
//     }
//     return res;
// }

// console.log(sum());     //0
// console.log(sum(1,2));  //3
// console.log(sum(1,2,3));//6



// const ArrayLikeObject = {
//     0: 'LEE',
//     1: 'Jae',
//     2: 'Hoon',
//     length:3,
// };


// for(let i=0;i<ArrayLikeObject.length;i++){
//     console.log(ArrayLikeObject[i]);
// }
// // LEE
// // Jae
// // Hoon


// ArrayLikeObject.push('KIM'); //무시 strict모드에서 에러
// ArrayLikeObject.1; //SyntaxError: Unexpected number



// function sum(){
//     //arguments 객체를 배열로 변환
//     const array= Array.prototype.slice.call(arguments);
//     return array.reduce(function (pre, cur){
//         return pre+ cur;
//     },0);
// }

// console.log(sum(1,2));          //3
// console.log(sum(1,2,3,4,5));    //15




// function sum(...args){
//    return args.reduce((pre,cur)=> pre+cur,0);
// }

// console.log(sum(1,2));          //3
// console.log(sum(1,2,3,4,5));    //15


// //추가 예시
// function bar(param1,param2,...args){
//     console.log(param1);    // 1
//     console.log(param2);    // 2
//     console.log(args);      // [ 3, 4, 5, 6 ]
// }

// bar(1,2,3,4,5,6);


function foo(){
    console.log(foo.length);
}

foo();  //0

function foo1(x,y,z){
    console.log(foo1.length);
}

foo1(); //3
