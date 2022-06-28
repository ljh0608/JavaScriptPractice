// const circle = {
//     radius:5,

//     getArea(){
//         return Math.PI*this.radius**2;
//     }
// };

// console.log(circle); //{ radius: 5, getArea: [Function: getArea] }

// function Circle(radius) {
//     this.radius=radius;

//     this.getArea= function(){
//         return Math.PI*this.radius**2;
//     };
// }

// const circle1= new Circle(1); //반지름 1인 인스턴스 생성
// const circle2=new Circle(2); //반지름 2인 인스턴스 생성

// console.log(circle1.getArea()); //3.141592653589793

// function Circle(radius) {
//     this.radius=radius;

// }
// //Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// //사용할 수 있도록 프로토타입에 추가한다.
// Circle.prototype.getArea= function(){
//     return Math.PI* this.radius**2;
// };

// //인스턴스 생성
// const circle1= new Circle(1); //반지름 1인 인스턴스 생성
// const circle2=new Circle(2); //반지름 2인 인스턴스 생성

// console.log(circle1.getArea===circle2.getArea); //true

// console.log(circle1.getArea()); //3.141592653589793
// console.log(circle2.getArea()); //12.566370614359172


// const person={
//     name: 'lee',
//     age: 25,
// };

//함수 객체는 프로토타입을 가진다
// console.log((function(){}).hasOwnProperty('prototype')); //true

//일반 객체는 프토토타입을 가지지 않는다.
// console.log(({}).hasOwnProperty('prototype')); // false


// // 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 생성됨
// console.log(Person.prototype); //{}

// // 생성자 함수
// function Person(name){
//     this.name=name;
// }

// // 화살표 함수는 non-constructor이다.
// const Person2=name=>{
//     this.name=name;
// };

// //non-constructor는 프로토타입이 생성되지 않는다.
// console.log(Person2.prototype); //undefined




// // 생성자 함수
// function Person(name){
//     this.name=name;
// }

// const me = new Person('LEE');

// function isInstanceof(instance, constructor){
//     // 프로토타입 취득
//     const prototype= Object.getPrototypeOf(instance);

//     // 재귀 탈출 조건
//     if(prototype===null)
//         return false;

//     return prototype===constructor.prototype || isInstanceof(prototype,constructor);
// }

// console.log(isInstanceof(me,Person));
// console.log(isInstanceof(me,Object));


// let obj=Object.create(null);
// console.log(Object.getPrototypeOf(obj)===null); //true

// obj=Object.create(Object.prototype);
// console.log(Object.getPrototypeOf(obj)===Object.prototype); //true


// const myproto={x:10};

// const obj={
//     y:10,
//     __proto__:myproto
// };

// console.log(Object.getPrototypeOf(obj)===myproto);// true

// //정적 프로퍼티 메서드
// function Person(name){
//     this.name=name;
// }

// Person.prototype.sayHello=()=>{
//     console.log('hi');
// };

// Person.staticMethod=()=>{
//     console.log('staticMethod');
// };

// const me=new Person('LEE');
// Person.staticMethod(); //staticMethod
// me.staticMethod(); //TypeError: me.staticMethod is not a function


//for .. in문
const person={
    name: 'LEE',
    address:'Ilsan',
    __proto__:{age:20}
}

for(const i in person){
    console.log(person[i]);
 }
// LEE
// Ilsan
// 20

console.log(Object.keys(person)); //[ 'name', 'address' ]
console.log(Object.values(person)); // [ 'LEE', 'Ilsan' ]
console.log(Object.entries(person));








