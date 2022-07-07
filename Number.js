// const num=new Number();
// console.log(num); //[Number: 0]

// console.log(Number('0')); //0
// console.log(Number('-1')); //-1
// console.log(Number('hello')); //NaN
// console.log(Number(true)); //1
// console.log(Number(false)); //0


// console.log(0.1+0.2); //0.30000000000000004

// console.log(0.1+0.2===0.3); //false


// function isEqual(a,b){
//     //a와 b를 뺀값이 Number.EPSILON 보다 작으면 같은 수로 인정.
//     return Math.abs(a-b)<Number.EPSILON;

// }
// console.log(isEqual(0.1+0.2,0.3)); //true


// console.log(Number.MAX_VALUE); //1.7976931348623157e+308

// console.log(Number.MIN_VALUE); //5e-324

// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991


// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); //-Infinity

// console.log(Number.isFinite(0)); //true
// console.log(Number.isFinite(1)); //ture
// console.log(Number.isFinite(Number.MAX_VALUE)); //true
// console.log(Number.isFinite(Infinity)); //true
// console.log(Number.isFinite(-Infinity)); //true


// //타입 변환하지 않는다.
//  console.log(Number.isFinite(null)); //false

//  //0으로 암묵적 타입 변횐
//  console.log(isFinite(null)); //true


// console.log(Number.isInteger(0)); //true
// console.log(Number.isInteger(-1)); //true
// console.log(Number.isInteger(0.4)); //false
// console.log(Number.isInteger('123')); //false
// console.log(Number.isInteger(Infinity)); //false
// console.log(Number.isInteger(false)); //false


// console.log(Number.isNaN(NaN)); //true

// //암묵적 타입 변환하지 않는다.
// console.log(Number.isNaN(undefined));// false

// //암묵적 타입 변환한다. undefined는 NaN으로 암묵적 타입 변환된다.
// console.log(isNaN(undefined));


// console.log(Number.isSafeInteger(0)); //true
// console.log(Number.isSafeInteger(1000000000)); //true
// console.log(Number.isSafeInteger(100000000000000000000)); //false
// console.log(Number.isSafeInteger('123')); //false 암묵적 타입변환 x
// console.log(Number.isSafeInteger(0.5)); //false 정수가 아님
// console.log(Number.isSafeInteger(Infinity)); // 정수가 아님


// console.log((77.1234).toExponential()); //7.71234e+1
// console.log((77.1234).toExponential(2)); //7.71e+1
// console.log((77.1234).toExponential(4)); //7.7123e+1

// //소수점 이하 반올림. 인수를 생략하면 기본 0
// console.log((12345.6789).toFixed()); //12346

// // 소수점 이하 1자릿수 유효
// console.log((12345.6789).toFixed(1)) //12345.7

// // 소수점 이하 3자릿수 유효
// console.log((12345.6789).toFixed(3)) //12345.679


// // 전체 자릿수 유효, 인수 생략시 0
// console.log((12345.6789).toPrecision()); //12345.6789

// //1자리 유효 나머지 반올림.
// console.log((12345.6789).toPrecision(1)); //1e+4
// console.log((12345.6789).toPrecision(2)); //1.2e+4
// console.log((12345.6789).toPrecision(6)); //12345.7


console.log((10).toString());
console.log((10).toString(2));

console.log((10).toString(8));