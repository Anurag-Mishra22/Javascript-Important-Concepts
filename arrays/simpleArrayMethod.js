//methods are simply function that we call on objects.
//so they are function attached to object.

//so if we have array methods that means that array are objects.
//so these array method are simply function that are attached to all the array that we create in javascript.

//so array have special built in methods attached to it.

let arr = ["a", "b", "c", "d", "e"];

//slice method -> we can extract the part of an array but without changing the array.
//will return new array without mutating the original array.
console.log(arr.slice(2)); //["c","d","e"]
console.log(arr.slice(2, 4)); //["c","d"]
console.log(arr.slice(-2)); //["d","e"]
console.log(arr.slice(-1)); //["e"]
console.log(arr.slice(1, -2)); //["b","c"]
// we can use the slice method to create the shallow copy of the array
console.log(arr.slice()); //["a", "b", "c", "d", "e"]
console.log([...arr]); //["a", "b", "c", "d", "e"]

//so you can use the slice method or spread operator to create the shallow copy
// so only time you use the slice method actully when you want to chain the multiple method calling one after the other

// ...........................................

//SPLICE-> this method work the same as that of slice method but only difference is that it mutate the original array.

// console.log(arr.splice(2)); //["c","d","e"]
// console.log(arr); //["a","b"]; the splice deleated the other elements
//imp->>>>>>>> removed last element
arr.splice(-1);
console.log(arr); //["a", "b", "c", "d"]

arr.splice(1, 2); // second parameter is the no. of elements that we want to delete
console.log(arr); //["a","d"];

//..............................................

//REVERSE
let arr1 = ["a", "b", "c", "d", "e"];
let arr2 = ["j", "i", "h", "g", "f"];

// reverse method does mutate the original array
console.log(arr2.reverse()); //[ "f", "g", "h", "i",'j']
console.log(arr2); //[ "f", "g", "h", "i",'j']

//................................................

//CONCAT
//used to concate the two arrays
const letters = arr1.concat(arr2);
console.log(letters); //["a", "b", "c", "d", "e", "f", "g", "h", "i",'j']
console.log([...arr1, ...arr2]); //["a", "b", "c", "d", "e", "f", "g", "h", "i",'j']

//...............................................

//JOIN
console.log(letters.join("-")); //a-b-c-d-e-f-g-h-i-j
