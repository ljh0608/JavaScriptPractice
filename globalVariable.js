var x= 'global';

function foo(){
    var x='local';
    console.log(x); //undefined

return x;
}

foo();
console.log(x); // global