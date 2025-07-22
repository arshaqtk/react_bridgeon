// function createCounter(n){
//     let count=0;
//     return function inner(){
//         let res= count+n;
//         count++
//         return res
        
//     }
    
// }
// let counters = createCounter(10);
// console.log(counters()); // 1
// console.log(counters()); // 2


function createCounter(init){
    debugger
    value=init
   return {
    increment:function (){
        value++
        return value;
    },
    decrement:function (){
        value--
        return value;
    },
    reset:function (){
        value=init
        return value ;
    }
   }
}

const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
