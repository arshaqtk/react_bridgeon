// Expected:
// "apple" => "red"
// "banana" => "yellow"
// "grapes" => "purple"

let obj=new Map()
obj.set("apple","red")
obj.set("banana","yellow")
obj.set("grapes","purple")

console.log(obj)

if(obj.has("banana")){
    console.log("Yes, it exists")
}
console.log(obj.size)

obj.set("banana","green")
console.log(obj)
let res=[...obj]
console.log(res)



// Map to Object and Back

let colorMap = new Map([
  ["apple", "red"],
  ["banana", "yellow"],
  ["grapes", "purple"]
]);

// Convert Map to Object
let colorObj = Object.fromEntries(colorMap);
console.log("Object:", colorObj);

// Add a new key
colorObj.mango = "orange";

// Convert back to Map
let newMap = new Map(Object.entries(colorObj));
console.log("Map:", newMap);


