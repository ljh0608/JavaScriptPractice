


//promise resolve

//배열을 resolve하는 프로미스 생성
//     const resolvedPromise=Promise.resolve([1,2,3]);
// resolvedPromise.then(console.log); //[ 1, 2, 3 ]

// //위와 동일하게 동작
// const resolved=new Promise(resolve=> resolve([1,2,3]));
// resolved.then(console.log); //[ 1, 2, 3 ]


// //promise reject
// //에러 객체를 reject 하는 프로미스 생성
// const rejectedPromise=Promise.reject(new Error('Error!'));
// rejectedPromise.catch(console.log); //Error: Error!

// //위와 동일하게 동작
// const rejected=new Promise((_,reject)=>reject(new Error('Error')));
// rejected.catch(console.log); //Error: Error


//promise.all
const requestData=()=>
    new Promise(resolve =>setTimeout(()=>resolve(1),3000));
const requestData2=()=>
    new Promise(resolve =>setTimeout(()=>resolve(2),2000));
const requestData3=()=>
    new Promise(resolve =>setTimeout(()=>resolve(3),1000));


    Promise.all([requestData(),requestData2(),requestData3()])
    .then(console.log) //[1,2,3] 약 3초 소요
    .catch(console.error);


    // const res=[];
    // requestData()
    // .then(data=>{
    //     res.push(data);
    //     return requestData2();
    // })
    // .then(data=>{
    //     res.push(data);
    //     return requestData3();
    // })
    // .then(data=>{
    //     res.push(data);
    //     console.log(res); //[ 1, 2, 3 ] 약 6초 소요
    // })
    // .catch(console.error);



Promise.all([
    1, //Promise.resolve(1)
    2, //Promise.resolve(2)
    3 //Promise.resolve(3)
]).then(console.log) //[ 1, 2, 3 ]
.catch(console.error);

