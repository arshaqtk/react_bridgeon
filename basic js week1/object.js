// let student={
//     name:"Arshaq",
//     age:21,
//     course:"javascript",
//     isActive:true
// }

// console.log(student.name);
// console.log(student["course"])

// student.email="arshaqtk4@gmail.com";
// student.age=22;
// delete student.isActive;
// console.log(student)

// let calculator={
//     add:function (a,b){
//         return a+b
//     },
//     multiply:function(a,b){
//         return a*b
//     }
// }
// console.log(calculator.add(5,3))
// console.log(calculator.multiply(4,2))

// let user={
//   name: "Ali",
//   address: {
//     city: "Kochi",
//     pincode: 682001
//   },
//   hobbies: ["reading", "coding"]
// }

// console.log(user.address.city)
// console.log(user.hobbies[1])

// let laptop={
//     brand:"samsung",
//     ram:"16gb",
//     price:150000
// }
// for(let i in laptop){
//     console.log(`${i} : ${laptop[i]}`)
// }

// function person(name,age){
//     this.name=name,
//     this.age=age
//     this.greet=function(){
//         return "Hello, my name is " + this.name
//     }
// }


// let p1=new person("arshaq",21) 
// console.log(p1.name)
// console.log(p1.greet())

console.log(this)
let user = {
  name: "Arshaq",
  method:function(){
    greet= () => {
    console.log("Hi " + this.name);
  }
 greet()
  }
  
};
user.method(); // Output: Hi undefined ❌
