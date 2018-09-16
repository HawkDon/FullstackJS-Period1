// The magic of callbacks:
//1

//const myNameArray = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

//Filter
/*
const myFilteredArray = myNameArray.filter(person => person.length <= 3);

console.log(myFilteredArray);
*/

//Map
/*
const myMappedArray = myNameArray.map(person => person.toUpperCase());

console.log(myMappedArray);
*/

//2

//3

//4

//a
/*
const myMappedArray = myNameArray.map(person => `<li>${person}</li>`);

const listOfNames = `<ul>${myMappedArray}</ul>`;
*/
//b
/*
const names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

const stringOfNames = names.map(person => `<tr><td>${person.name}</td><td>${person.phone}</td></tr>`).join("");

console.log(stringOfNames);
*/

//c, d
/*
Done in index.html
*/

//Reduce

const all= ["Lars", "Peter", "Jan", "Bo"];
//a
const allJoin = all.join(",");

//b

function myReducerFunction(numbers) {
    let resultSum = 0;
    for(let i = 0; i < numbers.length; i++) {
        resultSum += numbers[i];
    }
    return resultSum;
}

const numbers = [2, 3, 67, 33]; 

const sum = myReducerFunction(numbers);

console.log(sum);

//c

function myReducerAverage(members) {
    let ageTotal = 0;
    for(let i = 0; i < members.length; i++) {
        ageTotal += members[i].age;
    }
    const averageAge = ageTotal / members.length;
    return averageAge;
}

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
];

const getAverageAge = myReducerAverage(members);

console.log(getAverageAge);

//d

let votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

function electionReducer(votes) {
    let myElection = {Clinton: 0, Trump: 0, None: 0};
    for(let i = 0; i < votes.length; i++){
        if(votes[i] === "Clinton") myElection["Clinton"] += 1;
        if(votes[i] === "Trump") myElection["Trump"] += 1;
        if(votes[i] === "None") myElection["None"] += 1;
    }
    return myElection;
}

const ourElection = electionReducer(votes);

console.log(ourElection);

//Immediatly invoked expression

(function(){
    console.log("Invoked");
  })();

//Objects

let myObject = {name: "Stefan", birthday: "20/07/95", hobby: "Fitness", email: "Stefan@mail.dk"};

//1

for (let property in myObject) {
    console.log(myObject[property]);
}

//Delete name
delete myObject["name"];

//False
console.log(myObject.hasOwnProperty("name"));

//True
console.log(myObject.hasOwnProperty("hobby"));

//2

function myPerson(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getDetails = function() {
        console.log(`my name is ${this.name} ${this.lastName} and i am ${this.age} years old`);
    }
}

const person = new myPerson("Oliver", "Loenning", 23);

person.getDetails();

//3

//Already done

