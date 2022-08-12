const request={
    get(url) {
        return fetch(url);
    },
    post(url,payload){
        return fetch(url,{
            method:'POST',
            headers:{'content-Type' : 'application/json'},
            body: JSON.stringify(payload)
        });
    },
    patch(url,payload){
        return fetch(url,{
            method:'PATCH',
            headers:{'content-Type' : 'application/json'},
            body:JSON.stringify(payload)
        });
    },
    delete(url){
        return fetch(url,{method:'DELETE'});
    }
};
//!sa
//asdsad
request.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>{
        if(!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(todos=>console.log(todos))
    .catch(err=>console.error(err));