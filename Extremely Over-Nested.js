/*
Extremely Over-Nested
Create a function that returns the original value from a matrix with too many sub-arrays.

Examples
deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3

deNest([[[[[[[true]]]]]]]) ➞ true

deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
Notes
You only need to retrieve one element.
*/
function deNest(arr) {
  debugger;
  if (!Array.isArray(arr[0])) {
    return arr[0]
  } else {
    return deNest(arr[0])
  }
}