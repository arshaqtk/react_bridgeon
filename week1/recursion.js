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

function Numbers(n){
    if(n<1){
        return "";
    }
    let last=n%10;
    og==n
     
    return last.toString()+Numbers(Math.floor(n/10))
}

console.log(Numbers(1201))