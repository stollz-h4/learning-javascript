"use strict";

/*
- 	The THIS keyword will always take the value of the owner of the function in 
	which the keyword is used.
- 	The value of THIS is not static, it depends on how the function is actually called and 
	it's value is only assigned when the function is actually called
-	THIS keyword called in a object method will simply point to the object on which the method is called
-	THIS keyword called in a simple function call will be undefined (with strict mode) or will point to
	the Global object (without strict mode).
-	THIS keyword in arrow functions will simply be the THIS keyword of the surrounding function since
	arrow functions dont get their own THIS keyword
-	THIS keyword called in an event listener function will point to the DOM element the handler is attached to
*/

/*
const jonas = {
	year: 1991,
	calcAge: function() {
		console.log(this);
		console.log(2021 - this.year);
	}
};

jonas.calcAge();

const matilda = {
	year: 1980,
};

// method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();
*/
/*
const jonas = {
	firstName: "Jonas",
	year: 1991,
	calcAge: function() {
		console.log(2021 - this.year);

		// old pre-ES6 way
		// const self = this;
		// const isMillenial = function() {
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// };

		const isMillenial = () =>  {
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExp = function (a, b) {
	console.log(arguments);
	return a + b;
}

const crap = addExp(3, 5);
console.log(crap);
*/

/*
let age = 30;
let oldAge = age;
age = 31;

console.log(oldAge);
console.log(age);

const me = {
	name: "Stojan",
	age: 30
};

const friend = me;

friend.age = 31;
console.log(friend);
console.log(me);
*/

/*
let lastName = "Mihajlovski";
let oldLastName = lastName;
lastName = "Medarovska";

// console.log(lastName, oldLastName);

const jessica = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
	family: ["Alice", "Bob"]
};

console.log(jessica);

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davies";
// console.log("Before marriage: ", jessica);
// console.log("After marriage: ", marriedJessica);

// copying objects

const jessicaCopy = Object.assign({}, jessica);
console.log(jessicaCopy);

jessicaCopy.age = 32;

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("john");

console.log(jessica) ;
console.log(jessicaCopy);
*/

const computer = {
	cpu: "Ryzen 5600X",
	mb: "Rog Strix B450-F Gaming",
	ram: "16GB Kingston HyperX 3200MHz",
	gpu: "Gigabyte 2070 Super Gaming",
	peripherals: ["Logitech G Pro Wireless", "Ducky One 2 SF", "HyperX Alloy Core", "Razer Viper", "Logitech G303"]
};

const brosComputer = Object.assign({}, computer);
brosComputer.peripherals.push("HyperX Mouse");

console.log(computer);
console.log(brosComputer);