// recursive solution

var multiplesOf3Or5 = function(n) {
  var currentNum = n-1;
  if (currentNum <= 0) {
    return 0;
  } else if (currentNum%3 ===0 || currentNum%5===0) {
    return currentNum + multiplesOf3Or5(currentNum);
  } else {
    return multiplesOf3Or5(currentNum);
  }
}


console.log(multiplesOf3Or5(10) + ' should be 23');
console.log(multiplesOf3Or5(2) + ' should be 0');
console.log(multiplesOf3Or5(5) + ' should be 3');
console.log(multiplesOf3Or5(100) + ' should be 2318'); 