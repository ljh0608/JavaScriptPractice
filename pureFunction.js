// var count=0;

// function increase(n){
//     return ++n;
// }

// console.log(count);//0
// increase(count);
// console.log(count); //0 (함수의 외부상태를 변경하지 않음)
// count=increase(count);
// console.log(count); //1


var count1=0;
//비순수 함수

function increase1(){
    return ++count1;
}

increase1();
console.log(count1); //1


increase1();
console.log(count1); //2



var x= 123;

function a(){
    var x=111;
    console.log(x);
}

a();

console.log(x);