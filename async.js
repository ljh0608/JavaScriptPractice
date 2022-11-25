

function foo(){
    console.log('foo');
}

function bar(){
    console.log('bar');
}
function a()
{

}

setTimeout(foo, 0);
bar();

//setTimeout함수는 bar함수를 블로킹하지 않으므로
//bar함수가 먼저 호출된다.






