'use strict';
/*
let country = "Macedonia";
let continent = "Europe";
let population = 2000000;
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof "315");
console.log(typeof 315);
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

/*
const now = 2020;
const ageJonas = now - 1991;
const ageSarah = now - 2002;

console.log(ageJonas, ageSarah);
console.log(ageSarah * 2, ageJonas / 2, ageJonas ** 3);

// concatenate strings
const firstName = "Stojan";
const lastName = "Mihajlovski";
console.log(firstName + " " + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// comparison operators
console.log(ageJonas > ageSarah); // <, >, >=, <=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2020;
const ageJonas = now - 1991;
const ageSarah = now - 2002;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);
*/

// Coding challenge 1
/*
Mark and John are trying to compare their BMI which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable markHigherBMI containing information about whether Mark has
a higher BMI than John

TEST DATA 1: Mark weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
TEST DATA 2: Mark weights 95kg and is 1.88m tall. John weights 85kg and is 1.76m tall.
*/

/*
let heightMark, heightJohn, weightMark, weightJohn, bmiMark, bmiJohn, markHigherBMI;

heightMark = 1.69;
weightMark = 78;
heightJohn = 1.95;
weightJohn = 92;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

console.log("Test case 1: ", bmiMark, bmiJohn, markHigherBMI);

heightMark = 1.88;
weightMark = 95;
heightJohn = 1.76;
weightJohn = 85;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

console.log("Test case 2: ", bmiMark, bmiJohn, markHigherBMI);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2020;

const jonas = 'I\'m ' + firstName + ', a ' + (2020 - birthYear) + ' year old ' + job;
console.log(jonas);

// Template literal using backticks
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;
console.log(jonasNew);

// Using backticks for multiple line strings
// --old way
console.log('String with \n\ multiple \n\ lines');
// --using backticks
console.log(`Multiple line
string
using
backticks`);
*/

/*
const age = 17;

if (age >= 18) {
	console.log('Sarah can start driving 🚗');
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah has ${yearsLeft} ${yearsLeft == 1 ? 'year' : 'years'} left before she can drive 🤷‍♀️`);
}

const birthYear = 1991;
let century;

if(birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}

console.log(`You were born in the ${century} century`);
*/

// Coding challenge 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

Print a nice output to the console, saying who has the higher BMI. The message can be either
"Mark's BMI is higher than John's" or the other way around
*/

/*
let heightMark, heightJohn, weightMark, weightJohn, bmiMark, bmiJohn, markHigherBMI;

heightMark = 1.69;
weightMark = 78;
heightJohn = 1.95;
weightJohn = 92;

bmiMark = weightMark / heightMark ** 2;
bmiJohn = weightJohn / heightJohn ** 2;

markHigherBMI = bmiMark > bmiJohn;

if(markHigherBMI) {
	console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn}).`);
} else {
	console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}).`);
}
*/


/*
// Type conversion
let inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);
console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old'); // will produce string
console.log('23' - '10' - 3); // will produce number
console.log('23' * '2'); // will produce number
console.log('23' > '18'); // will produce number

let n = '1' + 1;
n = n - 1;
console.log(n); //10
*/


/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("random"));
console.log(Boolean({}));

const money = 0;
if(money) {
	console.log(`Don't spend it all`);
} else {
	console.log(`You should get a job`); // This block will be executed because money = 0 is a falsy value
}

let height;
if(height) {
	console.log(`Yey, height is defined!`);
} else {
	console.log(`Seems like height is not yet defined`);
}
*/

/*
const age = 18;
if(age === 18) console.log(`You just became an adult`); 

const favorite = Number(prompt('Whats your favorite number?'));
console.log(favorite);
console.log(typeof favorite);

if(favorite === 23) {
	console.log('Cool! 23 is an amazing number!');
} else if (favorite === 7) {
	console.log('7 is also a cool number');
} else {
	console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log('Why not 23?');
*/

/*
const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if(hasDriversLicence && hasGoodVision) {
// 	console.log('Sarah is able to drive!');
// } else {
// 	console.log('Someone else should drive!');
// }

const isTired = false;
console.log(hasGoodVision || hasDriversLicence || isTired);

if(hasDriversLicence && hasGoodVision && !isTired) {
	console.log('Sarah is able to drive!');
} else {
	console.log('Someone else should drive!');
}
*/

// Coding challenge 3
/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner 
with the highest average score wins the trophy.

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test 
for that as well.

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if has a higher score than the other team, and a score of at 
least 100 points at the same time. HINT: Use a logical operator to test for minimum score,
as well as multiple else-if blocks.

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal to 100.
Otherwise, no team wins.

TEST DATA:
Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

TEST DATA BONUS 1:
Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.

TEST DATA BONUS 2:
Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
/*
// calculate average score for teams
const scoreDolphins = (100 + 108 + 50) / 3;
const scoreKoalas = (100 + 108 + 50) / 3;

// determine winner
if(scoreDolphins > 100 || scoreKoalas > 100) {
	if(scoreDolphins > scoreKoalas) {
		console.log(`The Dolphins won! Dolphins ${scoreDolphins} : Koalas ${scoreKoalas} 🏆`);
	} else if (scoreKoalas > scoreDolphins) {
		console.log(`The Koalas won! Koalas ${scoreKoalas} : Dolphins ${scoreDolphins} 🏆`);
	} else if (scoreKoalas === scoreDolphins) {
		console.log(`The match ended in a draw 🌓, ${scoreDolphins} : ${scoreKoalas}`);
	} else {
		console.log(`Something is wrong`);
	}
} else {
	console.log(`Neither team has at least 100 points, which is the minimum`);
}
*/
/*
const day = 'thursday';

// switch(day) {
// 	case 'monday':
// 		console.log(`Plan course structure`);
// 		console.log(`Go to coding meetup`);
// 		break;
// 	case 'tuesday':
// 		console.log(`Some more stupid shit`);
// 		break;
// 	case 'wednesday':
// 	case 'thursday':
// 		console.log(`Write code`);
// 		break;
// 	case 'friday':
// 		console.log(`Record videos`);
// 		break;
// 	case 'saturday':
// 	case 'sunday':
// 		console.log(`Enjoy the weekend`);
// 		break;
// 	default:
// 		console.log(`The default message`);
// }

if (day === 'monday') {
	console.log(`Plan course structure`);
	console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
	console.log(`Some more stupid shit`);
} else if (day === 'wednesday' || day === 'thursday') {
	console.log(`Write code`);
} else if (day === 'friday') {
	console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
	console.log(`Enjoy the weekend`);
} else {
	console.log(`The default message`);
}
*/

/*
const age = 17;
// age >= 18 ? console.log('I like drinking wine 🍷') : console.log(`You're a bit young to drink alcohol`);

// const drink = age >= 18 ? 'wine 🍷' : 'water🚰';
// console.log(drink);

// let drink2;
// if (age >= 18) {
// 	drink2 = 'wine 🍷';
// } else {
// 	drink2 = 'water🚰';
// }
// console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water🚰'}`);
*/

// Coding challenge 4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this.
It's not allowed to use an if/else statement (If it's easier for you, you can start with and if/else statement, and then try
to convert it to a ternary operator).

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

TEST DATA: Test for bill values 275, 40 and 430.
*/

// let tip;
// let bill = 301;

// if(bill < 50 && bill > 300) {
// 	tip = .20;
// } else {
// 	tip = .15;
// }

// let check = bill + tip * bill;

// console.log(check);

/*
const bill = 40;
let tip = (bill < 50 || bill > 300) ? .2 : .15;
let check = bill + bill * tip;
console.log(`The bill = ${bill}, the tip = ${tip} and the total check = ${check}`);
*/

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log('I can drive 🚗');
*/

// function logger() {
// 	console.log(`It's me, Muerte`);
// }

// logger();

/*
function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

/*
// function declaration
function calcAge1(birthYear) {
	// const age = 2021 - birthYear;
	// return age;
	return 2020 - birthYear;
}

const age1 = calcAge1(1985);

// function expression
const calcAge2 = function(birthYear) {
	return 2020 - birthYear;
}

const age2 = calcAge2(1985);

console.log(age1, age2); 
*/

/*
// arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1985);
console.log(age3);

const yearsUntilRetirement = (firstName, birthYear) => {
	const age = 2021 - birthYear;
	const retirement = 64 - age;
	// return retirement;
	return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement('Stojan', 1985));
*/

/*
function cutFruitPieces(fruit) {
	return fruit * 4;
}

// call function inside another
function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	console.log(apples, oranges);
	const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces`;
	return juice;
}

console.log(fruitProcessor(3, 4));
*/

/*
const calcAge = function(yearBirth) {
	return 2021 - yearBirth;
}

const yearsUntilRetirement = function (firstName, birthYear) {
	const age = calcAge(birthYear);
	const retirement = 64 - age;
	return retirement <= 0 ? 'already retired' : retirement;
	// return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement('Stojan', 1950));
*/

// Coding challenge 3.1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas. There is a new gymnastics discipline,
which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so 1 average
score per team). 
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores. 
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the average score of each team as parameters and then
logs the winner to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs 13)"
4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2
5. Ignore draws this time

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49. 
TEST DATA 2: Dolphins score 85, 54 an 41. Koalas score 23, 34 and 27.
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
	let winner = `There is no winner at this point`;
	if (avgDolphins >= avgKoalas * 2) {
		winner = `Dolphins win! (${avgDolphins} vs ${avgKoalas})`;
	} else if (avgKoalas >= avgDolphins * 2) {
		winner = `Koalas win! (${avgKoalas} vs ${avgDolphins})`;	
	}
	return winner;
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);

// const years = new Array(1991, 1994, 2008, 2021);

// console.log(friends.length);

// // targetting the last element in an array
// console.log(friends[friends.length - 1]);


// friends[2] = 'Jason';
// console.log(friends);

// const firstName = 'Stojan';
// const stojan = [firstName, 'Mihajlovski', 2021 - 1985, 'web developer', friends];

/*
// Exercise
const calcAge = function(birthYear) {
	return 2021 - birthYear;
}

const years = [1985, 1991, 2003, 2005];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
 const friends = ['Michael', 'Gabriel'];
 const newLength = friends.push('Tyrael');
 console.log(friends);
 console.log(newLength);  
 friends.unshift('Imperius');
 console.log(friends);

 if (friends.includes('Tyrael')) {
 	console.log('You are a Diablo fan arent you?');
 }
 */

// Coding challenge 3.2
/*
Steven is still building his tip calculator, using the same rules as before,
tip 15% of the bill if the bill value is between 50 and 300, and if the value is different,
the tip is 20%.

1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above. Use the function type you like the most. Test the function 
using a bill value of 100. 
2. And now let's use arrays. So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you
created before. 
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44
*/

/*
function calcTip(bill) {
	let tip;
	if (bill < 50 && bill > 300) {
		tip = .2;
	} else {
		tip = .15;
	}
	let theTip = bill * tip;
	return theTip;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [[bills[0] + tips [0]], [bills[1] + tips [1]], [bills[2] + tips [2]]]

console.log(bills);
console.log(tips);
console.log(totals);
*/

/*
const jonasArray = [
	'Jonas',
	'Schmidt',
	2021 - 1985,
	'teacher',
	['Michael', 'Peter', 'Steven']
];

const stojan = {
	firstName: 'Stojan', 
	lastName: 'Mihajlovski',
	age: 2021 - 1985,
	job: 'designer',
	friends: ['Dusko', 'Ivan', 'Dane']
}

console.log(stojan.firstName);

const nameKey = 'Name';
console.log(stojan['first' + nameKey]);
console.log(stojan['last' + nameKey]);

// const interestedIn = prompt(`What would you like to know about Stojan? Choose between firstName, lastName, job or friends`);

// if (stojan[interestedIn]) {
// 	console.log(stojan[interestedIn]);	
// } else {
// 	console.log(`Please enter some of the offered options`);
// }

stojan.location = 'Skopje';
stojan['car'] = 'BMW';
console.log(stojan);

// Challenge
// "Jonas has 3 friends, and his best friend is Michael"
console.log(`${stojan.firstName} has ${stojan.friends.length} friends, and his best friend is ${stojan.friends[0]}`);
*/
/*
const jonas = {
	firstName: "Jonas",
	lastName: "Schmedtmann",
	birthYear: 1991,
	job: "teacher",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicence: false,

	// using this
	// calcAge: function() {
	// 	return 2021 - this.birthYear;
	// }

	calcAge: function() {
		this.age = 2021 - this.birthYear;
		return this.age;
	},

	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers licence`
	}
}
console.log(jonas.calcAge());

console.log(jonas.age);

// Challenge
// Jonas is a 30 year old teacher and he has a / no drivers licence
console.log(jonas.getSummary());
*/

// let user = new Object(); // object constructor syntax
// let user = {}; // object literal syntax

// var key = "likes birds";
/*
let computer = {
	mobo: "MSI",
	cpu: "Ryzen 5600X",
	ram: "G.Skill 32GB",
	gpu: "nVidia 3080",
	hdd: prompt("Enter a hdd brand name" ,"seagate")
}

let mobo = "cpu";
console.log(computer[mobo]);

// let hdd = prompt("Enter a hard disk brand you want for your computer", "seagate");
// computer.hdd = hdd;

console.log(computer);
*/

// let fruit = "apple";
// let bag = {
// 	[fruit + "Computers"]: 5,
// };

// console.log(bag.appleComputers);

/*
function makeUser(name, birthYear) {
	return {
		name,
		age: 2021 - birthYear
	};
}

let user = makeUser("John", 1985);
console.log(user);
*/

// Coding challenge 3.3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) 
(mass in kg and height in meter)

1. For each of them,create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects). Store the BMI value 
to a property, and also return it from the method
3. Log to the console who has the higher BMI,together with the full name and the respective BMI. 
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: Mark weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.
*/

// function to be used as a method inside the objects
function calcBMI() {
	this.bmi = this.weight / this.height ** 2;
	return this.bmi;
}

// mark object
const mark = {
	name: "Mark Miller",
	weight: 78,
	height: 1.69,
	bmi: calcBMI
}

// john object
const john = {
	name: "John Smith",
	weight: 92,
	height: 1.95,
	bmi: calcBMI
}

// invoking the functions so the bmi can be calculated
mark.bmi();
john.bmi();

// loging the results
console.log(mark.bmi > john.bmi ? `Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})` : `John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`);