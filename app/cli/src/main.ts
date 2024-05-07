/* eslint-disable @typescript-eslint/no-inferrable-types */

console.log('Hello World');

const personName: string = 'Mr. Mister';

const poem: string = 'Roses are red, violets are blue';

const numbers: number[] = [1, 2, 3];

const dogNames: string[] = ['Bingo', 'Bongo', 'Bango'];

let isHappy: boolean = true;

isHappy = false;

let age: number = 30;

age = 31;

const person: [name: string, age: number, isHappy: boolean] = ['Mr. Mister', 31, false];

const sandwich: { name: string, price: number, ingredients: string[], isPopular: boolean } = { name: 'Ham and Cheese', price: 5.99, ingredients: ['ham', 'cheese', 'bread'], isPopular: true };

const vehicle: { make: string, model: string, year: number, isElectric: boolean } = { make: 'Ford', model: 'Ranger', year: 2011, isElectric: false };

console.log(personName, poem, numbers, dogNames[0], isHappy, age, person, sandwich.ingredients, vehicle.make, vehicle.model, vehicle.year, vehicle.isElectric);

function add(a: number, b: number): number {
  return a + b;
}

function eat(food: string): void {
    console.log(`Eating ${food}`);
}

console.log(add(1, 2));
console.log(eat('pizza'));

const subtract = (a: number, b: number): number => a - b;

const sayVehicleInfo = (vehicle: { make: string; model: string; year: number; isElectric: boolean; }): void => {
        console.log(`The vehicle make is ${vehicle.make}, the model is ${vehicle.model}, the year is ${vehicle.year}, and it is ${vehicle.isElectric}}`);
}

console.log(subtract(5, 3));

sayVehicleInfo(vehicle);

const addThenSubtract = (a: number, b: number, c: number): number => subtract(add(a, b), c);

addThenSubtract(10, 5, 3);

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
sayHello();

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

const pickAColor = (color: Color): void => {
    console.log(`You picked the color ${color}`);
}

pickAColor(Color.Red);

const pickADirection = (direction: Direction): void => {
    console.log(`You picked the direction ${direction}`);
}

pickADirection(Direction.North);

const address: [street: string, city: string, state: string, zip: number] = ['123 Main St', 'Anytown', 'NY', 12345];

function sayAddress(...address): void {
    console.log(`The address is ${address}`);
}

sayAddress(address);