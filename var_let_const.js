
// let lee= 88; //SyntaxError: Identifier 'lee' has already been declared
// let lee= 98;


let foo=123;

{
let foo=2;
let bar=3;
}

console.log(foo); //123
console.log(bar); //ReferenceError : 