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
// let regExp=/is/;

// console.log(target.match(regExp)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// //모든 매칭결과 반환
// regExp=/is/g;
// console.log(target.match(regExp)); //[ 'is', 'is' ]



// const target='Is this all there is?';

// //is 문자열을 대소문자를 구별하여 한 번만 검색
// console.log(target.match(/is/)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

// // 대소문자 구별 없이 한번만 검색
// console.log(target.match(/is/i)); //[ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

// //대소문자 구별하여 전역에서 검색
// console.log(target.match(/is/g)); //[ 'is', 'is' ]

// ///대소문자 구별없이 전역에서 검색
// console.log(target.match(/is/ig)); //[ 'Is', 'is', 'is' ]


// //임의의 문자열 검색
// const target='Is this all there is?';
// // 임의의 3자리 문자열을 대소문자 구별하여 전역 검색
// const regExp=/.../g;

// console.log(target.match(regExp));
// // [
// //     'Is ', 'thi',
// //     's a', 'll ',
// //     'the', 're ',
// //     'is?'
// //   ]
// //임의의 2자리 문자열 대소문자 구별없이 전역 검색
// const regExp2= /../ig;
// console.log(target.match(regExp2));

// // [
// //     'Is', ' t', 'hi',
// //     's ', 'al', 'l ',
// //     'th', 'er', 'e ',
// //     'is'
// //   ]



//31.5.3 @@@

// const target ='A AA B BB Aa Bb AAA';

// //A가 최소 한번 최대 두번 반복하는 문자열 전역 검색
// const regExp=/A{1,2}/g;

// console.log(target.match(regExp)); //[ 'A', 'AA', 'A', 'AA', 'A' ]


// const target ='A AA B BB Aa Bb AAA';

// //A가 두번 반복하는 문자열 전역 검색
// const regExp=/A{2}/g;

// console.log(target.match(regExp)); //[ 'AA', 'AA' ]



// const target ='A AA B BB Aa Bb AAA';

// //A가 최소 두번 이상 반복하는 문자열 전역 검색
// const regExp=/A{2,}/g;

// console.log(target.match(regExp)); //[ 'AA', 'AAA' ]




// const target ='A AA B BB Aa Bb AAA';

// //A가 최소 한번 이상 반복되는 문자열을 전역 검색
// const regExp=/A+/g;

// console.log(target.match(regExp)); //[ 'A', 'AA', 'A', 'AAA' ]



//?

// const target ='color colour colouur';

// //colo 다음 u가 최대 한 번 이상 반복되고 r이 이어지는
// //문자열 전역 검색
// const regExp=/colou?r/g;

// console.log(target.match(regExp)); //[ 'color', 'colour' ]



// const target ='A AA B BB Aa Bb AAA';

// const regExp=/A|B/g;
// console.log(target.match(regExp));

// // [
// //     'A', 'A', 'A', 'B',
// //     'B', 'B', 'A', 'B',
// //     'A', 'A', 'A'
// // ]



// const target ='A AA B BB Aa Bb AAA';

// const regExp=/A+|B+/g;
// console.log(target.match(regExp));

// // [
// //     'A',   'AA',
// //     'B',   'BB',
// //     'A',   'B',
// //     'AAA'
// //   ]



// const target ='A AA B BB Aa Bb AAA';

// const regExp=/[A-Za-z]+/g;

// console.log(target.match(regExp));
// // [
// //     'A',   'AA',
// //     'B',   'BB',
// //     'Aa',  'Bb',
// //     'AAA'
// //   ]


// const target='AA BB 12,345 _%$#';

// const regExp=/[\w,]+/g;
// const regExp2 =/[\W,]+/g;
// console.log(target.match(regExp)); //[ 'AA', 'BB', '12,345', '_' ]
// console.log(target.match(regExp2)); //[ ' ', ' ', ',', ' ', '%$#' ]



// const target='AA BB 12 Aa Bb';

// const regExp=/[^\d,]+/g;
// const regExp2 =/[0-9]+/g;
// console.log(target.match(regExp)); //[ 'AA BB ', ' Aa Bb' ]
// console.log(target.match(regExp2)); //[ '12' ]


// const target= 'https://poiemweb.com';

// //com으로 끝나는지 검사한다.
// const regExp=/com$/;
// console.log(regExp.test(target)); //true





// //http:// 또는 https://로 시작하는지 검사
// const url='https://example.com';

// console.log(/^https?:\/\//.test(url));


// const fileName='index.html';

// console.log(/html$/.test(fileName)); //true

// let target='Hi';
// //하나 이상 공백으로 시작하는지 검사
// console.log(/^[\s]+/.test(target)); //false

// target='   hihi';
// console.log(/^[\s]+/.test(target)); //true


let target='abc#123';

//특수문자는 A-Za-z0-9 이외의 문자
console.log((/[^A-Za-z0-9]/).test(target)); //true



