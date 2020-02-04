/*
White Spaces Between Lower and Uppercase Letters
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

Examples
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
Notes
Each word in the phrase will be at least two characters long.
*/

function insertWhitespace(s) {
  var str = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      str = str + " " + s[i]
    } else {
      str = str + s[i]
    }
   
  }
  return str.trim()
}
