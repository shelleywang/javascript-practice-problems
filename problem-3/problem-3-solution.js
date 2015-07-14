var stringNumSum = function(str) {
  var nums = [];

  var neg = false;
  var currentNum = '';

  for (var i = 0; i<str.length; i++) {
    if (str[i] === '-') {
      neg ? currentNum = '' : neg = true;
    } else if (!isNaN(str[i]) && str[i] !== ' ') {
      currentNum += str[i];
      if (i === str.length-1) {
        neg ? nums.push(-1*currentNum) : nums.push(currentNum);
      }
    } else {
      if (currentNum !== '') {
        neg ? nums.push(-1*currentNum) : nums.push(currentNum);
      }
      neg = false;
      currentNum = '';
    }
  }

  var sum = 0;
  for (var j = 0; j<nums.length;j++) {
    sum += +nums[j];
  }
  return sum;
}


// test cases
console.log(stringNumSum('ab5 cdef5ghij-10') + ' should equal 0');
console.log(stringNumSum('aa3aa3aa3aa3') + ' should equal 12');
console.log(stringNumSum('aslkdaklnvla') + ' should equal 0');
console.log(stringNumSum('abcd-1eg kdj9kasmcn3') + ' should equal 11');