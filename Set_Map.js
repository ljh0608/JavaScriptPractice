
// const set1 =new Set([1,2,3,3]);
// console.log(set1); //Set(3) { 1, 2, 3 }

// const set2=new Set('Hello');
// console.log(set2); //Set(4) { 'H', 'e', 'l', 'o' }



//여기서부터
// const uniq=array=>array.filter((v,i,self)=>self.indexOf(v)===i);
// console.log(uniq([2,1,2,3,4,3,4])); //[ 2, 1, 3, 4 ]


const {size} =new Set([1,2,3,3]);
console.log(size); // 3


const set = new Set();
console.log(set); //Set(0) {}

set.add(1);
console.log(set); // Set(1) { 1 }

set.add(1).add(2);
console.log(set); // Set(2) { 1, 2 }

