/* eslint-disable @typescript-eslint/no-inferrable-types */
console.log('Hello World');
var personName = 'Mr. Mister';
var poem = 'Roses are red, violets are blue';
var numbers = [1, 2, 3];
var dogNames = ['Bingo', 'Bongo', 'Bango'];
var isHappy = true;
isHappy = false;
var age = 30;
age = 31;
var person = ['Mr. Mister', 31, false];
var sandwich = { name: 'Ham and Cheese', price: 5.99, ingredients: ['ham', 'cheese', 'bread'], isPopular: true };
var vehicle = { make: 'Ford', model: 'Ranger', year: 2011, isElectric: false };
console.log(personName, poem, numbers, dogNames[0], isHappy, age, person, sandwich.ingredients, vehicle.make, vehicle.model, vehicle.year, vehicle.isElectric);
function add(a, b) {
    return a + b;
}
function eat(food) {
    console.log("Eating ".concat(food));
}
console.log(add(1, 2));
console.log(eat('pizza'));
var subtract = function (a, b) { return a - b; };
// const sayVehicleInfo = (vehicle: { make: string; model: string; year: number; isElectric: boolean; }): void => {
//         console.log(`The vehicle make is ${vehicle.make}, the model is ${vehicle.model}, the year is ${vehicle.year}, and it is ${vehicle.isElectric}}`);
// }
// console.log(subtract(5, 3));
// sayVehicleInfo(vehicle);
// const addThenSubtract = (a: number, b: number, c: number): number => subtract(add(a, b), c);
// addThenSubtract(10, 5, 3);
