

// console.log('[Start]');

// try{
// foo();

// }catch(error){
//     console.log('에러발생',error);
// }
// console.log('[End]');


// console.log('[Start]');

// foo();

// console.log('[End]');


// const $button =document.querySelector('button');

// $button?.classList.add('disabled');

// try{
//  // 실행할 코드(에러가 발생할 가능성이 있는 코드)
// }catch(err){
//  // try 코드 불록에서 에러가 발생하면 이 코드 블록의 코드가 실행
//  // err에는 try 코드 블록에서 발생한 Error 객체가 전달된다.

// }finally{
//  // 에러 발생과 상관없이 반드시 한 번 실행된다.
// }


// console.log('[Start]');
// try{
//    foo();
//    }catch(err){
//     console.error(err);
//    }finally{
//     console.log('finally');
//    }
//    console.log('[End]');


// const error=new Error('invalid');


// try{

//     throw new Error('something wrong');
// }catch(error){
//     console.log(error); //Error: something wrong
// }


// const foo=()=>{
//     console.log('good!');
// }

// const repeat = (n,f) =>{
//     //매개변수 f에 전달된 이수가 함수가 아니면 TypeError를 발생시킨다.
//     if(typeof f !== 'function') throw new TypeError('f must be a function');

//     for (var i=0; i<n; i++){
//         f(i);
//     }
// };

// try{
//     repeat(2,foo);
// }catch(err){
//     console.error(err); //good! good!
// }

const foo= ()=>{
    throw Error('foo에서 발생한 에러');
};

const bar = ()=>{
    foo();
};

const baz = ()=>{
    bar();
};

try {
    baz();
}catch(err){
    console.error(err);
}