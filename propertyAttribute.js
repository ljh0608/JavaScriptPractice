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


// const person ={name: 'lee'};

// console.log(Object.isExtensible(person)); //true

// Object.preventExtensions(person);
// console.log(Object.isExtensible(person)); //false

// //프로퍼티 추가 불가  (프로퍼티 동적추가)
// person.age=20; //무시 strict 모드에선 에러
// console.log(person); //{ name: 'lee' }
// console.log(person.name);

// //프로퍼티 값 변경 가능
// person.name="yun";
// console.log(person.name);

// //프로퍼티 삭제 가능
// delete person.name;
// console.log(person); //{}



// // 프로퍼티 정의에 의한 추가도 금지 (Object.defineProperty 메서드로 추가)
//  Object.defineProperty(person, 'age',{value:20});
// //TypeError: Cannot define property age, object is not extensible


// const person = {name: 'lee'};

// //person객체는 밀봉된 객체가 아니다
// console.log(Object.isSealed(person)); //false
// Object.seal(person); // 객체를 밀봉하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
// console.log(Object.isSealed(person)); //true


// //밀봉된 객체는 configurable이 false이다.
// console.log(Object.getOwnPropertyDescriptors(person));

// // name: {
// //     value: 'lee',
// //     writable: true,
// //     enumerable: true,
// //     configurable: false
// //   }

// //프로퍼티 추가 금지
// person.age=25; //무시. strict모드에서는 에러
// console.log(person); //{ name: 'lee' }

// //프로퍼티 삭제 금지
// delete person.name; //무시. strict 모두에서는 에러
// console.log(person); //{ name: 'lee' }

// //프로퍼티 값 갱신 가능
// person.name='kim';
// console.log(person); //{ name: 'kim' }

// //프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person,'name', {configurable:true});
// //TypeError: Cannot redefine property: name



// const person= {name: 'lee'};

// console.log(Object.isFrozen(person)); //false
// Object.freeze(person); //객체 동결
// console.log(Object.isFrozen(person)); //true



// //동결된 객체는 writable과 configurable이 false이다.
// console.log(Object.getOwnPropertyDescriptors(person));

// // name: {
// //     value: 'lee',
// //     writable: false,
// //     enumerable: true,
// //     configurable: false
// //   }


// // 프로퍼티 추가 금지
// person.age=20; //무시. strict mode에선 error
// console.log(person); //{ name: 'lee' }


// //프로퍼티 삭제 금지
// delete person.name; //무시. strict mode에선 error
// console.log(person); //{ name: 'lee' }


// //프로퍼티 값 갱신 금지
// person.name='yun'; //무시. strict mode에선 error
// console.log(person); //{ name: 'lee' }


// //프로퍼티 어트리뷰트 재정의 금지
// Object.defineProperty(person,'name',{configurable:true});
// //TypeError: Cannot redefine property: name


//중첩객체는 얕은 변경방지로 막을 수 없다
// const person={
//     name: 'lee',
//     address:{city:'Seoul'}
// };


// Object.freeze(person); //객체 동결
// console.log(Object.isFrozen(person)); //true

// person.name='yun'; //무시.

// console.log(Object.isFrozen(person.address)); //false
// person.address.city='Yeosu'; //변경 가능

// console.log(person); //{ name: 'lee', address: { city: 'Yeosu' } }




function deepFreeze(target){
    //모든 프로퍼티를 순회하며 재귀적으로 동결한다.
    if(target && typeof target ==='object' && !Object.isFrozen(target)){
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}


const person={
    name:'LEE',
    address:{city:'Goyang'}
};


deepFreeze(person);
console.log(Object.isFrozen(person)); //true 객체 동결
console.log(Object.isFrozen(person.address)); //true 중첩 객체 동결

person.address='Busan'; //무시
console.log(person); //{ name: 'LEE', address: { city: 'Goyang' } }














