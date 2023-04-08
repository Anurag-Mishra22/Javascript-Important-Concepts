//JS built in sort method

const owners = ["Anurag", "Priya", "Anshika", "Punnet"];

//Array get sorted alphabetically and it mutates the original array
console.log(owners.sort()); //['Anshika', 'Anurag', 'Priya', 'Punnet']
console.log(owners); //['Anshika', 'Anurag', 'Priya', 'Punnet']

//Numbers
const num = [200, 450, -400, 3000, -650, -230, 70, 1300];
//So here we see that these numbers are not at all ordered any way
//and  the reason for this is that the sort method does the sorting based on strings
//so it converts the num to strings and then sort
//so these are alphabetically ordered as if they were string
// console.log(num.sort()); [-230, -400, -650, 1300, 200, 3000, 450, 70]

// so inorder to sort the number we pass callback function
//a->current value , b->next value
// so you can think that a,b is consecutive elements

// if we return <0, a will be before b (keep order)
// return >0 , b will be before a (switch order)
//sort method keeps looping over the array and apply this callback function here until every thing is in ascending order according to the rule that we established here.

// and this is also going to work for string
//Ascending order
// num.sort((a, b) => {
//   //asscending order- > small to large number
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// if we return 0 here that means that these two values are same then the position remains unchanged
num.sort((a, b) => a - b); // improved above code
console.log(num); // [-650, -400, -230, 70, 200, 450, 1300, 3000]

//Descending array
// num.sort((a, b) => {
//   // Descending order- > small to large number
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
num.sort((a, b) => b - a);
console.log(num); //[3000, 1300, 450, 200, 70, -230, -400, -650]

// if you are given the mixed array like strings ,integer,boolean them don't use the sort method as there is no point of using sort method.
