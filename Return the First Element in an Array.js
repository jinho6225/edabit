/*
Return the First Element in an Array
Create a function that takes an array and returns the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0.
*/

function arrayOfMultiples(num, length) {
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(num*i)
  }
	return result
}

arrayOfMultiples(17, 6)
// ➞ [17, 34, 51, 68, 85, 102]