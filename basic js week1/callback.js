setTimeout(function(){
    console.log("5 seconds")
},2000);

function x(y){
    console.log("x");
    y()
}
x(function y(){
    console.log("y")
})


function proccessData(num,callback){
    let res=num*2
    callback(res)
    return res
     
}


console.log(proccessData(5,(value)=>{
    console.log(value)
}))


let map = new Map();
map.set("apple", "red");
map.set("banana", "yellow");

for (let [i,value] of map) {
  console.log([i,value]);
}


let arr=[1,3,2]
let arr2=[98,98]
arr[0]=arr2[1]
console.log(arr)