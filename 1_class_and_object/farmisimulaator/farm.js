

const Cow = require('./cow.js');
const cow = new Cow();


console.log(cow.print())



cow.LiveHour();
cow.LiveHour();
cow.LiveHour();
cow.LiveHour();
console.log(cow.print());

cow.milk();
console.log(cow.print());
console.log("");

cow1 = new Cow("Ammu");
console.log(cow1.print());
cow1.LiveHour();
cow1.LiveHour();
console.log(cow1.print());
cow1.milk();
console.log(cow1.print());