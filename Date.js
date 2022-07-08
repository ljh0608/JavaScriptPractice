
// console.log(new Date()); //2022-07-07T13:27:04.851Z

// //new 연산자 없이 호출하면 날짜와 시간정보를 나타내는 문자열 반환
// console.log(Date()); //Thu Jul 07 2022 22:27:37 GMT+0900 (대한민국 표준시)


// console.log(new Date('July 22, 2022 10:00:00')); //2022-07-22T01:00:00.000Z
// console.log(new Date('2022/06/08/10:00:00')); //2022-06-08T01:00:00.000Z


// console.log(new Date(2022,7)); //2022-07-31T15:00:00.000Z

// console.log(new Date(2022,11,26,10,0,0,0,)) //2022-12-26T01:00:00.000Z

// //가독성이 좋은 표현
// console.log(new Date('2020/3/26/10:00:00:00')); //2020-03-26T01:00:00.000Z


// const now=Date.now();
// console.log(now); // 1657201079845


// console.log(Date.parse('Jan 2, 1970 00:00:00 UTC')); //86400000

// console.log(Date.parse('Jan 1, 1970 00:00:00 UTC')); //0



// console.log(new Date('2022/7/07').getFullYear()); // 2022

// const today=new Date();
// today.setFullYear(2000);
// console.log(today.getFullYear()); //2000


//  let today=new Date();
// today.setMonth(11);
//  console.log(today.getMonth()); //11
//  console.log(today); //2022-12-07T13:55:34.248Z

// let today=new Date();
// today.setDate(22);
//  console.log(today.getDate()); //22
//  console.log(today); //2022-7-22 T13:55:34.248Z

// const today=new Date();

// today.setHours(7);
// console.log(today.getHours()); //7

// //시 분 초 밀리초 지정
// today.setHours(1,1,1,1);
// console.log(today.getHours()); //1
// console.log(today); //2022-07-06T16:01:01.001Z




// console.log(today.toString()); //Fri Jul 22 2022 12:13:00 GMT+0900 (대한민국 표준시)
// //날짜만 반환
// console.log(today.toDateString()); //Fri Jul 22 2022


// const today=new Date('2022/07/22/12:13');

// console.log(today.toString()); //Fri Jul 22 2022 12:13:00 GMT+0900 (대한민국 표준시)
// //시간만 반환
// console.log(today.toTimeString()); //12:13:00 GMT+0900 (대한민국 표준시)




// const today=new Date('2022/07/22/12:13');

// console.log(today.toISOString()); //2022-07-22T03:13:00.000Z
// console.log(today.toISOString().slice(0,10)); //2022-07-22

// console.log(today.toISOString().slice(0,10).replace(/-/g,'')); //20220722



// const today=new Date('2022/07/22/12:13');

// //인수 생략시 브라우저가 동작중인 시스템의 로캘 적용
// console.log(today.toLocaleString()); //2022. 7. 22. 오후 12:13:00
// console.log(today.toLocaleString('ko-KR')); //2022. 7. 22. 오후 12:13:00
// console.log(today.toLocaleString('en-US')); //7/22/2022, 12:13:00 PM


(function printNow() {
    const today=new Date();

    const dayNames=['(일요일)','(월요일)','(화요일)','(수요일)','(목요일)','(금요일)','(토요일)',];

    const day=dayNames[today.getDay()];

    const year=today.getFullYear();
    const month =today.getMonth()+1;
    const date=today.getDate()+1;

    let hour = today.getHours();
    let minute =today.getMinutes();
    let second=today.getSeconds();

    const ampm=hour>=12? 'PM':'AM';

    //12시간제로 변경
    hour%=12;
    hour=hour||12;

    //10 미만인 분과 초를 2자리로 변경
    minute=minute<10?'0'+minute:minute;
    second=second<10?'10'+second:second;

    const now =`${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

    console.log(now);

    setTimeout(printNow,1000);
}());
