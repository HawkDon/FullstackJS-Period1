// 3. Interfaces-1
//A, D make published and pages optional, E make author readOnly, works like const in most ways.
/*
interface IBook {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number
}

//B
const checkDecription = (iBook: IBook) => {
    if(iBook.published && !iBook.pages) {
        console.log(`Title: ${iBook.title}, author: ${iBook.author}, and published: ${iBook.published}`);
    }
    if(!iBook.published && iBook.pages) {
        console.log(`Title: ${iBook.title}, author: ${iBook.author}, and pages: ${iBook.pages}`);
    }
    if(!iBook.published && !iBook.pages) {
        console.log(`Title: ${iBook.title}, and author: ${iBook.author}`);
    }
    if(iBook.published && iBook.pages) {
        console.log(`Title: ${iBook.title}, author: ${iBook.author}, published: ${iBook.published} and pages: ${iBook.pages}`);
    }
}

var harryPotter = {
    title: "Harry Potter",
    author: "Oliver Loenning",
    published: new Date()
}

checkDecription(harryPotter);
*/
//C

/*
It is a term used in dynamic languages that do not have strong typing.

The idea is that you don't need a type in order to invoke an existing method on an object - if a method is defined on it, you can invoke it.

The name comes from the phrase "If it looks like a duck and quacks like a duck, it's a duck".
*/
/*
F
class Book {
    title: string;
    author: string;
    published: Date;
    pages: number;

    constructor(title: string, author: string, published: Date, pages: number) {
        // The this keyword is mandatory.
        this.title = title;    
        this.author = author;
        this.published = published;
        this.pages = pages;
      }

      call(): void {
          console.log(`Title: ${this.title}, author: ${this.author}, published: ${this.published} and pages: ${this.pages}`)
      }
}

*/

//4 Interfaces-2 (Function types)
/*
interface methodCalls {
    myArray: Function,
    myArrayUppercase: Function
}

const callMethods = {
    myArray: (string1, string2, string3) => {
        return [string1, string2, string3]
    },
    myArrayUppercase: (string1, string2, string3) => {
        return [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()]
    },
}

const myArrays = callMethods.myArray("derp1", "derp2", "derp3");

console.log(myArrays);

const myArraysUppercase = callMethods.myArrayUppercase("derp1", "derp2", "derp3");

console.log(myArraysUppercase);

let f2 = function logger(f1: methodCalls){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1.myArray(a,b,c));
}

f2(callMethods);
*/ 
//E and F done

// Classes and Inheritance

