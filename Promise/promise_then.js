
// new Promise((resolve)=>resolve('fulfilled'))
//     .then(v=>console.log(v), e=>console.error(e)); //fulfilled


// new Promise((_,reject)=>reject(new Error('rejected')))
//     .then(v=>console.log(v),e=>console.error(e)); //Error: rejected

// new Promise((_,reject)=>reject(new Error('rejected')))
//     .catch(e=>console.log(e));//Error: rejected


new Promise(()=>{}).finally(()=>console.log('finally')); //finally




