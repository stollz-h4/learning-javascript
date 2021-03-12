'use strict';

/*
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
	},

	orderPizza: function(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	}
};


// Nullish coalescing operator (null and undefined, not 0 or '')
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);
*/
/*
// Logical operators
// -- they can use any data type, return any data type, short-circuiting
console.log(3 || "Jonas");
console.log('' || "Jonas");
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 12;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;

function testFunc(a, b, c) {
	console.log(a + b + c);
	console.log(arguments[0]);
	console.log(arguments[1]);
	console.log(arguments[2]);
}

console.log(testFunc(1, 9, 20));
*/

/*
restaurant.orderPizza("cheese", "ham", "olives", "egg");

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
*/
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

// Coding challenge 9.1
/*
Football betting app ⚽️

Suppose we get data from a web service about a certain game. In this challenge we're gonna
work with the data. So here are your tasks:

1. Create one player array for each team (variables "players1" and "players2").

2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ("gk") with the goalkeeper's name, and one array
("fieldPlayers") with all the remaining 10 field players.

3. Create an array "allPlayers" containing all players of both teams (22 players).

4. During the game, Bayern (team 1) used 3 substitute players. So create a new array (players1Final),
containing all the original team1 players + "Thiago", "Coutinho" and "Perisic".

5. Based on the game.odds object, create one variable for each odd (called "team 1", "draw" and "team 2").

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables "players1" and "players2").
const players1 = game.players[0];
const players2 = game.players[1];

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ("gk") with the goalkeeper's name, and one array
// ("fieldPlayers") with all the remaining 10 field players.
const [gkBayern, ...fieldPlayersBayern] = players1;
const [gkDortmund, ...fieldPlayersDortmund] = players2;

// 3. Create an array "allPlayers" containing all players of both teams (22 players).
const allPlayers = [...players1, ...players2];

// 4. During the game, Bayern (team 1) used 3 substitute players. So create a new array (players1Final), 
// containing all the original team1 players + "Thiago", "Coutinho" and "Perisic".
const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];


// 5. Based on the game.odds object, create one variable for each odd (called "team 1", "draw" and "team 2").
const {team1, x: draw, team2} = game.odds;
// console.log(team1, draw, team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and 
// prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
const printGoals = function(...scorers) {
	console.log(`A total number of ${scorers.length} goals were scored`);
}

printGoals('Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
// WITHOUT using an if/else statement or the ternary operator.
