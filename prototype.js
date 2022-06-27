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


// 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 생성됨
console.log(Person.prototype); //{}

// 생성자 함수
function Person(name){
    this.name=name;
}


const Person2=name=>{
    this.name=name;
};

console.log(Person2.prototype);

