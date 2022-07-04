// //클래스 선언문
// class Person {
//     //생성자
//     constructor(name){
//         // 인스턴스 생성 및 초기화
//         this.name=name;
//     }

//     //프로토타입 메서드
//     sayHi(){
//         console.log(`Hi My name is ${this.name}`);
//     }

//     //정적 메서드
//     static sayHello(){
//         console.log('Hello');
//     }

// }

// // 인스턴스 생성
// const me= new Person('LEE');
// //인스턴스의 프로퍼티 참조
// console.log(me.name); //LEE
// //프로토타입 메서드 호출
// me.sayHi(); //Hi My name is LEE
// //정적 메서드 호출
// Person.sayHello(); //Hello


// console.log(Person); //ReferenceError:

// class Person {}

//

// class Person {
//     //생성자
//     constructor(name){
//         this.name=name;
//     }

//     //프로토타입 메서드
//     static sayHi(){

//         console.log(`Hi`);
//     }
// }

// // 정적메서드는 클래스로 호출한다.
// // 정적 메서드는 인스턴스 없이도 호출할 수 있다.
// Person.sayHi(); //Hi

// // const me =new Person('lee');
// // me.sayHi(); //Hi my name is lee

// class Person{
//     #name ='';

//     constructor(name){
//         this.#name=name;
//     }
// }

// const me =new Person('lee');
// console.log(me.#name); //SyntaxError: Private field '#name' must be declared in an enclosing class

// class MyMath{
//     // static 필드 정의
//     static PI=22/7;
//     // static private 필드 정의
//     static #num=10;

//     //static 메서드
//     static increment(){
//         return ++MyMath.#num;
//     }
// }

// console.log(MyMath.PI); //3.142857142857143
// console.log(MyMath.increment()); //11

// class Animal {
//     constructor(age, weight){
//         this.age=age;
//         this.weight=weight;
//     }
//     eat(){
//         console.log('eat');
//     }
//     move(){
//         console.log('move');
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log('fly');
//     }
// }
// const bird=new Bird(1,5);

// bird.fly();
// console.log(bird instanceof Bird); //true
// console.log(bird instanceof Animal); //true


// bird.eat(); //eat
// bird.move(); //move
// console.log(bird.age); //1


// function Base1(){

// }
// class Base2{}

// let condition = true;

// //조건에 따라 동적으로 상속 대상을 결정하는 서브클래스
// class Derived extends (condition ? Base1: Base2){}

// const derived=new Derived;

// console.log(derived); //Derived {}
// console.log(derived instanceof Base1); //true
// console.log(derived instanceof Base2); // false


class Base{
    constructor(name){
        this.name=name;
    }
    sayHi(){
        return `Hi ${this.name}`;
    }
}

class Derived extends Base{

    sayHi(){
        return `${super.sayHi()}. how are you`;
    }
}

const derived=new Derived('lee');
console.log(derived.sayHi());

