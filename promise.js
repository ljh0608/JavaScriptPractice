
const promiseGet=url=>{
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.send();

        xhr.onload=()=>{
            if(xhr.status===200){
                //성공적인 응답일시 resolve함수 호출
                resolve(JSON.parse(xhr.response));
            }

            else{
                reject(new Error(xhr.status));
            }
        };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1');