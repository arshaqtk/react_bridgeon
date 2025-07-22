function multiplyAll(...nums){
    let res=1;
    for(let i of nums){
     res*=i   
    }
    return res;
}

values=[12,34,54,34,22,5]
console.log(multiplyAll(...values)) //spread


const arr1=[12,34,54,34,22,5]
const arr2=[32,32,4,5,2,5]
console.log(...arr1,...arr2)
console.log(arr1,arr2)


