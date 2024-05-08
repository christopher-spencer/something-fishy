/* eslint-disable @typescript-eslint/no-inferrable-types */

console.log('Hello World');
console.log('\n');

// TYPESCRIPT VARIABLES

const personName: string = 'Mr. Mister';

const poem: string = 'Roses are red, violets are blue';

const numbers: number[] = [1, 2, 3];

const dogNames: string[] = ['Bingo', 'Bongo', 'Bango'];

let isHappy: boolean = true;

isHappy = false;

let age: number = 30;

age = 31;

// TYPESCRIPT ARRAYS AND OBJECTS

const person: [name: string, age: number, isHappy: boolean] = ['Mr. Mister', 31, false];

const sandwich: { name: string, price: number, ingredients: string[], isPopular: boolean } = { name: 'Ham and Cheese', price: 5.99, ingredients: ['ham', 'cheese', 'bread'], isPopular: true };

const vehicle: { make: string, model: string, year: number, isElectric: boolean } = { make: 'Ford', model: 'Ranger', year: 2011, isElectric: false };

console.log(personName, poem, numbers, dogNames[0], isHappy, age, person, sandwich.ingredients, vehicle.make, vehicle.model, vehicle.year, vehicle.isElectric);
console.log('\n');

// TYPESCRIPT FUNCTIONS

function add(a: number, b: number): number {
  return a + b;
}

function eat(food: string): void {
  console.log(`Eating ${food}`);
}

console.log(add(1, 2));
console.log('\n');
console.log(eat('pizza'));
console.log('\n');

const subtract = (a: number, b: number): number => a - b;

const sayVehicleInfo = (vehicle: { make: string; model: string; year: number; isElectric: boolean; }): void => {
  console.log(`The vehicle make is ${vehicle.make}, the model is ${vehicle.model}, the year is ${vehicle.year}, and it is ${vehicle.isElectric} that the vehicle is electric.`);
}

console.log(subtract(5, 3));
console.log('\n');

sayVehicleInfo(vehicle);

const addThenSubtract = (a: number, b: number, c: number): number => subtract(add(a, b), c);

addThenSubtract(10, 5, 3);

// DOCUMENTATION

/**
 * Logs a greeting to the console w/ optional name parameter
 * 
 * @param name - The name of the person to greet, or 'Anonymous' if name is not provided
 * @returns void
 */

function sayHello(name?: string): void {
  console.log(`Hello, ${name || 'Anonymous'}!`);
}

sayHello('Mr. Mister');
console.log('\n');
sayHello();
console.log('\n');

//ENUMS

enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
  Yellow = 'YELLOW',
  Purple = 'PURPLE',
  Orange = 'ORANGE',
  Black = 'BLACK',
  White = 'WHITE',
  Pink = 'PINK',
  Brown = 'BROWN',
  Gray = 'GRAY'
}

enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST'
}

console.log(Color.Green, Direction.North);
console.log('\n');

const whichWayToTheNorthPole: Direction = Direction.North;

console.log(whichWayToTheNorthPole);
console.log('\n');

const favoriteColors: [Color, Ranking: number][] = [
  [Color.Purple, 1],
  [Color.Black, 2],
  [Color.Yellow, 3],
];

console.log(favoriteColors);
console.log('\n');

const pickAColor = (color: Color): void => {
  console.log(`You picked the color ${color}`);
}

pickAColor(Color.Red);
console.log('\n');

const pickADirection = (direction: Direction): void => {
  console.log(`You picked the direction ${direction}`);
}

pickADirection(Direction.North);
console.log('\n');

// SPREAD SYNTAX

const address: [street: string, city: string, state: string, zip: number] = ['123 Main St', 'Anytown', 'NY', 12345];

function sayAddress(...address): void {
  console.log(`The address is ${address}`);
}

sayAddress(address);
console.log('\n');

// RANDOM TYPESCRIPT FUNCTION

function performCoolWalk(moveName: string, distance: number, moveNumber: number = 1, hasAGoatee: boolean): void {
  console.log(`I do the ${moveName} move ${moveNumber} times and walk ${distance} feet.`)
  
  if (hasAGoatee) {
    console.log('I\'m walking with a cool goatee.');
  }
}

const walkMoves: [string, number, number, boolean][] = [
  ['hop', 10, 3, true],
  ['skip', 5, 2, false],
  ['jump', 15, 4, true],
  ['leap', 20, 5, false],
  ['stroll', 25, 6, true],
  ['mosey', 30, 7, false]
];

walkMoves.forEach(move => performCoolWalk(...move));
console.log('\n');

// OBJECT TYPES

let Company: {
  companyName: string,
  boss: {name: string, age: number},
  employees: {name: string, age: number}[],
  employeeOfTheMonth: {name: string, age: number},
  moneyEarned: number
};

// Research this further...
const company1: typeof Company = {} as typeof Company;

company1.companyName = 'Acme Inc.';

company1.boss = {name: 'Mr. Big', age: 50};

company1.employees = [
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 30},
  {name: 'Charlie', age: 35},
  {name: 'Daisy', age: 40},
  {name: 'Eve', age: 45},
];

company1.employeeOfTheMonth = {name: 'Alice', age: 25};

company1.moneyEarned = 1000000;

console.log(company1);
console.log('\n');

//TYPE ALIASES

type Person = { name: string, age: number};

let CompanyTwo: {
  companyName: string,
  boss: Person,
  employees: Person[],
  employeeOfTheMonth: Person,
  moneyEarned: number
};

const company2: typeof CompanyTwo = {} as typeof CompanyTwo;

company2.companyName = 'Hamburger Inc.';
company2.boss = {name: 'Mr. Burger', age: 55};
company2.employees = [
  {name: 'Fry Cook', age: 25},
  {name: 'Cashier', age: 30},
  {name: 'Manager', age: 35},
  {name: 'Janitor', age: 40},
  {name: 'Delivery Driver', age: 45},
];

company2.employeeOfTheMonth = {name: 'Fry Cook', age: 25};

company2.moneyEarned = 500000;

console.log(company2);
console.log('\n');