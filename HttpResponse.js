
const xhr=new XMLHttpRequest();

//HTTP 요청 초기화  fake REST API제공서비스 사용
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');

// HTTP 요청 전송
xhr.send();

//readystatechange 이벤트는 HTTP 요청의 현재상태를 나타내는
//readyState 프로퍼티가 변경될 때마다 발생한다.
xhr.onreadystatechange=()=>{
    //readyState 프로퍼티 값이 4(DONE)이 아니면 서버 응답이 완료되지 않은 상태이다.
    //서버 응답이 완료되지 않았다면 아무런 처리를 하지 않는다.
    if(xhr.readyState!==XMLHttpRequest.DONE) return ;

    if(xhr.status===200){
        console.log(JSON.parse(xhr.response));
    }
    else{
        console.error('Error', xhr.status, xht.statusText);
    }
};