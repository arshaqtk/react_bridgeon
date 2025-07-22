let numbers = [1, 2, 3, 2, 4, 3, 5];
let set=[...new Set(numbers)] //converts to an array
console.log(set)

let mixed = [1, "1", 2, 2, "2", 3, "1", 1];
let newset=[...new Set(mixed)]
console.log(newset)