// const base ={
//     name: 'lee',
//     sayHi(){
//         return `Hi! ${this.name}`;
//     }
// };

// const derived = {
//     __proto__: base,

//     //sayHi는 ES6메서드다. 이는 HomeObject를 갖는다.
//     //sayHi의 HomeObject는 sayHi가 바인딩된 객체인 derived를 가리키고
//     //super는 sayHidml HomeObject의 프로토타입인 base를 가리킨다.
//     sayHi(){
//         return `${super.sayHi()}. how are you doing?`;
//     }
// };

// console.log(derived.sayHi()); //Hi! lee. how are you doing?



// 화살표 함수

// const multiply=(a,b)=> a*b;
// console.log(multiply(23,3)); //69

//객체 리터럴 반환
// const create = (id, content)=> ({id,content});
// console.log(create(1,'javascript')); //{ id: 1, content: 'javascript' }


// console.log([1,2,3].map(v=>v*2)); //[ 2, 4, 6 ]

//  class prefixer {
//     constructor(prefix){
//         this.prefix=prefix;
//     }

//     add(arr){
//         return arr.map(function(item){
//             return this.prefix+' '+item;
//         },this); //this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
//     }
//  }

// const prefixer_ = new prefixer('-webkit-');
// console.log(prefixer_.add(['transition', 'user-select'])); //[ '-webkit- transition', '-webkit- user-select' ]

// class prefixer {
//     constructor(prefix){
//         this.prefix=prefix;
//     }

//     add(arr){
//         return arr.map((item)=>{
//             return this.prefix+' '+item;
//         }); //this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
//     }
//  }

// const prefixer_ = new prefixer('-webkit-');
// console.log(prefixer_.add(['transition', 'user-select'])); //[ '-webkit- transition', '-webkit- user-select' ]



// const x=1;

// const normal= function() {return this.x};
// const arrow=()=>this.x;

// console.log(normal.call({x:10}));
// console.log(arrow.call({x:10}));

// function bar(param1, param2, ...rest){
//     console.log(param1); //1
//     console.log(param2); //2
//     console.log(rest); //[ 3, 4, 5 ]

// }


// bar(1,2,3,4,5);

// function foo(...rest){}
// console.log(foo.length); //0

// function bar(x, ...rest){} //1
// console.log(bar.length);

// function baz(x,y, ...rest){} //2
// console.log(baz.length);


// function sum(...args){

//     return args.reduce((pre,cur)=>pre+cur,0);
// }

// console.log(sum(1,2,3,4,5,6)); //21


function sum(x,y){
    //인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값 할당
    x=x||0;
    y=y||0;

    return x+y;

}

console.log(sum(1,2)); //3
console.log(sum(2)); //2


