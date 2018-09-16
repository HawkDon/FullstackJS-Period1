// const http = require("http");

/*
Static Typing

A very distinctive feature of TypeScript is the support of static typing.
This means that you can declare the types of variables,
and the compiler will make sure that they aren't assigned the wrong types of values.

var burger: string = 'hamburger',     // String 
    calories: number = 300,           // Numeric
    tasty: boolean = true;            // Boolean

function speak(food: string, energy: number): void {
        console.log("Our " + food + " has " + energy + " calories.");
    }
      
speak(burger, calories);
*/

/*
Gives error, because it is not a type of boolean but a string. Typescript tells us the values is wrong, which is nice
// The given type is boolean, the provided value is a string.
var tasty: boolean = "I haven't tried it yet";
main.ts(1,5): error TS2322: Type 'string' is not assignable to type 'boolean'.

It will also warn us if we pass the wrong argument to a function:

function speak(food: string, energy: number): void{
  console.log("Our " + food + " has " + energy + " calories.");
}

// Arguments don't match the function parameters.
speak("tripple cheesburger", "a ton of");
main.ts(5,30): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

*/

/*
Interfaces

Interfaces are used to type-check whether an object fits a certain structure

In the below example we define a simple interface to type-check a function's arguments:

// Here we define our Food interface, its properties, and their types.
interface Food {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the Food interface. 
// This way we know that the properties we need will always be available.
function speak(food: Food): void{
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
  name: "ice cream", 
  calories: 200
}

speak(ice_cream);

If something is missing, has the wrong type, or is named differently, the compiler will warn us.

interface Food {
    name: string;
    calories: number;
}

function speak(food: Food): void{
  console.log("Our " + food.name + " has " + food.calories + " grams.");
}

// We've made a deliberate mistake and name is misspelled as nmae.
var ice_cream = {
  nmae: "ice cream", 
  calories: 200
}

speak(ice_cream);
main.ts(16,7): error TS2345: Argument of type '{ nmae: string; calories: number; } 
is not assignable to parameter of type 'Food'. 
Property 'name' is missing in type '{ nmae: string; calories: number; }'.

*/

/*
Classes

When building large scale apps, the object oriented style of programming is preferred by many developers,
most notably in languages such as Java or C#.
TypeScript offers a class system that is very similar to the one in these languages, including inheritance, abstract classes, interface implementations, setters/getters, and more.

class Menu {
  // Our properties:
  // By default they are public, but can also be private or protected.
  items: Array<string>;  // The items in the menu, an array of strings.
  pages: number;         // How many pages will the menu be, a number.

  // A straightforward constructor. 
  constructor(item_list: Array<string>, total_pages: number) {
    // The this keyword is mandatory.
    this.items = item_list;    
    this.pages = total_pages;
  }

  // Methods
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

} 

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();

Class with inheritance

class HappyMeal extends Menu {
  // Properties are inherited

  // A new constructor has to be defined.
  constructor(item_list: Array<string>, total_pages: number) {
    // In this case we want the exact same constructor as the parent class (Menu), 
    // To automatically copy it we can call super() - a reference to the parent's constructor.
    super(item_list, total_pages);
  }

  // Just like the properties, methods are inherited from the parent.
  // However, we want to override the list() function so we redefine it.
  list(): void{
    console.log("Our special menu for children:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }

  }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();

*/

/*
Generics

Generics are templates that allow the same function to accept arguments of various different types.
Creating reusable components using generics is better than using the any data type,
as generics preserve the types of the variables that go in and out of them.

// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function genericFunc<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);         // "beep"
console.log(typeof arrayFromString[0])   // String

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);         // 42
console.log(typeof arrayFromNumber[0])   // number
*/

/*
Modules

TypeScript introduces a syntax for exporting and importing modules, but cannot handle the actual wiring between files.
To enable external modules TS relies on third-party libraries: require.js for browser apps and CommonJS for Node.js.
Let's take a look at a simple example of TypeScript modules with require.js:

import sayHi = require('./exporter');
sayHi();


Now we need to download require.js and include it in a script tag - see how here.
The last step is to compile our two .ts files.
An extra parameter needs to be added to tell TypeScript that we are building modules for require.js (also referred to as AMD), as opposed to CommonJS ones.

tsc --module amd *.ts
*/


/*
Third-party Declaration Files

When using a library that was originally designed for regular JavaScript,
we need to apply a declaration file to make that library compatible with TypeScript.
A declaration file has the extension .d.ts and contains various information about the library and its API.

*/

interface IBook {
    title: string,
    author: string,
    published: Date,
    pages: number
}

const checkDecription = (iBook: IBook) => {
    console.log(`Title: ${iBook.title}, author: ${iBook.author}, published: ${iBook.published} and pages: ${iBook.pages}`);
}

var harryPotter = {
    title: "Harry Potter",
    author: "Oliver Loenning",
    published: new Date('1995-12-17T03:24:00'),
    pages: 285
}

checkDecription(harryPotter);