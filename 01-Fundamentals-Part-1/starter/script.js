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

// calculate average score for teams
const scoreDolphins = (100 + 108 + 102) / 3;
const scoreKoalas = (100 + 108 + 102) / 3;

// determine winner
if(scoreDolphins > 100 || scoreKoalas > 100) {
	if(scoreDolphins > scoreKoalas) {
		console.log(`The Dolphins won! Dolphins ${scoreDolphins} : Koalas ${scoreKoalas}`);
	} else if (scoreKoalas > scoreDolphins) {
		console.log(`The Koalas won! Koalas ${scoreKoalas} : Dolphins ${scoreDolphins}`);
	} else if (scoreKoalas === scoreDolphins) {
		console.log(`The match ended in a draw`);
	} else {
		console.log(`Something is wrong`);
	}
} else {
	console.log(`Neither team won at least a 100 points, which is the minimum`);
}