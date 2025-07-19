
// const [fruits1,fruits2,fruits3]=["Apple", "Banana", "Mango", "Pineapple"];
// console.log(fruits1)
// console.log(fruits2)
// console.log(fruits3)

// const [a,,,b]= [10, 20, 30, 40, 50];
// // Get only 10 and 40 using destructuring
// console.log(a,b)

// const student = { name: "Arshaq", age: 21, course: "JavaScript" };
// const {name,age}=student
// console.log(name)
// console.log(age)

// const address = { country: "India" };
// { city="unknown" }
// console.log(city)


// function greet({ name, country,age }) {
//   console.log(`Hello ${name}, you are ${country} ${age}`);
// }

// const user = { name: "Arshaq", age: 21,country:"india" };
// greet(user); 

const [a,b,...rest]=[1, 2, 3, 4, 5]
console.log(a,b)
console.log(rest)

const response = {
  status: 200,
  data: {
    user: {
      id: 7,
      name: "Arshaq",
      contact: {
        email: "arshaq@example.com"
      }
    }
  }
};

// Extract: id, name, email
const {data:
    {user:
        {id,name,
            contact:{email}}}}=response
console.log(id)
console.log(name)
console.log(email)


const user = {
  username: "arshaqtk",
  level: "pro"
};

const {username:Username}=user
console.log(Username)




// Write a function displayProduct that accepts the object 
// and logs: "Product: Headphone, Price: ₹1999"

function displayproduct({name,price}){
    console.log(`Product: ${name}, Price: ₹${price}`)
}

const product = {
  name: "Headphone",
  price: 1999
};
displayproduct(product)

const person = {
  name: "Arshaq",
  greet: function () {
    const inner = () => {
      console.log("Hello, " + this.name);
    };
    inner();
  }
};

 person.greet()
// ❓ What will it output? Why?

let age = 30;

function intro({ name ,age}) {
  console.log(`${name} is ${age} years old`);
}

const users = { name: "Arshaq", age: 21 };

// ❓ What will be printed? How can you fix it?
intro(users)


 
function myFilter(arr, fn) {
  let result=[]
  for(let i=0;i<arr.length;i++){
    if(fn(arr[i],i)){
        result.push(arr[i])
    }
  }
  return result
}

const nums = [1, 2, 3, 4, 5];

// Filter even numbers
const evens = myFilter(nums, x => x % 2 === 0);

console.log(evens); // Output: [2, 4]
