const meal={
    한식 : "불고기",
    일식 :" 초밥",
    중식 :"멘보샤",
    인도식:"카레"
};
 //test
// const getMeal=(mealType)=>{
//     if(mealType==="한식") return "불고기"
//     if(mealType==="중식") return "멘보샤"
//     if(mealType==="일식") return "초밥"
//     return "굶기";
// }

//if문으로 한식 중식 일식을 따질때 음식의 종류가 너무 많으면
//코드가 불필요하게 길어진다. 키와 값을 통해 출력 가능하다.
const getMeal=(getMealType)=>{
    return meal[getMealType]||"굶기";
};

console.log(getMeal("한식")); //불고기
console.log(getMeal("일식")); // 초밥

console.log(getMeal()); //굶기