

const obj={
    name:'Lee',
    age:20,
    alive:true,
    hobby:['basket ball','game']
};

const json=JSON.stringify(obj);
console.log(json, typeof json);
// //{"name":"Lee","age":20,"alive":true,"hobby":["basket ball","game"]} string

const parsed=JSON.parse(json);
console.log(parsed, typeof parsed);
//{ name: 'Lee', age: 20, alive: true, hobby: [ 'basket ball', 'game' ] } object


// // 들여쓰기해서 보기좋게 변환
// const prettyjson=JSON.stringify(obj,null,3);
// console.log(prettyjson, typeof prettyjson);
// // {
// //     "name": "Lee",
// //     "age": 20,
// //     "alive": true,
// //     "hobby": [
// //        "basket ball",
// //        "game"
// //     ]
// //  } string



// //값의 타입이 number면 필터링되어 변환하지 않는다.
// function filter(key,value){
//     return typeof value==='number'? undefined:value;
// }

// // stringify 두번째 인수로 replacer 함수전달
// const strFilterObject=JSON.stringify(obj, filter,2);
// console.log(typeof strFilterObject, strFilterObject);
// //string {
// //     "name": "Lee",
//     "alive": true,
//     "hobby": [
//       "basket ball",
//       "game"
//     ]
//   }


// const arr=[
//     {id:1 , name: 'lee'},
//     {id:2, name:'kim'},
//     {id:3, name:'wang'}
// ];

// const jsonArr=JSON.stringify(arr,null,2);
// console.log(jsonArr, typeof jsonArr);

// //[
//     // {
//     //     "id": 1,
//     //     "name": "lee"
//     //   },
//     //   {
//     //     "id": 2,
//     //     "name": "kim"
//     //   },
//     //   {
//     //     "id": 3,
//     //     "name": "wang"
//     //   }
//     // ] string

