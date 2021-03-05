'use strict';

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // open 24 hours
			close: 24,
		},
	},

	orderDelivery: function({address, time = "20:00", mainIndex = 1, starterIndex = 1}) {
		console.log(`The order is received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`);
	},

	orderPasta: function(ing1, ing2, ing3) {
		console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
	}
};

// Rest pattern on arrays
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // "others" here is the name of the array which will contain the rest of the elements

// -- separate pizza and risotto from the rest of the food menu
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// Rest pattern on objects
// -- how rest works on an object destructuring assignment
// -- separate the weekdays from the restaurant working days
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// Rest pattern with functions
const add = function(...numbers) { // using rest to add function arguments in an array that can be looped upon
	let sum = 0;
	
	for(let i = 0; i < numbers.length; i++) sum += numbers[i];

	return sum;
};

console.log(add(7, 1, 4, 5));
console.log(add(2, 3, 8, 1));


const x = [25, 5, 7];
console.log(add(...x)); // using spread to pass on an array as an argument to our 'add' function

/*
// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);


// Spread operator "..."
// difference between the spread operator and destructuring is that the spread operator just takes all the elements from the array and
// doesnt create new variables. So, we can only use it in places where we would otherwise write values separated by commas

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(...newArr);

// Expanding the restaurant mainMenu with spread operator
const newMenu = [...restaurant.mainMenu, "Gnocchi"];
console.log(newMenu);

// Copy arrays with spread operator
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays with spread operator
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Spread operator works on all iterables (arrays, strings, maps, sets) but not objects.
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
*/
/*

restaurant.orderDelivery({
	time: "22:30",
	address: "Crnice br 16",
	mainIndex: 2,
	starterIndex: 2,
});
const {time, address, mainIndex, starterIndex} = restaurant.orderDelivery;

// Destructuring objects
// const {name, categories, openingHours} = restaurant;
// console.log(name, categories, openingHours);

// Changing variable names when destructuring objects
const {
	name: restaurantName, 
	openingHours, 
	categories: foodTags
} = restaurant;

// console.log(restaurantName, openingHours, foodTags);

// Setting default values when destructuring objects
const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// Mutating variables when destructuring objects
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
// console.log(a, b);

// Nested objects
const {fri: {open, close}} = openingHours;
// console.log(open, close);
*/

/*

// Destructuring of arrays
const arr = [1, 2, 3];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, ,second] = restaurant.categories;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// Nested destructuring or arrays
const nested = [2, 4, [5, 6]];
// const [one, two, three] = nested;
// console.log(one, three);
const [a, , [c, d]] = nested;
console.log(a, c, d);

// Assigning default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/