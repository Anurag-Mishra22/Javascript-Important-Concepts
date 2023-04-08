//filter method

const numbers = [200, 450, -400, 3000, -650, -230, 70, 1300];

//filter mehod returns the new array
// the num which is going to  pass the conditon will go inside the new array
// it does not mutate the original array
const deposits = numbers.filter(function (num) {
  return num > 0;
});

console.log(deposits); //[200, 450, 3000, 70, 1300]
console.log(numbers); //[200, 450, -400, 3000, -650, -230, 70, 1300]

const depositsFor = [];
for (const num of numbers) if (num > 0) depositsFor.push(num);
console.log(depositsFor); //[200, 450, 3000, 70, 1300]

// we use the filtermethod inseated of for because we can chain one method after the another

const withdrawals = numbers.filter((num) => num < 0);
console.log(withdrawals); //[-400, -650, -230]
console.log(withdrawals.sort((a, b) => a - b)); // [-650, -400, -230]

// this callback function also get excess to the index-> i and the whole array arr

//function(num,i,arr){}
