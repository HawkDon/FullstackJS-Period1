// EX1

// Constant variables are immutable. It means the moment you define the values you cannot change it later. You can add to an array and an object key, aslong as it does not overrride properties.

// var, let and const
// let and const are block-scoped, which means they only exists within the declared block of brackets {}. The difference between const and let is that you cannot reassign a const.
// var on the other hand is defined in the function execution context and is accessible even if it exists within a depper block of code.
/*
function blocky() {

    if(true){
        var something = "something";
    }

    console.log(something);
}
blocky(); returns something, but if i changed to let or const, it would not work at all.
*/

//EX2
// const evens = [1,2,3];
//Fix the problem
/*

let odds  = evens.map(v => v + 1)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)

console.log(odds);
console.log(pairs);
console.log(nums);
*/

/*
Why does this work?:
var odds = evens.map(v => v+1);
while this doesn't (fix the example below, without going back to the solution above)?

var odds = evens.map(v => {
  v+1
});

It doesn't work because if it is block scoped you have to return a value, so you have to use the return keyword.
You can also swap back to ES5 completely, but in this point of time it is not necessary.
*/

//EX3 A
// Pretty simple, with ES5 functions you refer this to this execution context. As a example if you have a function and you refer this. Then the this keyword refers to the function.
// However this does not work the same way for arrow functions, so it will refer to the closest block of function call or the window object, if there is none.

/*
function Numbers(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach((v) =>{
      if (v % 5 === 0) {
        this.fives.push(v);
      }
    });
  }
  var numbers = new Numbers([1,3,5,10,14,20,33,50]);
  console.log(numbers.fives);
*/

//EX3 B
/*
var counter = {
    count: 0,
    inc: function () {
      this.count++;
    }
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

*/
//It gets worse, if you convert it to an arrow function.

//EX4
/*
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";

Roger
*/

//EX5
// A
/*
function f(x,y,...rest) {
    console.log(`Sum is: ${x + y}`);
    console.log(`rest value 1 is a: ${typeof rest[0]}`);
    console.log(`rest value 2 is a: ${typeof rest[1]}`);
    console.log(`rest value 3 is a: ${typeof rest[2]}`);
    if(rest[3] instanceof Array){
        console.log(`rest value 4 is a: Array`);
    }
    if(rest[4] instanceof Date){
        console.log(`rest value 5 is a: Date`);
    }
    console.log(`rest value 6 is a: ${typeof rest[5]}`);
}
*/
// f(5,2, true,2,"hello World",[1,2,3],new Date(),{});


// B

/*
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
f(5,2,...restParams);
*/

//C
//?
//var chars = [... f(5,2,...restParams)];


//EX6
/*
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

obj = { fName, lName, age }
*/

//EX7
//A
/*
var list = [ fName = "Kurt", lName = "Wonnegut" ]
var [ lName, fName ] = list

console.log(`First: ${fName}, Last: ${lName}`);
*/

//B
/*
function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
}

let Person = new getPerson();

const { lastName, phone } = Person;

console.log(`lastname: ${lastName}, phone: ${phone}`);
*/

//EX8
/*
var f = require("./EX8");

f(5,2, true,2,"hello World",[1,2,3],new Date(),{});
*/

//EX9
//A
/*
class Shape {
    constructor(color){
      this._color = color;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    getInfo() {
        console.log(`This shapes color is: ${this._color}`)
    }
    getArea() {
      return undefined;
    }
    getPerimeter() {
      return undefined;
    }
}

let aShape = new Shape("red");

aShape.getInfo();

aShape.setColor("blue");

aShape.getInfo();
*/

//B
/*
class Shape {
    constructor(color){
      this._color = color;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    getInfo() {
        console.log(`This shapes color is: ${this.getColor()}`)
    }
    getArea() {
      return undefined;
    }
    getPerimeter() {
      return undefined;
    }
}

class Circle extends Shape {
    constructor(radius, color){
        super(color)
        this.radius = radius;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    getInfo() {
        console.log(`This shapes color is: ${this.getColor()} and this circles radius is: ${this.getRadius()}`)
    }
}
*/
/*
let newCircle = new Circle(11, "red");

newCircle.getInfo();

newCircle.setColor("blue");

newCircle.setRadius(15);

newCircle.getInfo();
*/

//C
/*
class Cylinder extends Circle{
    constructor(height, radius, color){
        super(radius, color);
        this.height = height;
    }
    setColor(color) {
        this._color = color;
    }
    getColor() {
        return this._color;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    getInfo() {
        console.log(`This shapes color is: ${this.getColor()} and this circles radius is: ${this.getRadius()} and height is: ${this.getHeight()}`)
    }
    setHeight(height) {
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
    get _color (){ return this._color}
    get radius (){ return this.radius}
    get height (){ return this.height}
}

let newCylinder = new Cylinder(20,15,"red");

console.log(newCylinder.height);

*/