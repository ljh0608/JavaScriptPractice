'use strict';
function foo(){
    x=10;
}

foo();
console.log(x); //strict 모드가 아닐땐 10
//strict 모드일 땐 ReferenceError: x is not defined