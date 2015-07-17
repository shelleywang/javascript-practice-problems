// ------------ Problem 6 ------------
// ------- Sum of dates digits -------
// 
// We want to add up every digit in the birthdate: year, month, and date. 
// Then, each time the sum exceeds 10, add up the 2 digits.
// For example, new Date('06/14/2010') = 5
// 6 + 1 = 7 + 4 = 11, change to 2 + 2 = 4 + 1 = 5



// dateSum
// Input: One date object
// Output: The sum of the digits in the date, not exceeding 10
// Notes: When the sum exceeds 10, add up the digits

var dateSum = function(date) {
  return 0;
}


// test cases
console.log(dateSum(new Date('06/14/2010')) + ' should equal 5');
console.log(dateSum(new Date('11/21/1999')) + ' should equal 6');
console.log(dateSum(new Date('11/11/1111')) + ' should equal 8');
console.log(dateSum(new Date('01/01/2000')) + ' should equal 4');
console.log(dateSum(new Date('09/29/8910')) + ' should equal 2');
