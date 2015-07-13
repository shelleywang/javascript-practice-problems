// helper function
// iterative implementation of fibonacci 
// returns array of all fibonacci numbers up to N

var fibonacci = function(n) {
  var fibNums = [0,1]; 

  var i = 2;
  var stop = true;
  while (stop) {
    newFib = fibNums[i-1] + fibNums[i-2];
    if (newFib < n) {
        i++;
        fibNums.push(newFib);
    } else {
        stop = false;
    }
  }
  return fibNums;
}

// sums up results from helper
var evenFibonacciSum = function(n) {
  var fibNumbers = fibonacci(n);
  var result = fibNumbers.reduce(function(previousValue,currentValue) {
    if (currentValue %2 ===0) {
      return previousValue + currentValue;
    } else {
      return previousValue;
    }
  }, 0); 
  return result;
}


// test cases
console.log(evenFibonacciSum(10) + ' should equal 8');
console.log(evenFibonacciSum(0) + ' should equal 0');
console.log(evenFibonacciSum(100) + ' should equal 44');
console.log(evenFibonacciSum(5) + ' should equal 2');