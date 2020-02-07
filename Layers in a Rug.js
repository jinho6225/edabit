/*
Layers in a Rug
Write a function that counts how many concentric layers a rug.

Examples
countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]) ➞ 2
countLayers([
  "AAAAAAAAA",
  "ABBBBBBBA",
  "ABBAAABBA",
  "ABBBBBBBA",
  "AAAAAAAAA"
]) ➞ 3
countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]) ➞ 5

Test.assertEquals(countLayers([
"AAA"]), 1)

Test.assertEquals(countLayers([
"AAAA",
"AAAA",
"AAAA"]), 1)

Notes
Multiple layers can share the same component so count them separately (example #2).
Layers will be horizontally and vertically symmetric.
There will be at least one layer for each rug.
*/

function countLayers(rug) {
  var a = Math.floor(rug.length/2)
  var b = Math.floor(rug[a].length/2)
  var count = 1;
  for (let i = 0; i < b; i++) {
    if (rug[a][i] !== rug[a][i+1]) {
      count++
    }
  }
  return count
}

countLayers([
"AAAA",
"ABBA",
"AAAA"])
