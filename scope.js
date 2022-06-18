// function foo(){
// 	var x =1;

//     var x=2;  // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용
//       		  // 따라서 아래 변수 선언문은 js엔진에 의해 var 키워드가 없는 것처럼 동작
//     console.log(x); //2
// }

// foo();


// function bar(){
// 	let y=1;
//     //let이나 const로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다

//     let y=2;  // Syntax error
// }

// bar();

var x=1;
function foo(){
    var x=10;
bar();
}

function bar(){

        console.log(x);

}

foo();
bar();