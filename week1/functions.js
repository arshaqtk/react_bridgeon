// "Hello, Arshaq!"
function greetUser(name){
    console.log("Hello, "+name+"!");
}
greetUser("Arshaq"); 

// Add Two Numbers
function addNumbers(a,b){
    return a+b
}
console.log(addNumbers(4, 7)) 

let isEven=(num)=>num%2==0?true:false
console.log(isEven(6)) 

// Count Vowels in a String
function countVowels(str){
    let count=0;
    for(let i of str){
        if(/[aeiou]/.test(i)){
            count++
        }
    }
    return count;
}
console.log(countVowels("hello world"))

// Reverse a String
function reverseStr(str){
    return str.split("").reverse().join("");
}

console.log(reverseStr("hello"))
console.log(reverseStr("Arshaq tk"))


// Palindrome Checker

function isPalindrome(str){
    let rev=str.split("").reverse().join("");
    let res=(rev.replace(/\s/g,"").toLowerCase()==str.replace(/\s/g,"").toLowerCase())?true:false
    return res

}
console.log(isPalindrome("madam"))
console.log(isPalindrome("A man a plan a canal Panama"))
console.log(isPalindrome("hello"))



function findMax(arr){
//    return Math.max(...arr)
let max=arr[0]
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>max){
        max=arr[i]}
}
return max;
}
console.log(findMax([1, 5, 3, 9, 2]))
console.log(findMax([-10, -5, -1, -99]))


function charFrequency(str){
    let obj={}
    for(let i of str){
        obj[i]=(obj[i]||0)+1
    }
    return obj;
}

console.log(charFrequency("apple"))


