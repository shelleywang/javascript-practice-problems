function isMerge(s, part1, part2) {

  if (s === undefined || part1 === undefined || part2 === undefined) {
    return false;
  }
  
  var exists = false;
  
  var recurse = function(position, part1Position, part2Position ) {
    var currentChar = s.charAt(position);
    if (part1Position < part1.length && part1.charAt(part1Position) === currentChar) {
      recurse(position +1, part1Position +1, part2Position);
    } 
    if (part2Position < part2.length && part2.charAt(part2Position) === currentChar) {
      recurse(position +1, part1Position, part2Position+1);
    } 
     
    if (!exists) exists = (position === s.length) && (part1Position === part1.length) && (part2Position === part2.length);
  }
  
  recurse(0,0,0);
  
  return exists;
}