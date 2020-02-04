/*
How Many Days Between Two Dates
Create a function that takes two dates and returns the number of days between the first and second date.

Examples
getDays(
  new Date("June 14, 2019"),
  new Date("June 20, 2019")
) ➞ 6
getDays(
  new Date("December 29, 2018"),
  new Date("January 1, 2019")
) ➞ 3
getDays(
  new Date("July 20, 2019"),
  new Date("July 30, 2019")
) ➞ 10
Notes
N/A
*/

function getDays(date1, date2) {
  var dt1 = new Date(date1);
  console.log(Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()))
  var dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}
