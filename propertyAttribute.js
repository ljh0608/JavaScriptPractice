// const animal={
//     name: 'lion'
// };


// console.log(Object.getOwnPropertyDescriptor(animal, 'name'));
// //{ value: 'lion', writable: true, enumerable: true, configurable: true }


// const person ={
//     name: 'LEE'
// };

// person.age =20;

// console.log(Object.getOwnPropertyDescriptors(person));

// // {
// //     name: {
// //       value: 'LEE',
// //       writable: true,
// //       enumerable: true,
// //       configurable: true
// //     },
// //     age: { value: 20, writable: true, enumerable: true, configurable: true }
// //   }



// const person1 = {
//     firstName: 'Jaehoon',
//     lastName: 'Lee',

//     //getter 함수
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },

//     //setter 함수
//     set fullName(name){
//         [this.firstName, this.lastName] = name.split(' ');
//         // 배열스트럭처링 할당 : []안에 변수에 배열의 각 요소를 배열로 부터 추출하여 할당.
//     }
// };


// console.log(person1.firstName + ' ' + person1.lastName);
// //Jaehoon Lee


// //접근자 프로퍼티 fullName에 값을 저장하면 setter함수가 호출된다
// person1.fullName= 'Donguk Lee';
// console.log(person1); //{ firstName: 'Donguk', lastName: 'Lee', fullName: [Getter/Setter] }



// console.log( person1.fullName);  //Donguk Lee


// const person3 ={};

// Object.defineProperty(person3, 'firstName',{
//     value:'Jaehoon',
//     writable:true,
//     enumerable:true,
//     configurable:true
// });


// Object.defineProperty(person3, 'lastName',{
//     value:'Lee'
// });



// let descriptor = Object.getOwnPropertyDescriptor(person3,'firstName');
// console.log('firstName',descriptor);

// // firstName {
// //     value: 'Jaehoon',
// //     writable: true,
// //     enumerable: true,
// //     configurable: true
// //   }

// descriptor = Object.getOwnPropertyDescriptor(person3,'lastName');
// console.log('lastName', descriptor);

// // lastName {
// //     value: 'Lee',
// //     writable: false,
// //     enumerable: false,
// //     configurable: false
// //   }


// Object.defineProperty(person3, 'Name',{
//     value:'Ko',
//     writable:true,
//     enumerable:true,
//     configurable:false,
// });


// console.log(Object.keys(person3));
// //[ 'firstName', 'Name' ]




// person3.lastName='Kim';
// delete person3.lastName;

// descriptor = Object.getOwnPropertyDescriptor(person3,'lastName');
// console.log('lastName', descriptor);

// lastName {
//     value: 'Lee',
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const person ={name: 'lee'};

console.log(Object.isExtensible(person)); //true

Object.preventExtensions(person);

console.log(Object.isExtensible(person)); //false

//프로퍼티 추가 불가
person.age=20; //무시 strict 모드에선 에러
console.log(person); //{ name: 'lee' }

//프로퍼티 삭제 가능
delete person.name;
console.log(person); //{}

// 프로퍼티 정의에 의한 추가도 금지
Object.defineProperty(person, 'age',{value:20});
//TypeError: