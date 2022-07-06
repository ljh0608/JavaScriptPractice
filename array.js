// const arr=[1,2,3];

const { Type } = require("@angular/core");
const { indexOf, set } = require("lodash");

// console.log(arr.length); //3

// console.log(Array.of(1)); //[ 1 ]

// console.log(Array.of(1,2,3)); //[ 1, 2, 3 ]

// console.log(Array.of('string')); //[ 'string' ]


// console.log(Array.from({length:2, 0:'a', 1:'b'})); //[ 'a', 'b' ]

// console.log(Array.from('Hello')); //[ 'H', 'e', 'l', 'l', 'o' ]

// const arr=[1,2,3]

// console.log(arr[1]); //2

// const arr=[1,2,3]

// //Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// //arr[1]부터 1개의 요소를 제거
// arr.splice(1,1);
// console.log(arr); //[ 1, 3 ]

// console.log(arr.length); //2

//  const arr =[1];
//  //push 메서드는 원본 배열을 직접 변경한다.
//  arr.push(2);

//  //concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
// const result= arr.concat(3);
// console.log(arr); // [ 1, 2 ]
// console.log(result); //[ 1, 2, 3 ]


// //true
// Array.isArray({});
// Array.isArray(new Array());
// Array.isArray([1,2]);

// //false
// Array.isArray();
// Array.isArray({});
// Array.isArray(1);
// Array.isArray('array');
// Array.isArray({0:1, length:1});


// const arr =[1,2,2,3,4];

// console.log(arr.indexOf(1)); //0
// console.log(arr.indexOf(5)); //-1
// console.log(arr.indexOf(2)); //1
// console.log(arr.indexOf(2,2)); //2


// const foods =['apple', 'banana','tomato'];

// if(!foods.includes('orange')){
//     foods.push('orange');
// }

// console.log(foods); //[ 'apple', 'banana', 'tomato', 'orange' ]


// const arr =[1,2,3];

// arr.push(4);

// //원본 배열을 변경
// console.log(arr); //1,2,3,4

// //마지막 요소로 추가한 요소가 하나라면 성능면에서 더 좋은 방법이다.
// arr[arr.length]=5;
// console.log(arr); //1,2,3,4,5


// const arr =[1,2,3];

// const newArr=[...arr, 4];

// console.log(newArr); //[ 1, 2, 3, 4 ]

// arr.pop();
// console.log(arr);//[ 1, 2 ]


//스택 구현
// class Stack{

//     #array;
//     constructor(array=[]){
//         if(!Array.isArray(array)){
//             throw new TypeError(`${array} is not an array`);
//         }
//         this.#array=array;
//     }

//     push(value){
//         this.#array.push(value);
//     }

//     pop(){
//         this.#array.pop();
//     }

//     // 스택의 복사본 배열을 반환한다.
//     entries(){
//         return [...this.#array];
//     }
// }

// const stack= new Stack([1,2]);
// console.log(stack.entries()); //[ 1, 2 ]

// stack.push(3);
// console.log(stack.entries()); //[ 1, 2, 3 ]

// stack.pop();
// console.log(stack.entries()); //[ 1, 2 ]



// const arr=[1,2];

// //원본 배열에서 첫번째 요소를 제거하고 제거한 요소를 반환
// let result=arr.shift();
// console.log(result); //1

// //원본 배열 직접 변경
// console.log(arr); //[2]


// class Queue {
//     #array; //private class memeber

//     constructor(array=[]){
//         if(!Array.isArray(array)){
//             throw new TypeError(`${array} is not an array`);
//         }
//         this.#array=array;
//     }

//     enqueue(value){
//         this.#array.push(value);
//     }

//     dequeue(){
//         this.#array.shift();
//     }

//     entries(){
//         return [...this.#array];
//     }
// }


// const queue =new Queue([1,2]);

// console.log(queue.entries()); //[1,2]
// queue.enqueue(3);

// console.log(queue.entries()); //[1,2,3]

// queue.dequeue();
// console.log(queue.entries()); //[2,3]


// const arr1=[1,2];
// const arr2=[3,4];

// let result=arr1.concat(arr2);
// console.log(result); //[ 1, 2, 3, 4 ]

// result=arr1.concat(7);
// console.log(result); //[ 1, 2, 7]

// //원본 배열은 변경되지 않는다.
// console.log(arr1); //[1,2]


// const arr1=[1,2];
// arr1.unshift([3,4]);
// arr1.push([5,6]);

// //인수로 전달받은 배열을 그대로 원본 배열의 요소로 추가
// console.log(arr1); //[ [ 3, 4 ], 1, 2, [ 5, 6 ] ]


// //concat 메서드는 인수로 전달받은 배열을 해체하여 새로운 배열의 요소로 추가
// let result=[1,2].concat([3,4]);
// result=result.concat([5,6]);

// console.log(result); //[ 1, 2, 3, 4, 5, 6 ]

// const arr=[1,2,3,4,1,2];

// const result=arr.splice(1,2,10,20);

// //제거한 요소 배열로 반환
// console.log(result);
// //원본 배열 직접 변경
// console.log(arr);


// const arr=[1,2,3,4,1,2];

// function remove(array, item){
//     if(array.indexOf(item)!==-1){
//         array.splice(array.indexOf(item),1);
//     }

//     return array;
// }

// //2 제거
// console.log(remove(arr,2)); //[ 1, 3, 4, 1, 2 ]

// const arr=[1,2,3,4,1,2];

// function removeAll(array, item){
//     return array.filter(v=> v!==item);
// }

// console.log(removeAll(arr,2)); //[ 1, 3, 4, 1 ]




// const arr=[1,2,3];

// let result= arr.slice(0,1);
// console.log(result); //[ 1 ]

// result=arr.slice(1,2);
// console.log(result); //[ 2 ]

// result=arr.slice(1); //arr[1] 이후 모든 요소 복사
// console.log(result); //[ 2,3 ]


// const todo = [
//     {id:1, content: 'HTML'},
//     {id:2 , content:'CSS'},
//     {id:3, content:'JAVASCIPT'}
// ];

// const _todos=todo.slice();

// console.log(_todos);
// // [
// //     { id: 1, content: 'HTML' },
// //     { id: 2, content: 'CSS' },
// //     { id: 3, content: 'JAVASCIPT' }
// // ]
// console.log(todo===_todos); //false
// console.log(todo[0]===_todos[0]); //true


// const arr=[1,2,3];

// let arrString= arr.join();
// console.log(typeof arrString); //string
// console.log(arrString); //1,2,3

// arrString=arr.join(':');
// console.log(arrString); //1:2:3

// const arr=[1,2,3];

// let result=arr.reverse();
// console.log(result); //[ 3, 2, 1 ]

// arr.fill(0);
// console.log(arr); //[ 0, 0, 0 ]

// arr.fill(2,1); // 전달받은 값 2를 arr[1]부터 요소로 채운다
// console.log(arr); //[ 0, 2, 2 ]

// arr.fill(3,1,2); // arr[1]부터 arr[2]이전까지 3으로 요소를 채운다.
// console.log(arr); //[ 0, 3, 2 ]



// const arr=[1,2,3];

// console.log(arr.includes(1)); //true
// console.log(arr.includes(9)); //false


// const arr=[1,[2,[3,4,[5,6]]]];

// console.log(arr); //[ 1, [ 2, [ 3, 4,[5,6] ] ] ]
// console.log(arr.flat()); //[ 1, 2, [ 3, 4, [ 5, 6 ] ] ]

// console.log(arr.flat(2)); //[ 1, 2, 3, 4, [ 5, 6 ] ] ]
// console.log(arr.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6 ]

// const arr2=[1,2,,3,4,,5];

// //배열 구멍 제거
// console.log(arr2); //[ 1, 2, <1 empty item>, 3, 4, <1 empty item>, 5 ]
// console.log(arr2.flat(Infinity)); //[ 1, 2, 3, 4, 5 ]

// const arr=['banana', 'apple', 'orange'];

// arr.sort(); //오름차순 정렬
// console.log(arr); //[ 'apple', 'banana', 'orange' ]

// arr.reverse(); //내림차순 정렬
// console.log(arr); //[ 'orange', 'banana', 'apple' ]

// const arr1=['오렌지','바나나','사과'];
// arr1.sort(); //한글도 정렬 가능
// console.log(arr1); //[ '바나나', '사과', '오렌지' ]


//숫자 요소 정렬
// const point=[40,10,200,5,25,100];

// point.sort();
// console.log(point); //[ 10, 100, 200, 25, 40, 5 ]


// const point=[40,10,200,5,25,100];

// //오름차순 정렬. 비교 함수의 반환값이 0보다 작으면 a를 우선하여 정렬한다.
// point.sort((a,b)=>a-b);
// console.log(point); //[ 5, 10, 25, 40, 100, 200 ]


// //내림차순 정렬
// point.sort((a,b)=>b-a);
// console.log(point); //[ 200, 100, 40, 25, 10, 5 ]


// const todo = [
//     {id:2, content: 'HTML'},
//     {id:6 , content:'CSS'},
//     {id:3, content:'JAVASCIPT'}
// ];

// function compare(key){
//     // 문자열인 경우 - 산술 연산으로 비교시 NaN이 나오므로 비교연산 사용
//     return (a,b)=>(a[key]>b[key]?1 : (a[key]<b[key]?-1:0));
// }

// todo.sort(compare('id'));

// console.log(todo);
// // [
// //     { id: 2, content: 'HTML' },
// //     { id: 3, content: 'JAVASCIPT' },
// //     { id: 6, content: 'CSS' }
// //   ]

// todo.sort(compare('content'));
// console.log(todo);
// // [
// //     { id: 6, content: 'CSS' },
// //     { id: 2, content: 'HTML' },
// //     { id: 3, content: 'JAVASCIPT' }
// //   ]



// const numbers =[1,2,3];
// const pows=[];

// numbers.forEach(item=> pows.push(item**2));
// console.log(pows); //[ 1, 4, 9 ]


// [1,2,3].forEach((item, index, arr)=>{
//     console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
// });
// // 요소값: 1, 인덱스: 0, this: [1,2,3]
// // 요소값: 2, 인덱스: 1, this: [1,2,3]
// // 요소값: 3, 인덱스: 2, this: [1,2,3]


// const numbers=[1,2,3];
// numbers.forEach((item,index,arr)=>{arr[index]=item**2});
// console.log(numbers); //[ 1, 4, 9 ]


// const result=[1,2,3].forEach((item)=>item*2);
// console.log(result); //undefined


// class Numbers{
//     numberArray=[];

//     multiply(arr){
//         arr.forEach(function(item){
//             this.numberArray.push(item*item);
//         },this); //forEach 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
//     }
// }

// const numbers=new Numbers();
// numbers.multiply([1,2,3]);
// console.log(numbers.numberArray); //[1,4,9]

// class Numbers{
//     numberArray=[];

//     multiply(arr){
//         arr.forEach((item)=>{ //화살표 함수 사용
//             this.numberArray.push(item*item);
//         });
//     }
// }

// const numbers=new Numbers();
// numbers.multiply([1,2,3]);
// console.log(numbers.numberArray); //[1,4,9]

// const numbers=[1,4,9];

// const roots=numbers.map(item=>Math.sqrt(item));
// //위 코드는 아래와 같다.
// //const roots=numbers.map(Math.sqrt);

// //원본 배열 변경 X
// console.log(numbers); //[ 1, 4, 9 ]
// //새로운 배열 반환
// console.log(roots); //[ 1, 2, 3 ]


// class Prefixer{
//     constructor(prefix){
//         this.prefix=prefix;
//     }

//     add(arr){
//         //화살표 함수 내부에서 .this를 참조하면 상위 스코프의 this를 그대로 참조한다.
//         return arr.map(item=>this.prefix + item);
//     }
// }

// const prefix=new Prefixer('-webkit-');

// console.log(prefix.add(['transition','user-select']));


//filter

// const numbers=[1,2,3,4,5];
// const odds=numbers.filter(item=>item%2);

// console.log(odds); //[ 1, 3, 5 ]



// class Users{
//     constructor(){
//         this.users=[
//             {id:1, name:'lee'},
//             {id:2, name:'kim'}
//         ];
//     }

//     findById(id){
//         //id가 일치하는 사용자만 반환한다.
//         return this.users.filter(user=>user.id===id);
//     }

//     removeId(id){
//         //id가 일치하지 않는 사용자를 제거한다.
//         this.users=this.users.filter(user=>user.id!==id);
//     }
// }

// const users=new Users();

// console.log(users); //Users { users: [ { id: 1, name: 'lee' }, { id: 2, name: 'kim' } ] }

// let user=users.findById(1);
// console.log(user); //[ { id: 1, name: 'lee' } ]

// users.removeId(1);

// user=users.findById(1);
// console.log(user); //[]


// const values=[1,2,3,4,5,6];

// const average=values.reduce((acc,cur,i,{length})=>{
//     return i===length-1? (acc+cur)/length:acc+cur;
// },0);

// console.log(average); //3.5

// const values=[5,4,2,1,3];

// const max_num=values.reduce((acc,cur)=>{
//     return acc>cur?acc:cur;
// },values[0]);

// console.log(max_num); //5

// //최대값은 Math.max 메서드를 사용하는 방법이 더 직관적
// const value=[5,4,2,1,3];
// const max=Math.max(...value);
// console.log(max); //5


// const fruit =['banana','apple','orange','orange','apple'];

// const count=fruit.reduce((acc,cur)=>{
//     acc[cur]=(acc[cur]||0)+1;
//     return acc;
// },{});

// console.log(count); //{ banana: 1, apple: 2, orange: 2 }


// const values=[1,[2,3],4,[5,6]];

// const flatten=values.reduce((acc,cur)=>acc.concat(cur),[]);

// console.log(flatten); //[ 1, 2, 3, 4, 5, 6 ]


// const values =[1,2,1,3,5,4,5,3,4,4];

// const result =[...new Set(values)];
// console.log(result); //[ 1, 2, 3, 5, 4 ]

// const products =[
//     {id:1, price: 100},
//     {id:2, price: 200},
//     {id:3, price: 300},
// ];

// const priceSum=products.reduce((acc,cur)=>acc+cur.price,0);
// console.log(priceSum); //600


// console.log([5,10,15].some((item)=>item>10)); //true
// console.log([5,10,15].some((item)=>item>20)); //false

// console.log(['apple','banana','orange'].some((item)=>item==='apple')); //true


// console.log([5,10,15].every(item=>item>3)); //true
// console.log([5,10,15].every(item=>item>6)); //false

// console.log([].every(item=>item>3)); //true


// const users=[{id:1, name:'lee'},
// {id:2, name:'choi'},
// {id:3, name:'kim'},
// {id:4, name:'park'},
// ];

// console.log(users.find(user=>user.id===2)); //{ id: 2, name: 'choi' }


// [1,2,2,4].filter(item=>item===2); //[2,2]

// [1,2,2,4].find(item=>item===2); // 2


// const users=[{id:1, name:'lee'},
// {id:2, name:'choi'},
// {id:3, name:'kim'},
// {id:4, name:'park'},
// ];

// console.log(users.findIndex(user=>user.id===2)); //1
// console.log(users.findIndex(user=>user.name==='kim')); //2
// console.log(users.findIndex(user=>user.name==='Ji')); //-1




const arr=['hello','world'];

 console.log(arr.map(x=>x.split(''))); //[ [ 'h', 'e', 'l', 'l', 'o' ], [ 'w', 'o', 'r', 'l', 'd' ] ]
console.log(arr.map(x=>x.split('')).flat()); //['h', 'e', 'l', 'l','o', 'w', 'o', 'r','l', 'd']

console.log(arr.flatMap(x=>x.split('')));
