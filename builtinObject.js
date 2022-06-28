// const num= new Number(1.5);

// console.log(num.toFixed()); // 2
// console.log(Number.isInteger(0.5)); // false


//encodeURI / decodeURI

const uri= 'https://anstrengung-jh.tistory.com/manage/newpost/?type=post&name=이재훈&job=FE Develop';

const enc=encodeURI(uri);
console.log(enc);
//https://anstrengung-jh.tistory.com/manage/newpost/?type=post&name=%EC%9D%B4%EC%9E%AC%ED%9B%88&job=FE%20Develop

const dec=decodeURI(enc);
console.log(dec); //https://anstrengung-jh.tistory.com/manage/newpost/?type=post&name=이재훈&job=FE Develop

const encC=encodeURIComponent(uri);
console.log(encC);
 //https%3A%2F%2Fanstrengung-jh.tistory.com%2Fmanage%2Fnewpost%2F%3Ftype%3Dpost%26name%3D%EC%9D%B4%EC%9E%AC%ED%9B%88%26job%3DFE%20Develop
