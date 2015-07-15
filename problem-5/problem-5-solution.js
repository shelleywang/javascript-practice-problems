function tickets(peopleInLine){
  var change = {25:0,50:0,100:0};
  var hasChange = true;
  peopleInLine.forEach(function(person) {
    change[person]++;
    if (person === 50) {
      change[25] <= 0 ? hasChange = false : change[25] --;
    } else if (person === 100) {
      if (change[50] > 0 && change[25] > 0) {
        change[50]--;
        change[25]--;
      } else if (change[25] >2) {
        change[25] -= 3;
      } else {
        hasChange = false;
      }
    }
  });
  
  return hasChange ? "YES" : "NO";
}

console.log(tickets([25,25,25,25,25]) + ' should equal "YES"');
console.log(tickets([25,25,50,25,25,100]) + ' should equal "YES"');
console.log(tickets([25,50,100]) + ' should equal "NO"');
console.log(tickets([]) + ' should equal "YES"');
console.log(tickets([25,50,25,100,25,25]) + ' should equal "YES"');