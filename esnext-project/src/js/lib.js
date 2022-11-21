
// // 화살표 함수와 지수함수
// [1,2,3].map(n=>n**n);


// // -------------- ES5 사양 소스코드 --------------
// "use strict"

// [1,2,3].map(function(n){
//     return Math.pos(n,n);
// })





export const pi=Math.PI;

export function power(x,y){
    return x**y;
}

//es6 클래스
export class Foo{
    #private =10;

    foo(){
        const {a,b, ... x}={...{a:1, b:2},c:3,d:4 };
        return {a,b,x};
    }

    bar(){
        return this.#private;
    }
}




