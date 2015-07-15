// ------------ Problem # ------------
// --------- WHERE IS VASYA ----------
// 
// Vasya stands in line with number of people p (including Vasya), 
// but he doesn't know exactly which position he occupies. 
// He can say that there are no less than b people standing in 
// front of him and no more than a people standing behind him. 

// Find the number of different positions Vasya can occupy.

// Input 
// As an input you have 3 numbers:
// 1. Total amount of people in the line;
// 2. Number of people standing in front of him
// 3. Number of people standing behind him

// Examples:
// whereIsHe(3, 1, 1) // => 2  The possible positions are: 2 and 3
// whereIsHe(5, 2, 3) // => 3  The possible positions are: 3, 4 and 5



// whereIsHe
// Input: 3 parameters, the total number of people, 
//        the minimum number of people in front,
//        and the maximum number of people behind
// Output: Number of positions that could be possible
// Notes: 

var whereIsHe = function(total, front, behind) {
  return 0;
}


// test cases
console.log(whereIsHe(3,1,1) + ' should equal 2');
console.log(whereIsHe(5,2,3) + ' should equal 3');
console.log(whereIsHe(1,5,5) + ' should equal 0');
console.log(whereIsHe(6,3,4) + ' should equal 3');
console.log(whereIsHe(10,1,10) + ' should equal 9');
