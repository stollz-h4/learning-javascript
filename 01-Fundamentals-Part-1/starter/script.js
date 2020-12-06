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