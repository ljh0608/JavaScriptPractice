//계산 기능 파일

const { stubObject } = require("lodash");

const add =(a,b)=> a+b;
const sub=(a,b)=>a-b;

//모듈은 객체단위로 내보낼 수 있음
module.exports={
    moduleName: "calc module",
    add: add,
    sub: sub,
};