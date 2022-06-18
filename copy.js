const o={x: {y:1}}; //중첩된 객체
const c1={...o};

//얕은 복사
console.log('c1.x.y: '+c1.x.y); //c1.x.y: 1
console.log(c1===o); //false c1과 o는 참조값이 다른 별개의 객체
console.log(c1.x===o.x); //true 중첩되어 있는 객체는 참조값을 복사함

const _ =require('lodash');


// 깊은 복사
const c2=_.cloneDeep(o);
console.log('c2.x.y: '+c2.x.y); //c2.x.y: 1

console.log(c2===o); // false c2와 o는 다른 참조 값을 가진 다른 객체
console.log(c2.x===o.x); //false c2.x와 o.x 역시 다른 참조 값을 가진 다른 객체
console.log(c2.x.y===o.x.y); //ture 두 값은 같음


o.x.y=2; //원래 존재하던 o객체의 프로퍼티 값을 변경해봄

console.log('-----얕은복사 c1-------');
console.log(o.x===c1.x); // true
console.log('c1.x.y: '+c1.x.y); //c1.x.y: 2
//o와 같은 참조 값을 가지고 있으므로 o객체가 변경될 때 같이 변경됨

console.log('-----깊은복사 c2-------');
console.log(o.x===c2.x); //false 
console.log('c2.x.y: '+c2.x.y);//c2.x.y: 1
//o객체와 다른 참조 값을 가진 완벽한 복사본이므로 o객체의 변경과는 상관없이 값을 유지함

const r=JSON.stringify(c2);
console.log(r); // {"x":{"y":1}}
