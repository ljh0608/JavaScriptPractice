// console.log(this); //window


// function square(n){
//     console.log(this);
//     return n*n;
// }

// square(2); //window

// const person={
//     name:'LEE',
//     getName(){
//         //메서드 내부에서 this는 메서드를 호출한 객체
//         console.log(this);
//         return this.name;
//     }
// };



// console.log(person.getName());
// //{ name: 'LEE', getName: [Function: getName] }
// //LEE

// function Person(name){
//     this.name=name;
//     console.log(this);
// }

// const me=new Person('LEE'); //Person { name: 'LEE' }


// var value=1;

// const obj={
//     value: 100,
//     foo(){
//         console.log("foo this: ", this); //foo this:  { value: 100, foo: [Function: foo] }
//         console.log("foo this.value: ", this.value);// foo this.value:  100

//         //메서드 내에서 정의한 중첩함수
//         function bar(){
//             console.log("bar this: ", this); //global
//             console.log("bar this.value: ",this.value); //undefined
//         };


//         setTimeout(()=> {
//             console.log("callback's this: ",this); //{ value: 100, foo: [Function: foo] }
//             console.log("callback's this.value: ",this.value); // 100

//         }, 1000);

//         bar();
//     }
// };

// obj.foo();

// function getThisBinding(){
//     return this;
// }

// const thisArg={a:1};



// console.log(getThisBinding.bind(thisArg)); //[Function: bound getThisBinding]

// //함수를 호출하지 않으므로 명시적으로 호출해야함
// console.log(getThisBinding.bind(thisArg)()); //{ a: 1}


// const person = {
//     name: 'LEE',
//     foo(callback){
//           setTimeout(callback.bind(this),1000);
//     }
// };

// person.foo(function(){
//     console.log(`Hi my name is ${this.name}`);// Hi my name is LEE
// })


let foo=1;
{
    //let으로 선언한 변수가 호이스팅되지 않는다면 값이 1인 foo를 참조해야한다.
    //하지만 아래는 참조 에러가 발생하는 모습
console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
    let foo=2;
}




