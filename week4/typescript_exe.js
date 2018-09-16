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
var callMethods = {
    myArray: function (string1, string2, string3) {
        return [string1, string2, string3];
    },
    myArrayUppercase: function (string1, string2, string3) {
        return [string1.toUpperCase(), string2.toUpperCase(), string3.toUpperCase()];
    }
};
var myArrays = callMethods.myArray("derp1", "derp2", "derp3");
console.log(myArrays);
var myArraysUppercase = callMethods.myArrayUppercase("derp1", "derp2", "derp3");
console.log(myArraysUppercase);
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1.myArray(a, b, c));
};
f2(callMethods);
