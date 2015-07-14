// ------------ Problem 3 ------------
// ------- Numbers in a string -------
// 
// Given a string that may or may not contain numbers,
// find the sum of any numbers in that string.
// Negative numbers are denoted by a '-' before the number.
// 
// For example the string 'ab5cdef5ghij-10' should return 0.
// The string 'a1bcd2ef4ghi 1' should return 8.


// stringNumSum
// Input: One string STR
// Output: The sum of all the numbers in STR
// Notes: The string may contain negative numbers which are denoted by '-#'

var stringNumSum = function(str) {
  return 0;
}


// test cases
console.log(stringNumSum('ab5 cdef5ghij-10') + ' should equal 0');
console.log(stringNumSum('aa3aa3aa3aa3') + ' should equal 12');
console.log(stringNumSum('aslkdaklnvla') + ' should equal 0');
console.log(stringNumSum('abcd-1eg kdj9kasmcn3') + ' should equal 11');