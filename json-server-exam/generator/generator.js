

// //제너레이터 함수 선언문
// function* genDecFunc(){
//     yield 1;
// }

// //제너레이터 함수 표현식
// const genExpFunc = function*(){
//     yield 1;
// }

// //제너레이터 메서드
// const obj={
//     *getObjMethod(){
//         yield 1;
//     }
// };

// //제너레이터 클래스 메서드
// class Myclass {
//     *getClassMethod(){
//         yield 1;
//     };
// }


// function* genFuc(){
//     try{
//     yield 1;
//     yield 2;
//     yield 3;
//     } catch(e){
//         console.error(e);
//     }
// }

// const generator =genFuc();

// console.log(generator.next()); //{ value: 1, done: false }
// console.log( generator.return('end!end!')); //{ value: 'end!end!', done: true }



// function* genFuc(){
//     try{
//     yield 1;
//     yield 2;
//     yield 3;
//     } catch(e){
//         console.error(e); //error!
//     }
// }

// const generator =genFuc();

// console.log(generator.next()); //{ value: 1, done: false }
// console.log( generator.throw('error!')); //{ value: undefined, done: true }

// function* genFuc(){

//     yield 1;
//     yield 2;
//     yield 3;
// }

// //제너레이터 함수를 호출하면 제너레이터 객체를 반환하고
// //제너레이터 객체는 next 메서드를 갖는다.
// const generator =genFuc();

// // 처음 next 메서드는 첫번째 yield 표현식까지 실행되고 일시 중지한다.
// // next 메서드는 이터레이터 리절트 객체({value, done})를 반환한다.
// // value는 첫 번째 yield값인 1
// // done에는 제너레이터가 끝까지 실행되었는지를 나타내는 fale

// console.log(generator.next());
// //{ value: 1, done: false }

// console.log(generator.next());
// //{ value: 2, done: false }

// console.log(generator.next());
// // { value: 3, done: false }

// //마지막에는 value값 undefined와
// // 제너레이터 함수가 끝까지 실행되었음을 나타내는 true 할당.
// console.log(generator.next());
// // { value: undefined, done: true }


// function* genFunc(){

//     // 처음 next 메서드를 호출하면 첫 번째 yield 표현식까지 실행되고 일시 중지
//     // x변수에는 아직 할당 안됨
//     const x=yield 1;

//     // 두번째 next 메서드를 호출할 때 전달한 인수 10은 첫번째 yield 표현식을 할당받는
//     // x에 할당된다.
//     const y= yield (x+10);

//     return x+y;
// }

// const generator = genFunc(0);

// let res =generator.next();
// console.log(res); // { value: 1, done: false }

// //next 메서드에 인수로 전달된 17은 genFunc 함수의 x변수에 할당된다.
// res= generator.next(17);
// console.log(res); // { value: 27, done: false }

// //next 메서드에 인수로 전달된 7은 y에 할당된다 value=17+7
// res=generator.next(7);
// console.log(res); // { value: 24, done: true }

// const infiniteFibonacci=(function(){
//     let [pre,cur]=[0,1];
//     return {
//         [Symbol.iterator]() {return this;},
//         next(){
//             [pre,cur]=[cur,pre+cur];
//             // 무한 이터러블이므로 done 프로퍼티 생략
//             return {value:cur};
//         }
//     };
// }());

// for(const num of infiniteFibonacci){
//     if(num>10000) break;
//     console.log(num); //1 2 3 5 8 ...6765
// }

// const infiniteFibonacci=(function*(){
//     let [pre,cur]=[0,1];

//     while(true){
//         [pre,cur]=[cur,pre+cur];
//         yield cur;
//     }
// }());

// for(const num of infiniteFibonacci){
//     if(num>10000) break;
//     console.log(num); //1 2 3 5 8 ...6765
// }


// // node-fetch는 Node.js 환경에서 window.fetch 함수를 사용하기 위한 패키지다.
//  const fetch = require('node-fetch');

// const async= generatorFunc=> {
//     const generator=generatorFunc();

//     const onResolved=arg=>{
//         const result = generator.next(arg);

//         return result.done? result.value: result.value.then(res=>onResolved(res));
//     };
//     return onResolved;
// };

// (async(function* fetchTodo(){
//     const url='https://jsonplaceholder.typicode.com/todos/1';

//     const response=yield fetch(url);
//     const todo=yield response.json();
//     console.log(todo);
// })());


 const fetch = require('node-fetch');
 import co from 'co';

// const co= require('co');

co(function* fetchTodo() {
    const url='https://jsonplaceholder.typicode.com/todos/1';

    const response=yield fetch(url);
    const todo=yield response.json();
    console.log(todo);
});
