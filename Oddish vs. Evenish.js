/*Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"

oddishOrEvenish(373) ➞ "Oddish"

oddishOrEvenish(4433) ➞ "Evenish"
Notes
N/A*/
function oddishOrEvenish(num) {
	let arr = num.toString().split('')
  let result = 0
  arr.forEach(e => result = result + Number(e))
  if (result % 2 === 0) {
    return "Evenish"
  } else {
    return "Oddish"
  }
}