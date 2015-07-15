var whereIsHe = function(total, front, behind) {
  var possible = total-front;
  var results = 0;
  if (possible >0) {
    possible <= behind ? results = possible : results = behind+1;
  }
  return results;
}


// test cases
console.log(whereIsHe(3,1,1) + ' should equal 2');
console.log(whereIsHe(5,2,3) + ' should equal 3');
console.log(whereIsHe(1,5,5) + ' should equal 0');
console.log(whereIsHe(6,3,4) + ' should equal 3');
console.log(whereIsHe(10,1,10) + ' should equal 9');
