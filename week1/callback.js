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
     proccessData(5,(value)=>{
    console.log(value)
})
}


