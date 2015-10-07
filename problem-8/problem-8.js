// ------------ Problem # ------------
// -------  --------
// 
// Check if a given string, s, can be formed from two other strings, part1 and part2.
// The restriction is that the characters in part1 and part2 are in the same order as in s.
// 
// 
// 'codewars' is a merge from 'cdw' and 'oears'
// 


// isMerge
// Input: 3 strings
// Output: Boolean
// Notes: 

var isMerge = function(s, part1, part2) {
  return false;
}


// test cases
console.log(isMerge('testingcode', 'testing', 'code') + ' should equal true');
console.log(isMerge('Bananas in Bahamas', 'Bah', 'Bananas in amas') + ' should equal true');
console.log(isMerge('testingcode', 'testing', 'c') + ' should equal false');

