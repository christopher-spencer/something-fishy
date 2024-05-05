/* eslint-disable @typescript-eslint/no-inferrable-types */

console.log('Hello World');

const name = 'Mr. Mister';

const poem: string = 'Roses are red, violets are blue';

const numbers: number[] = [1, 2, 3];

const dogNames: string[] = ['Bingo', 'Bongo', 'Bango'];

let isHappy: boolean = true;

isHappy = false;

let age: number = 30;

age = 31;

const person: [name: string, age: number, isHappy: boolean] = ['Mr. Mister', 31, false];

const sandwich: { name: string, price: number, ingredients: string[], isPopular: boolean } = { name: 'Ham and Cheese', price: 5.99, ingredients: ['ham', 'cheese', 'bread'], isPopular: true };

console.log(name, poem, numbers, dogNames[0], isHappy, age, person, sandwich.ingredients);



