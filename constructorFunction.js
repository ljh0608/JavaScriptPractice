// const person = new Object();


// person.name='lee';
// person.sayHello= function(){
//     console.log('Hi my name is '+ this.name);
// }

// console.log(person); //{ name: 'lee', sayHello: [Function (anonymous)] }

// person.sayHello(); // Hi my name is lee


// const strObj = new String('lee');
// const numObj= new Number(123);
// const boolObj=new Boolean(true);

// console.log(strObj);
// console.log(numObj);
// console.log(boolObj);

// console.log(typeof strObj);
// console.log(typeof numObj);
// console.log(typeof boolObj);

// // [String: 'lee']
// // [Number: 123]
// // [Boolean: true]
// // object
// // object
// // object



// const arr =new Array(1,2,3);

// console.log(typeof arr);
// console.log(arr);

// // object
// // [ 1, 2, 3 ]

// const date =new Date();
// console.log(typeof date);
// console.log(date);

// // object
// // 2022-06-20T03:27:40.447Z


// function Circle(radius){
//     this.radius=radius;
//     this.getDiameter=function() {
//         return this.radius*2
//     }
// }

// const circle1=new Circle(5);
// const circle2=new Circle(10);

// console.log(circle1.getDiameter()); //10

// console.log(circle2.getDiameter()); //20


//생성자 함수
// function Circle(radius){
// // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다.
//     console.log(this); //Circle {}

// // 2. this에 바인딩 되어 있는 인스턴스를 초기화한다.
//     this.radius=radius;
//     this.getDiameter=function(){
//         return 2*radius;
//     };
// // 명시적으로 원시 값 반환
//     return 100;
// }

// const circle=new Circle(1);
// console.log(circle); //Circle { radius: 1, getDiameter: [Function (anonymous)] }


const str= String(123);
console.log(typeof str, str);
//string 123

const num=Number('123');
console.log(typeof num, num);
// number 123

const bool=Boolean('true');
console.log(typeof bool,bool);
// boolean true