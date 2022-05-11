import emojipedia from "./emojipedia";

const subString = emojipedia.map(function (item) {
  return item.meaning.substring(0, 100);
});

console.log(subString);

// const numbers = [3, 56, 12, 34];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }
// const doubleNum = numbers.map(double);
// console.log(doubleNum);

//Filter - Create a new array by keeping the items that return true.
// const newNUm = numbers.filter(function (num) {
//   return num > 10;
// });

// const newNum = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNum.push(num);
//   }
// });

// console.log(newNum);

//Reduce - Accumulate a value by doing something to each item in an array.
// const newNum = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// var newNum = 0;
// numbers.forEach(function(num){
//   return newNum += num;
// });
// console.log(newNum);

//Find - find the first item that matches from an array.

// const newNum = numbers.find(function(num){
//   return num > 10;
// });

// console.log(newNum);
//FindIndex - find the index of the first item that matches.
// const newNum = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNum);
