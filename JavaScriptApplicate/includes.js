function isKoreanFood(food){
    if(["불고기", "떡볶이","비빔밥"].includes(food)){
        return true;
    }
    return false;
}

const food1=isKoreanFood("불고기");
const food2 =isKoreanFood("파스타");

console.log(food1);
console.log(food2);