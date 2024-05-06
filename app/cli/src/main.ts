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

function sayHello(name?: string) {
    console.log(`Hello, ${name || 'Anonymous'}!`);
}

sayHello('Mr. Mister');
sayHello();