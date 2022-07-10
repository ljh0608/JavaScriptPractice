
// const strObj=new String();
// console.log(strObj); //[String: '']


// const strObj=new String(123);

// console.log(strObj); //[String: '123']
// console.log(strObj[2]); //3

// console.log('hello'.length); // 5


// const str='hello world';

// console.log(str.includes('l')); //true
// console.log(str.includes('w')); //true
// console.log(str.includes('3')); //false

// const str='hello world';

// console.log(str.startsWith('hel')); //true
// console.log(str.startsWith('b')); //false
// console.log(str.startsWith('h')); //true


// const str='hello world';

// for(let i=0;i<str.length;i++){
//     console.log(str.charAt(i)); //h e l l o w o r l d
// }



// const str='hello world';

// console.log(str.substring(1,3)); //el (1번인덱스부터 3이전, 2번 인덱스까지 부분 문자열)
// console.log(str.substring(1,4)); //ell (1번인덱스부터 4이전, 3번 인덱스까지 부분 문자열)

// //인덱스 3부터 마지막 문자까지 문자열
// console.log(str.substring(3)); //lo world




// const str='hello world';

// console.log(str.search(/o/)); //4
// console.log(str.search(/x/)); //-1


// const str='hello world';
// console.log(str.substring(str.indexOf(' ')+1,str.length)); // world
// console.log(str.substring(0,str.indexOf(' '))); // hello


// const str='hello world';

// console.log(str.substring(0,5)); //hello
// console.log(str.slice(0,5)); //hello

// //substring 인수 < 0 인 경우 0으로 취급
// console.log(str.substring(-5)); //hello world
// console.log(str.slice(-5)); //world


// const str='Hello World';

// console.log(str.toUpperCase()); // HELLO WORLD
// console.log(str.toLowerCase()); // hello world

// const str='  foo   ';

// //앞 뒤 공백문자 제거
// console.log(str.trim()); //'foo'
// //앞 공백문자 제거
// console.log(str.trimStart()); //'foo   '
// //뒤 공백문자 제거
// console.log(str.trimEnd()); //'  foo'

// const str='hello world';

// console.log(str.replace('world','Lee')); //hello Lee


// //카멜케이스를 스네이크 케이스로 변경하는 함수
// function camelToSnake(camel){
//     return camel.replace(/.[A-Z]/, match=>{
//         return match[0]+'_'+match[1].toLowerCase();
//     });

// }

// const camelCase='camelCase';
// console.log(camelToSnake(camelCase));

// //스네이크 케이스를 카멜케이스로 변경하는 함수
// const snakeCase='snake_case';

// function snakeToCamel(snake){
//     return snake.replace(/_[a-z]/g, match=>{
//         return  match[1].toUpperCase();
//     });
// }

// console.log(snakeToCamel(snakeCase)); //snakeCase


// const str ='How are you doing?';

// console.log(str.split(' ')); //[ 'How', 'are', 'you', 'doing?' ]

// //빈문자열 전달시 각 문자를 모두 분리
// console.log(str.split(''));
// //[ 'H', 'o', 'w', ' ', 'a',  'r', 'e',
// // ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i','n', 'g', '?']

// console.log(str.split('a')); //[ 'How ', 're you doing?' ]


