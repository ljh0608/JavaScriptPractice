
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
// Set.prototype.inSuperset=function(subset){
//     const superSet=[...this];

//     return [...subset].every(v=>superSet.includes(v));
// };

// const setA=new Set([1,2,3,4]);
// const setB=new Set([2,4]);

// console.log(setA.inSuperset(setB)); //true
// console.log(setB.inSuperset(setA)); //flase


//map
// const map =new Map();
// console.log(map); //Map(0) {}


// const {size}=new Map([['key1', 'value1'], ['key2','value2']]);
// console.log(size); //2


// const map =new Map();
// console.log(map); //Map(0) {}

// map.set('key1','value1');
// console.log(map); //Map(1) { 'key1' => 'value1' }

// const map=new Map();
// map.set('key1','value1')
// .set('key1','value2');

// console.log(map);//Map(1) { 'key1' => 'value2' }

// const map =new Map();

// const lee={name: 'Lee'};
// const kim={name: 'Kim'};

// map.set(lee,'developer')
// .set(kim,'designer');

// console.log(map.has(lee)); //true
// console.log(map.has('key')); //false


// const map =new Map([['key1', 'value1'], ['key2','value2']]);
// console.log(map); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// map.clear();
// console.log(map); //Map(0) {}


// const lee={name:'lee'};
// const kim={name:'kim'};

// const map=new Map([[lee,'developer'],[kim,'designer']]);
// map.forEach((v,k,map)=>console.log(v,k,map));

// // developer { name: 'lee' } Map(2) {
// //     { name: 'lee' } => 'developer',
// //     { name: 'kim' } => 'designer'
// //   }
// //   designer { name: 'kim' } Map(2) {
// //     { name: 'lee' } => 'developer',
// //     { name: 'kim' } => 'designer'
// //   }



// const lee={name:'lee'};
// const kim={name:'kim'};

// const map=new Map([[lee,'developer'],[kim,'designer']]);

// //Map 객체는 이터러블이다.
// console.log(Symbol.iterator in map); //true

// // for of 문으로 순회 가능
// for(const entry of map){
//          console.log(entry);
// //     [ { name: 'lee' }, 'developer' ]
// // [ { name: 'kim' }, 'designer' ]
// }

// //Map은 스프레드 문법 대상이 될 수 있다.
// console.log([...map]); //[ [ { name: 'lee' }, 'developer' ], [ { name: 'kim' }, 'designer' ] ]

// //Map은 배열 디스트럭처링 할당의 대상이 될 수 있다.
// const [a,b]=map;
// console.log(a,b); //[ { name: 'lee' }, 'developer' ] [ { name: 'kim' }, 'designer' ]


const lee={name:'lee'};
const kim={name:'kim'};

const map=new Map([[lee,'developer'],[kim,'designer']]);

//Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터 반환
for(const key of map.keys()){
    console.log(key);
}

for(const value of map.values()){
    console.log(value);
}

for(const entry of map.entries()){
    console.log(entry);
}













