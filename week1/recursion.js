// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
   
  if (n === 0) return 1; // base case
  return n * factorial(n - 1);
   // recursive case
}

console.log(factorial(5)); // 120




function sum(n){
    if (n==1){
        return 1;
    }else return n+=sum(n-1)
}

console.log(sum(5))

function rev(str){
    if(str.length<=1){
        return str;
    }
     return str[str.length-1]+rev(str.slice(0,-1))
}

console.log(rev("arshaq"))



function sum(num){
    if(num<=1){return num}
   
    return num+=sum(num-1)

}
console.log(sum(15))


function reverse(str){
    if(str.length<1){
        return str
    }
    return str[str.length-1]+reverse(str.slice(0,-1))
}

console.log(reverse("arshaq"))



// function palindrome(str){
//     if(str.length<1){
//         return str;
//     }
//     return str[0]==str[str.length-1]?true:false
// }

// console.log(palindrome("madam"))
// console.log(palindrome("adam"))



// let marks = [30, 45, 60, 75, 90];

// // 1. Use map to convert each mark to a grade:
// grade=marks.map((num)=>(num <50)?"Fail":"Pass")



// obj=marks.map((num)=>{
//     return {mark:num,
//         grade:(num <50)?"Fail":"Pass"
//     }
// })


// console.log(grade)
// console.log(obj)