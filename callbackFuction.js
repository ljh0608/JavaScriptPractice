// function repeat(n,f){
//     for(var i=0;i<n;i++){
//         f(i);

//     }
// }

// var logAll=function(i){
//     console.log(i);

// }

// repeat(5,logAll); //0 1 2 3 4

// var logOdds=function(i){
//     if(i%2) console.log(i);
// }

// repeat(5,logOdds); //1 3

// var res = [1,2,3].map(function(item) {
//     return item*2;
// });

// console.log(res); //[2,4,6]

// res=[1,2,3].filter(function(item){
//     return item%2;
// });

// console.log(res); //[1,3]

// res=[1,2,3].reduce(function(acc,cur) {
//     return acc+cur;
// },0);

// console.log(res); // 6





function checkmood(mood,goodCallback,badCallback){
    if(mood==="good"){
        goodCallback();
    }

    else{
        badCallback();
    }
}

function cry(){
    console.log('ACTION :: CRY');
}

function sing(){
    console.log('ACTION :: SING');
}

checkmood('sad',sing,cry);


