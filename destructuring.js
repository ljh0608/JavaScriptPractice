
// //ES5
// var arr= [1,2,3];

const { constant } = require("lodash");

// var one=arr[0];
// var two=arr[1];
// var three=arr[2];

// console.log(one,two,three); //1 2 3

// //ES6
// const arr1=[1,2,3];

// const [one1,two2,three3]=arr1;
// console.log(one1,two2,three3); //1 2 3

// const [a,b]= [1,2];
// console.log(a , b); //1 2

// const [c,d]=[1];
// console.log(c,d); // 1 undefined

// const [e,f]=[1,2,3];
// console.log(e,f); //1 2

// const [a,b,c=3]= [1,2];
// console.log(a , b,c); //1 2 3

// //기본값보다 할당값이 우선된다.
// const [e,f,g=6]=[1,2,3];
// console.log(e,f,g); //1 2 3



// function parseURL(url=''){
//     // '://' 앞의 문자열 (protocol)과 '/'이전의 '/'로 시작하지 않는 문자열 (host)와
//     // '/'이후에 문자열 (path)를 검색한다.

//     const parsedURL=url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
//     console.log(parsedURL);

//     if(!parsedURL) return {};

//     const [,protocol,host,path]=parsedURL;
//     return {protocol,host,path};

// }


// const parsedURL=parseURL('http://LEEJAEHOON.tistory.com/ko/docs/Web/JavaScript');
// console.log(parsedURL);
// // {
// //     protocol: 'http',
// //     host: 'LEEJAEHOON.tistory.com',
// //     path: 'ko/docs/Web/JavaScript'
// //   }


// //ES5
// var user ={firstName:'Jaehoon', lastName:'Lee'};

// var firstName=user.firstName;
// var lastName=user.lastName;

// console.log(firstName, lastName); //Jaehoon Lee


// //ES6
// const user={firstName:'Jaehoon', lastName:'Lee'};
// const {lastName,firstName}=user;

// console.log(firstName,lastName); //Jaehoon Lee


// const user={firstName:'Jaehoon', lastName:'Lee'};
// const {lastName:ln,firstName:fn} =user;

//  console.log(fn,ln); //Jaehoon Lee


// const todo = {id:1 , content: 'HTML', completed:true};

// //todo 객체로부터 id만 추출한다.
// const {id}=todo;
// console.log(id); //1

// function printTodo(todo){
//     console.log(`할일 : ${todo.content}은 ${todo.complete ? '완료' : '비완료'} 상태입니다.`);
// }

// printTodo({id:1, content:'html', complete:true}); //할일 : html은 완료 상태입니다.



// function printTodo({content, complete}){
//     console.log(`할일 : ${content}은 ${complete ? '완료' : '비완료'} 상태입니다.`);
// }

// printTodo({id:1, content:'html', complete:true}); //할일 : html은 완료 상태입니다.


// const todos=[
//     {id:1, content:'HTML', complete:true},
//     {id:2, content:'CSS', complete:false},
//     {id:3, content:'JS', complete:true},
// ];

// //todos 배열에 두번째 요쇼인 객체로부터 id 프로퍼티만 추출한다.
// const [,{id}]=todos;
// console.log(id); //2

const user= {
    name:'Lee',
    address:{
        zipCode: '10306',
        city:'Goyang'
    }
};

const {address:{city}}=user;
console.log(city); //Goyang

































