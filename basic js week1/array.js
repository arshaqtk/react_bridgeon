// const arr1 = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];

// const arr3 = arr1.concat(arr2).flat(); 
// console.log(arr3)


// let arr = [1, 2, 3, 4, 5,6,7,8];
// arr.copyWithin(0, 2,4); // Copy from index 3 to the start
// console.log(arr);

// let arr2=arr.findLastIndex((value)=>value>3)


// console.log(arr2)

// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
// const newArr = myArr.flat(2);

// console.log(newArr)


//tasks

// function methods(scores){
// //sort
// let sorted=[...scores].sort((a,b)=>b-a) // Use spread to avoid mutating original
// // let sorted=scores.sort((a,b)=>a-b).reverse()

// console.log("sorted : "+sorted)

// //map

// let maped=scores.map((num)=>{
//     return num+10
// })
// console.log(maped)

// //filter
// let filtered=scores.filter((num)=>num>90)
// console.log("filtered : "+filtered)

// // reduce

// let reduced=scores.reduce((acc,val)=>acc+val)
// console.log("total : "+reduced)

// scores.forEach((num)=>console.log(num))


// //for of avg score
// let sum=0,count=0
// for(let i of scores){
//     sum+=i;
//     count++
// }
// console.log("avg : "+sum/count)

// for (let i of scores){
//     if(i>=80){
//         console.log(`${i} is passed ✅`)
//     }else console.log(`${i} is failed ❌`)
// }


// }

// let scores = [85, 96, 76, 88, 100];



// methods(scores)



//more complex

let salaries = [1200, 1500, 1000, 1800];

let bonus=salaries.map((sal)=>sal+100)
console.log(bonus)

let celsius = [0, 10, 20, 30]; // (°C × 9/5) + 32
let fahrenheit=celsius.map((value)=>(value*9/5)+32)
console.log(fahrenheit)

let students = [
  { name: "Ali", marks: 42 },
  { name: "Sara", marks: 67 },
  { name: "Ram", marks: 59 },
  { name: "Maya", marks: 33 }
];

let filtered=students.filter((value)=>value.marks>50)
filtered.forEach((val)=>console.log(val.name))


let marks = [
  { name: "A", marks: 67 },
  { name: "B", marks: 89 },
  { name: "C", marks: 75 },
  { name: "D", marks: 92 },
  { name: "E", marks: 60 },
];

let sortedmarks=marks.sort((a,b)=>b.marks-a.marks)
let fil=sortedmarks.filter((value,index)=>index<=2)
console.log(fil)