
// const set1 =new Set([1,2,3,3]);
// console.log(set1); //Set(3) { 1, 2, 3 }

const { set } = require("lodash");

// const { set } = require("lodash");

// const set2=new Set('Hello');
// console.log(set2); //Set(4) { 'H', 'e', 'l', 'o' }




// const uniq=array=>array.filter((v,i,self)=>self.indexOf(v)===i);

// console.log(uniq([2,1,2,3,4,3,4])); //[ 2, 1, 3, 4 ]
// //indexOf는 검색된 문자열이 발견된 첫번째 위치 index를 리턴하므로 중복된 요소를 삭제할 수 있다.



// const {size} =new Set([1,2,3,3]);
// console.log(size); // 3


// const set = new Set();
// console.log(set); //Set(0) {}

// set.add(1);
// console.log(set); // Set(1) { 1 }

// set.add(1).add(2);
// console.log(set); // Set(2) { 1, 2 }


// const set = new Set();

// set
// .add(1)
// .add('a')
// .add(true)
// .add(null)
// .add({})
// .add(()=>{})

// console.log(set); //Set(6) { 1, 'a', true, null, {}, [Function (anonymous)] }

// console.log(set.has(2)); //true
// console.log(set.has(4)); //false



// const set = new Set([1,2,3]);

// // 요소 삭제
// set.delete(2);
//  console.log(set); //Set(2) { 1, 3 }

//  //존재하지 않는 요소 삭제시 에러없이 무시
//  set.delete(5);
//  console.log(set); //Set(2) { 1, 3 }

//  //불리언 값을 반환하므로 연속 호출 불가
//  set.delete(1).delete(3); //TypeError: set.delete(...).delete is not a function

// const set = new Set([1,2,3]);

// set.forEach((v,v2,set)=>console.log(v, v2, set));
// // 1 1 Set(3) { 1, 2, 3 }
// // 2 2 Set(3) { 1, 2, 3 }
// // 3 3 Set(3) { 1, 2, 3 }


// const set = new Set([1,2,3]);

// //set객체는 이터러블이다.
// console.log(Symbol.iterator in set); //ture

// //for of문 순회 가능
// for(const value of set){
//     console.log(value); // 1 2 3
// }

// //스프레드 문법 대상이 될 수 있다.
// console.log([...set]); //[1,2,3]

// //배열 디스트럭처링 할당 대상이 될 수 있다.
// const [a,...rest]=set;
// console.log(a, rest); //1 [ 2, 3 ]


// Set.prototype.intersection=function(set){
//     const result=new Set();

//     for(const value of set){
//         if(this.has(value)) result.add(value);
//     }

//     return result;
// };

// const setA=new Set([1,2,3,4]);
// const setB=new Set([2,4]);

// console.log(setA.intersection(setB)); //Set(2) { 2, 4 }


// Set.prototype.intersection= function(set){
//     return new Set([...this].filter(v=>set.has(v)));
// }


// const setA=new Set([1,2,3,4]);
// const setB=new Set([2,4]);

// console.log(setA.intersection(setB)); //Set(2) { 2, 4 }


//합집합
// Set.prototype.union=function(set){
//     return new Set([...this,...set]);
// };

// const setA=new Set([1,2,3,4]);
// const setB=new Set([2,4]);

// console.log(setA.union(setB)); //Set(4) { 1, 2, 3, 4 }
// console.log(setB.union(setA)); //Set(4) { 2, 4, 1, 3 }


//차집합
// Set.prototype.difference=function(set){
//     return new Set([...this].filter(v=>!set.has(v)));
// };

// const setA=new Set([1,2,3,4]);
// const setB=new Set([2,4]);

// console.log(setA.difference(setB)); //Set(2) { 1, 3 }
// console.log(setB.difference(setA)); //Set(0) {}


//상위집합 부분집합


Set.prototype.inSuperset=function(subset){
    const superSet=[...this];

    return [...subset].every(v=>superSet.includes(v));
};

const setA=new Set([1,2,3,4]);
const setB=new Set([2,4]);

console.log(setA.inSuperset(setB)); //true
console.log(setB.inSuperset(setA)); //flase





