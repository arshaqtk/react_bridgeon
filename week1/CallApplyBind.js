let name={
    firstname:"muhammed",
    lastname:"Arshaq",
    printfullname:function (){
        console.log(this.firstname+this.lastname);
    }
}
name.printfullname()
let name2={
    firstname:"Aq",
    lastname:"Tk"
}
//call method
name.printfullname.call(name2)

let printfullname=function (){
        console.log(this.firstname+" "+this.lastname);
    }

printfullname.call(name)

//if we have arguments to pass
let printfullnames=function (place){
        console.log(this.firstname+" "+this.lastname+" from:"+place);
    }

printfullnames.call(name,"kottakkal")  //passes the first argument as the object and rest of them are the arguments

//apply method
printfullnames.call(name,["kottakkal"]) //second argument pass as array list

//bind method

let print=printfullnames.bind(name2,"kottakkal")
print()

//task

const user1 = { name: "Arshaq" };
const user2 = { name: "Ravi" };

function say(message) {
  console.log(message + ", " + this.name);
}

// 1. Use call() to greet Arshaq with "Hi"
// 2. Use apply() to greet Ravi with "Hello"
// 3. Use bind() to create a permanent greet function for Arshaq
say.call(user1,"Hi")
say.apply(user2,["Hi"])
let greet=say.bind(user1,"Hi")
greet()

let use1 = {
  name: "Arshaq",
  greet: function(city) {
    console.log(`Hello, I'm ${this.name} from ${city}`);
  }
};

let use2 = {
  name: "Ravi"
};

// Task: Use user1's greet for user2
use1.greet.call(use2, "Kochi");
