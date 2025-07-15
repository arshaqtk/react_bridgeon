// const arr1 = [1, 2, [3, 4]];
// const arr2 = [[5, 6], 7, 8];

// const arr3 = arr1.concat(arr2).flat(); 
// console.log(arr3)


let arr = [1, 2, 3, 4, 5,6,7,8];
// arr.copyWithin(0, 2,4); // Copy from index 3 to the start
// console.log(arr);

let arr2=arr.findLastIndex((value)=>value>3)


console.log(arr2)

const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);

console.log(newArr)