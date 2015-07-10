// ------------ Problem 1 ------------
// ------ Multiples of 3 and 5 -------

// If we list all the natural numbers below 10 
// that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// multiplesOf3Or5
// Input: an integer N
// Output: Sum of all the multiples of 3 or 5 that are less than N
// Note: Excludes N, you could also implement this to include N 
//       and for the Euler problem, run multiplesOf3Or5(999)

var multiplesOf3Or5 = function(n) {
  return 0;
}

// test cases
// all the test cases should return true

console.log(multiplesOf3Or5(10) + ' should be 10');
console.log(multiplesOf3Or5(2) + ' should be 0');
console.log(multiplesOf3Or5(5) + ' should be 8');
console.log(multiplesOf3Or5(100) + ' should be 2318'); 

console.log('Result for multiplesOf3Or5(1000): ' + multiplesOf3Or5(1000));