/*
Combinations
Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
Notes
Don't overthink this one.
*/
function combinations(items) {
	var total = 1;
  for (let key in arguments) {
    if (arguments[key] === 0) {
      continue
    } else {
    total = total * arguments[key]
    }
  }
  return total
}

// combinations(2, 3)

// combinations(2, 3, 4, 5) //➞ 120
// combinations(3, 7, 4) //➞ 84
combinations(6, 7, 0) //, 42)
