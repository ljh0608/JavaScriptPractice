// const tel= '010-1234-5678';

// const regExp=/^\d{3}-\d{4}-\d{4}$/;

// console.log(regExp.test(tel)); //true

// const tel2= '010-1234-567팔';
// console.log(regExp.test(tel2)); //false


// const target ='Is this all there is?';
// //패턴 is
// // 플래그 i => 대소문자를 구별하지 않고 검색
// const regexp=/is/i;

// //test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여
// // 매칭 결과를 불리언으로 반환
// console.log(regexp.test(regexp)); //true


// //pattern : 정규 표현식의 패턴
// // flags : 정규표현식의 플래그
// new RegExp(pattern,[ flags]);


// const target = 'Is this all there is';

// const regexp=new RegExp(/is/i);
// console.log(regexp.test(target)); //true


// const count=(str, char)=>(str.match(new RegExp(char, 'gi')) ?? []).length;
// const count2=(str, char)=>(str.match(new RegExp(char, 'gi')) ?? []);

// console.log(count('Is this all there is?', 'is')); //3
// console.log(count('Is this all there is?', 'xx')); //0
// console.log(count2('Is this all there is?', 'is')); // [ 'Is', 'is', 'is' ]

// const target='Is this all there is?';
// const regExp=/is/;

// console.log(regExp.exec(target)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]


// const target='Is this all there is?';
// const regExp=/is/;

// console.log(regExp.test(target)); //true

// const target='Is this all there is?';
// const regExp=/is/;

// console.log(target.match(regExp)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// //모든 매칭결과 반환
// const regExp2=/is/g;
// console.log(target.match(regExp2)); //[ 'is', 'is' ]



// const target='Is this all there is?';

// //is 문자열을 대소문자를 구별하여 한 번만 검색
// console.log(target.match(/is/)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// // 대소문자 구별 없이 한번만 검색
// console.log(target.match(/is/i)); //[ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// //대소문자 구별하여 전역에서 검색
// console.log(target.match(/is/g)); //[ 'is', 'is' ]

// ///대소문자 구별없이 전역에서 검색
// console.log(target.match(/is/ig)); //[ 'Is', 'is', 'is' ]


const target='Is this all there is?';
// 임의의 3자리 문자열을 대소문자 구별하여 전역 검색
const regExp=/.../g;

console.log(target.match(regExp));
// [
//     'Is ', 'thi',
//     's a', 'll ',
//     'the', 're ',
//     'is?'
//   ]
const regExp2= /../g;
console.log(target.match(regExp2));

// [
//     'Is', ' t', 'hi',
//     's ', 'al', 'l ',
//     'th', 'er', 'e ',
//     'is'
//   ]





