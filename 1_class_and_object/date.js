const MyDate = require(`./mydate.js`)
const day0 = new MyDate(28, 2, 2025)
const day1 = new MyDate(32, 1, 2025)
const day2 = new MyDate(15, 6, 2025)

console.log(day0.PrintDay())
console.log(day1.PrintDay())
console.log(day2.PrintDay())

if (day0.earlier(day1)) {
    console.log(`day0 is earlier than day1`)
} else {
    console.log(`day0 is not earlier than day1`)
}