// (function(a) {
    
//   console.log("Hello "+a)
// })("Arshaq");


// counter=(function(){
//     let count=0
//     return function res(){
//         return ++count
//     }

// })()





// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


for(var i=1;i<=3;i++){
    (function(x){
        setTimeout(function()
        {console.log(x)},1000*x)})(i)
}



const Config = (function() {
  let secretKey = "xyz123";
  return {
    getKey: function() {
      return secretKey;
    }
  };
})();

console.log(Config.getKey()); // "xyz123"
console.log(Config.secretKey); // undefined
