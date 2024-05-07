/* eslint-disable @typescript-eslint/no-inferrable-types */
console.log('Hello World');
// TYPESCRIPT VARIABLES
var personName = 'Mr. Mister';
var poem = 'Roses are red, violets are blue';
var numbers = [1, 2, 3];
var dogNames = ['Bingo', 'Bongo', 'Bango'];
var isHappy = true;
isHappy = false;
var age = 30;
age = 31;
// TYPESCRIPT ARRAYS AND OBJECTS
var person = ['Mr. Mister', 31, false];
var sandwich = { name: 'Ham and Cheese', price: 5.99, ingredients: ['ham', 'cheese', 'bread'], isPopular: true };
var vehicle = { make: 'Ford', model: 'Ranger', year: 2011, isElectric: false };
console.log(personName, poem, numbers, dogNames[0], isHappy, age, person, sandwich.ingredients, vehicle.make, vehicle.model, vehicle.year, vehicle.isElectric);
// TYPESCRIPT FUNCTIONS
function add(a, b) {
    return a + b;
}
function eat(food) {
    console.log("Eating ".concat(food));
}
console.log(add(1, 2));
console.log(eat('pizza'));
var subtract = function (a, b) { return a - b; };
var sayVehicleInfo = function (vehicle) {
    console.log("The vehicle make is ".concat(vehicle.make, ", the model is ").concat(vehicle.model, ", the year is ").concat(vehicle.year, ", and it is ").concat(vehicle.isElectric, " that the vehicle is electric."));
};
console.log(subtract(5, 3));
sayVehicleInfo(vehicle);
var addThenSubtract = function (a, b, c) { return subtract(add(a, b), c); };
addThenSubtract(10, 5, 3);
// DOCUMENTATION
/**
 * Logs a greeting to the console w/ optional name parameter
 *
 * @param name - The name of the person to greet, or 'Anonymous' if name is not provided
 * @returns void
 */
function sayHello(name) {
    console.log("Hello, ".concat(name || 'Anonymous', "!"));
}
sayHello('Mr. Mister');
sayHello();
//ENUMS
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
    Color["Yellow"] = "YELLOW";
    Color["Purple"] = "PURPLE";
    Color["Orange"] = "ORANGE";
    Color["Black"] = "BLACK";
    Color["White"] = "WHITE";
    Color["Pink"] = "PINK";
    Color["Brown"] = "BROWN";
    Color["Gray"] = "GRAY";
})(Color || (Color = {}));
var Direction;
(function (Direction) {
    Direction["North"] = "NORTH";
    Direction["South"] = "SOUTH";
    Direction["East"] = "EAST";
    Direction["West"] = "WEST";
    Direction["Northeast"] = "NORTHEAST";
    Direction["Northwest"] = "NORTHWEST";
    Direction["Southeast"] = "SOUTHEAST";
    Direction["Southwest"] = "SOUTHWEST";
})(Direction || (Direction = {}));
console.log(Color.Green, Direction.North);
var whichWayToTheNorthPole = Direction.North;
console.log(whichWayToTheNorthPole);
var favoriteColors = [
    [Color.Purple, 1],
    [Color.Black, 2],
    [Color.Yellow, 3],
];
console.log(favoriteColors);
var pickAColor = function (color) {
    console.log("You picked the color ".concat(color));
};
pickAColor(Color.Red);
var pickADirection = function (direction) {
    console.log("You picked the direction ".concat(direction));
};
pickADirection(Direction.North);
// SPREAD SYNTAX
var address = ['123 Main St', 'Anytown', 'NY', 12345];
function sayAddress() {
    var address = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        address[_i] = arguments[_i];
    }
    console.log("The address is ".concat(address));
}
sayAddress(address);
// RANDOM TYPESCRIPT FUNCTION
function performCoolWalk(moveName, distance, moveNumber, hasAGoatee) {
    if (moveNumber === void 0) { moveNumber = 1; }
    console.log("I do the ".concat(moveName, " move ").concat(moveNumber, " times and walk ").concat(distance, " feet."));
    if (hasAGoatee) {
        console.log('I\'m walking with a cool goatee.');
    }
}
var walkMoves = [
    ['hop', 10, 3, true],
    ['skip', 5, 2, false],
    ['jump', 15, 4, true],
    ['leap', 20, 5, false],
    ['stroll', 25, 6, true],
    ['mosey', 30, 7, false]
];
walkMoves.forEach(function (move) { return performCoolWalk.apply(void 0, move); });
// OBJECT TYPES
var Company;
// Research this further...
var company1 = {};
company1.companyName = 'Acme Inc.';
company1.boss = { name: 'Mr. Big', age: 50 };
company1.employees = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Daisy', age: 40 },
    { name: 'Eve', age: 45 },
];
company1.employeeOfTheMonth = { name: 'Alice', age: 25 };
company1.moneyEarned = 1000000;
console.log(company1);
var CompanyTwo;
var company2 = {};
company2.companyName = 'Hamburger Inc.';
company2.boss = { name: 'Mr. Burger', age: 55 };
company2.employees = [
    { name: 'Fry Cook', age: 25 },
    { name: 'Cashier', age: 30 },
    { name: 'Manager', age: 35 },
    { name: 'Janitor', age: 40 },
    { name: 'Delivery Driver', age: 45 },
];
company2.employeeOfTheMonth = { name: 'Fry Cook', age: 25 };
company2.moneyEarned = 500000;
console.log(company2);
