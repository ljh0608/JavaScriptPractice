
// const mySymbol=Symbol();
// console.log(typeof( mySymbol)); //symbol

// //심벌 값은 외부로 노출되지 않는다.
// console.log(mySymbol); //Symbol()


// const mySymbol = Symbol('mySymbol');
// const mySymbol2 = Symbol('mySymbol');

// console.log(mySymbol===mySymbol2); //false


// const mySymbol = Symbol('mySymbol');

// //불리언으로 형변환
// console.log(!!mySymbol); //true


// //전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌값 생성
// const s1=Symbol.for('mySymbol');
// const s2=Symbol.for('mySymbol');
// const s3= Symbol('foo');

// console.log(s1===s2); //true

// //전역 심벌 레지스트리에 저장된 심벌 값의 키 추출
// console.log(Symbol.keyFor(s1)); //mySymbol
// console.log(Symbol.keyFor(s3)); //undefined


// //위, 아래, 왼쪽, 오른쪽을 나타내는 상수 정의
// const Direction= {
//     UP:Symbol('UP'),
//     DOWN:Symbol('DOWN'),
//     LEFT:Symbol('LEFT'),
//     RIGHT:Symbol('RIGHT')
// };

// const myDir=Direction.UP;

// if(myDir===Direction.UP) console.log('your going up'); //your going up


// const obj={
//     [Symbol.for('mySymbol')]:1

// };

// console.log(obj[Symbol.for('mySymbol')]); //1



// const obj={
//     [Symbol.for('mySymbol')]:1,
//     '2': 2
// };

// // 아래 모두 심벌 프로퍼티 키는 찾을 수 없다.
// for(const key in obj){
//     console.log(key); //2
// }

// console.log(Object.keys(obj)); //[ '2' ]
// console.log(Object.getOwnPropertyNames(obj));//[ '2' ]

// //getOwnPropertySymbols 사용시
// //심벌 값 프로퍼티키로 생성한 프로퍼티 찾을 수 있음
// console.log(Object.getOwnPropertySymbols(obj)[0]); //Symbol(mySymbol)


Array.prototype[Symbol.for('sum')]= function(){
    return this.reduce((acc, cur) => acc+cur,0);
};

console.log([1,2][Symbol.for('sum')]());