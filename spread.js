
// //배열, 문자열, Map 등은 이터러블이다.
// console.log(...[1,2,3]); //1 2 3

// console.log(...'HELLO'); // H E L L O

// console.log(...new Map([['a','1'], ['b', '2']])); //[ 'a', '1' ] [ 'b', '2' ]



// //스프레드 문법 제공 이전
// var arr=[1,2,3];
// //apply 함수의 2번째 인수(배열)은 apply함수가 호출하는 함수의 인수 목록
// //배열이 펼쳐져서 인수로 전달되는 효과가 있음
// var max= Math.max.apply(null,arr);
// console.log(max); //3

// //스프레드 문법 사용
// const array=[1,2,3];
// var max2 =Math.max(...array);
// console.log(max2); //3


// //ES5
// var arr1=[1,2].concat([3,4]);
// console.log(arr1); //[ 1, 2, 3, 4 ]

// //ES6
// const arr2 =[...[1,2],...[3,4]];
// console.log(arr2); //[ 1, 2, 3, 4 ]


// //ES5
// var arr1 =[1,4];
// var arr2=[2,3];

// Array.prototype.splice.apply(arr1,[1,0].concat(arr2));
// console.log(arr1); //[ 1, 2, 3, 4 ]

// //ES6
// var arr3=[1,4];
// var arr4=[2,3];

// arr3.splice(1,0,...arr2);
// console.log(arr3); //[ 1, 2, 3, 4 ]

// //ES5
// var origin=[1,2];
// var copy=origin.slice();
// console.log(copy);

// //ES6
// var origin2=[1,2];
// var copy2=[...origin2];
// console.log(copy2);

// console.log(copy===origin); //false
// console.log(copy2===origin2); //false


// //ES5
// function sum(){
//     //이터러블이면서 유사 배열 객체인 arguments을 배열로 반환
//     var args=Array.prototype.slice.call(arguments);

//     return args.reduce(function(pre, cur){
//         return pre + cur;
//     },0);
// }

// console.log(sum(1,2,3)); //6

// //ES6
// function sum(){
//     //이터러블이면서 유사배열 객체인 arguments를 배열로 반환
//     return [...arguments].reduce((pre,cur)=>pre+cur,0);
// }

// console.log(sum(1,2,3)); //6


// const sum=(...args)=>args.reduce((pre,cur)=>pre+cur,0);

// console.log(sum(1,2,3)); //6

// //스프레드 프로퍼티
// // 객체 복사 (얕은 복사)
// const obj={x:1,y:2};
// const copy={...obj};

// console.log(copy);
// console.log(obj===copy); //false

// // 객체 병합
// const merged= {x:1,y:2, ...{a:3,b:4}};

// console.log(merged); //{ x: 1, y: 2, a: 3, b: 4 }


// //객체 병합 중복되는 경우 뒤에 위치한 프로퍼티 우선권가짐
// const merged={...{x:1,y:2},...{y:100,z:50}};
// console.log(merged); //{ x: 1, y: 100, z: 50 }

// //특정 프로퍼티 변경
// const changed={...{x:1,y:2},y:100};
// console.log(changed); //{ x: 1, y: 100 }

// //프로퍼티 추가
// const added={...{x:1,y:2},z:0};
// console.log(added); //{ x: 1, y: 2, z: 0 }
