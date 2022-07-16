

// const isIterable=v=>v!==null && typeof v[Symbol.iterator]==='function';

const { ɵflushModuleScopingQueueAsMuchAsPossible } = require("@angular/core");

// console.log(isIterable([])); //true
// console.log(isIterable('')); //true
// console.log(isIterable(new Map())); //true
// console.log(isIterable(new Set())); //true
// console.log(isIterable({})); //false


// const array=[1,2,3];

// console.log(Symbol.iterator in array);//true

// for(const i of array){ //for ... of 문 사용가능
//     console.log(i); //1 2 3
// }

// //배열은 이터러블이므로 스프레드 문법 대상으로 사용 가능하다.
// console.log(...array); //1 2 3

// //배열 디스트럭처링 할당 대상으로 사용 가능하다
// const [a, ...rest]=array;
// console.log(a,rest); //1 [ 2, 3 ]


// const array=[1,2,3];

// const iterator=array[Symbol.iterator]();

// console.log(iterator.next()); //{ value: 1, done: false }
// console.log(iterator.next()); //{ value: 2, done: false }
// console.log(iterator.next()); //{ value: 3, done: false }
// console.log(iterator.next()); //{ value: undefined, done: true }


// //이터러블
// const iterable=[1,2,3];

// //Symbol.iterable메서드를 호출하여 이터레이터를 생성
// const iterator=iterable[Symbol.iterator]();

// for(;;){
//     const res =iterator.next();

//     if(res.done) break;

//     const item=res.value;
//     console.log(item); //1 2 3
// }


// //피보나치 수열
// const fibonacciFunc= function(max){
//     let [pre, cur]=[0,1];

//     return {
//         [Symbol.iterator](){
//             return {
//                 next(){
//                     [pre,cur]=[cur, pre+cur];
//                     return {value: cur, done: cur>=max};
//                 }
//             };
//         }
//     };
// };

// for (const num of fibonacciFunc(11)){
//     console.log(num); //1 2 3 5 8
// }

// //피보나치 수열
// const fibonacciFunc= function(max){
//     let [pre, cur]=[0,1];

//     return {
//         [Symbol.iterator](){ return this;},

//                 next(){
//                     [pre,cur]=[cur, pre+cur];
//                     return {value: cur, done: cur>=max};
//                 }

//         };
//     };

// let iter = fibonacciFunc(11);

// console.log(iter.next()); //{ value: 1, done: false }
// console.log(iter.next());//{ value: 2, done: false }
// console.log(iter.next());//{ value: 3, done: false }
// console.log(iter.next());//{ value: 5, done: false }
// console.log(iter.next());//{ value: 8, done: true }

//피보나치 수열
const fibonacciFunc= function(){
    let [pre, cur]=[0,1];

    return {
        [Symbol.iterator](){ return this;},

                next(){
                    [pre,cur]=[cur, pre+cur];
                    return {value: cur};
                }

        };
    };

    //fibonacciFunc 함수는 무한 이터러블 생성
    for(const num of fibonacciFunc()){
        if(num>10000)
        break;
        console.log(num);
    }

    // 배열 리스트럭처링 할당을 통해 3개의 요소만 취득
    const [f1,f2,f3] =fibonacciFunc();
    console.log(f1,f2,f3);

    