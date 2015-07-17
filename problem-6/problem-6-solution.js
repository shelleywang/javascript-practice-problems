function dateSum(date){
  var dateStr = (date.getMonth() +1).toString() + 
  date.getDate().toString() + date.getFullYear().toString();
  return dateStr.split('').reduce(function(result, x) {
    result += +x;
    return result>=10 ? result%10 + 1 : result;
  }, 0);
}

console.log(dateSum(new Date('06/14/2010')) + ' should equal 5');
console.log(dateSum(new Date('11/21/1999')) + ' should equal 6');
console.log(dateSum(new Date('11/11/1111')) + ' should equal 8');
console.log(dateSum(new Date('01/01/2000')) + ' should equal 4');
console.log(dateSum(new Date('09/29/8910')) + ' should equal 2');