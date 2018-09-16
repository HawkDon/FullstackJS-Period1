# Period-1 Vanilla JavaScript, es2015/15.., Node.js, Babel + Webpack and TypeScript

### Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.
Java er et sprog der skal compiles sprog, for at kunne køre på operativsystemer.
Java compiler koden og fortæller om der er en fejl, før koden kører. Dette gør også at Java har en langsom runtime.
Fordelen ved Javascript er at koden ikke skal compiles før den kan køre i browseren, for browseren forstår allerede vanilla javascript(ES5).
#### Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
Gamle browsere forstår ikke ES6-ES7+, og derved kan vi bruge typescript til at compile koden om til ES5, så browseren forstår koden.
Typescript imod ES6-ES7 er ret simpelt. ES6 og ES7 er mere nyere javascript syntax, hvorimod Typescript er syntax sugar for gamle backend udviklere, der opererer med fx java og c#.
#### Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
Node er bygget op på Google Chromes V8 javascript runtime, og bruges til at køre javascript kode “omme bagved”.
1. Node skal bruges eksempelvis når vi skal bruge react, her benytter vi os af npm, der står for Node Package Manager. Npm virker ligesom maven, den har et sæt "koordinater" der navigerer rundt på nettet for at finde de pakker du skal downloade. Disse oplysninger bliver så gemt inde i package.json filen. I dette tilfælde peger den på react pakken.
2. For at kunne importere pakken, skal du bruge node, for browseren ved ikke hvad import / require er.
3. Når du er færdig med at bruge pakken, skal du så compile det vha. Babel eller TypeScript, så BROWSERENS java runtime kan forstå det og køre det.
#### Explain about the Event Loop in Node.js
Event Loopet gør at vi kan arbejde asynkronisk i browseren uden at blokere for javascript koden. Vi kan køre opgaver i “baggrunden”, som skal bruges senere i koden.
Event Loopet har en task queue der har en række gennemførte asynkroniske opgaver, som er klar til at blive smidt op i stakken. Event Loopet venter til stacken er tom før den begynder at smide de gennemførte opgaverne op i stacken en efter en.

**timers:** this phase executes callbacks scheduled 	by setTimeout() and setInterval().
pending callbacks: executes I/O callbacks deferred to the next loop iteration.
idle, prepare: only used internally.

**poll:** retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and setImmediate()); node will block here when appropriate.

**check:** setImmediate() callbacks are invoked here.

**close callbacks:** some close callbacks, e.g. socket.on('close', ...).
efter hver faser bliver der igen tjekket om der ligger noget i vores task queue også bliver event looped triggered og køre igen.

### Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises

Formålet med Babel og Webpack er at kunne compile vores kode i alle browsere, dette skyldes ældre browsere ikke understøtter eksempelvis ES6-ES7. 
Måden vi fortæller at vores kode skal compiles til ES5 er i webpack filen: Webpack.config.js. Webpack har et sæt forskellige properties hvor et af dem er et module objekt.
```
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    ]
}
}
```

Module objektet, har en regel property som tager et array af regler. Test indikerer alle de js filer der skal compiles, og loaderen laver det om til ES5, ved hjælp af babel-loaderen.

### Explain the purpose of “use strict” and Linters, exemplified with ESLint
Når vi bruger “use strict” kan vi ikke bruge variabler der ikke er deklareret. Dette gør det nemmere at skrive sikker Javascript kode med lavere chancer for dårlig fejlhåndtering.
ESLint hjælper med at prettyfy kode til din fordel. Du kan lave dine egne regler for syntaxen, så længere den er en valid syntax i javascript).

### Explain using sufficient code examples the following features in JavaScript: var, let and const.
let og const er block-scoped, hvilket betyder de kun er eksisterende i den tætteste blok af kode {}. Forskellen mellem const og let er, at du ikke kan tildele en const variable en anden værdi, når den først er blevet deklareret .
var på den anden side, er defineret i den globale context,og vi har adgang til værdien alle steder.

```
function blocky() {
    if(true) 
	    { 
	        var something ="something"; 
	    }	
    console.log(something) 
}
blocky();
```

I det her eksempel ville funktionen outputte “something”, men hvis vi ændrer variables deklaration til let vil det give en fejl. Det er fordi at let kun er dekladeret inde i den nærmeste bracket.

### this in JavaScript and how it differs from what we know from Java/.net.
I javascript refererer this til vindue objektet, men ændrer sig ifølge kontexten. Dvs. at hvis du laver en funktion og kalder på this, vil den referer til funktionens kontext i stedet for vinduets.
I java referer this sig altid til den øjeblikkelige variable, som du bruger til at definere med.

### Function Closures and the JavaScript Module Pattern
Funktion closures betyder, at vores funktion kan bruge alle variabler der er defineret inde i funktionen, så længe det er en var værdi.
Eksempelvis 

```
function myFunction() {
    var a = 4;
    return a * a;
}
```
Her kan funktionen bruge a.

### JavaScript Module Pattern
I JavaScript refererer ordet “modules” til mindre, selvstændige og genbrugelig kode dele. Det minder lidt om en Java Class, dog i Java laver man et objekt i memory vha. en constructor af hele klassen(Objektivt programmering).
Javascript kan man dog også eksportere rene funktioner, arrays, objekter osv uden hjælp fra nogle constructorer af objekter.

### Immediately-Invoked Function Expressions (IIFE)
Immediately-invoked functions er definerede funktioner, som bliver eksekverende lige så snart du åbner browser vinduet.

```
(function () {
    console.log(“Hello World!”)
})();

```
Når vinduet er færdigt med at loade vil konsolen give os “Hello World!”.

### JavaScripts Prototype

Alle objekter i javascript arver metoder og egenskaber fra en prototype objekt.

Man benytter sig af prototype til at tillægge sig nye egenskaber til et objekt. Dette kunne som eksempel være at give nye metoder, eller properties til objektet

```
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
```

### User defined Callback Functions (writing your own functions that takes a callback)

```
let add = function(a,b){
    return a+b;
}
let multiply = function(a,b){
    return a*b;
}
let calc = function(num1, num2, cb){
    return cb(num1, num2);
}
console.log(calc(2,3, add));
console.log(calc(2,3, multiply));
Output:
5 
6
```

En callback er i princippet en funktion, du kalder fra en anden funktion, du giver med som parameter.
Jeg har lavet en funktion som hedder calc, der tager tre parametre ind, et af dem skal være en callback der bliver kaldt inde i calc. Derefter får jeg resultatet igennem console.log.

### Explain the methods map, filter and reduce
###### Map
Map er en metode du kalder på et array, og som returnerer et nyt array med samme antal pladser, som arrayet, map blev kaldt på. Map tager en callback, som bruges til at manipulere hvert element ved at ændre på hvad der skal stå. Eksempel kunne være:

```
const myMappedArray = myArray.map(ele => ele.length);
```
...returnere et array med længderne fra det originale array.

###### Filter
Filter er en metode du kalder på et array, og som returnerer et andet array, der opfylder et kriterie. Den tager en callback, som skal afgøre hvad kriteriet kunne være. Det kunne som eksempel være:

```
const myFilteredArray = myArray.filter(ele => ele.length < 3);
```
...returnere et array hvor hvert element er under 3 i længden.

###### Reduce
Reduce bliver kaldt på et array, som skal reducerer værdien til et enkelt output. Et eksempel kunne være:

```
const mySingleValue = myArray.reduce((accumulator, currentValue) => accumulator + currentValue);
```
...returnere den samlede værdi af myArray til mySingleValue som er 6.

### Provide examples of user defined reusable modules implemented in Node.js
Et eksempel af overordnet kunne være lad os sige du godt vil have en plus funktion som skal bruges flere steder:

**I exportFile.js:**

```
Module.exports = function add(num1, num2) {
return num1 + num2;
}
```

**I importFile.js:**

```
const exportFunc = require(“./exportFile.js”);

exportFunc(1, 4);
```

...exportFunc vil så give 5

### Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.

**let og const:**
let og const er de nye datatyper, som er blevet introducere i es2015.
De begge to har et block scope, som betyder at deres værdi hvor de er blevet defineret er der de kan bruges, men ikke udenfor.
Så hvis du har følgende funktion:

```
function blocky() {
    if(true) 
	    { 
	        let something = "something"; 
	    }	
    console.log(something) //
}
blocky(); 
```
...vil den give en fejl, fordi blocky() funktion kalder på en variable, som ikke eksisterer udefra blokken af koden den er defineret.
Forskellen mellem const og let er at const ikke kan ændres efter den er blevet defineret.

**Arrow functions**
Derudover har es2015 også arrow functions, som bruges til at definere funktioner på en anden mere overskuelige måde. Eksempel:

```
var cities = [
  'Copenhagen',
  'Roskilde',
  'Holbæk',
  'Fårevejle'
];

const myPredefinedFunction = (cities) => {
Let myNewArray = [];
for(let i = 0; i < cities.length; i++){
myNewArray.push(cities[i].length);
}
return myNewArray;
}
console.log(myPredefinedFunction(cities));
```
...Output: [10, 8, 6, 9]

**This**
I es2015 har vi keywordet this, når vi i javascript bruger this, referere vi til vindue objektet, men ændrer sig ifølge kontexten. Dvs. at hvis du laver en funktion og kalder på this, vil den referer til funktionens kontext i stedet for vinduets.

**Rest Parameters:**
Der er også kommet rest parameter, som gør det muligt at give en uendelig mængde af argumenter som et array, eksempelvis:

```
function sum(...theArgs) {
 CODE
  });
console.log(sum(1, 4, 5, 6, 1, 3, 5, 1, 4, 5, 6, 7, 232, 12, 3, 5);
```
Når vi kalder på metoden, og metoden har  . . .  (rest parameter) kan vi give metoden lige så mange argumenter med som vi vil, som vi har vist i console.log.

**Destructuring assignments:**
I es2015 er der de-structuring assignments som er en javascript expression, der gør det muligt at udpakke værdier fra arrays, properties eller objects indtil forskellige variabler. Eksempel:

```
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```
Her kan vi se at, vores rest variable kan indeholde flere tal end 1.
Vi kan også bruge det til at finde forskellige properties i et objekt vh.a. Propertynøglen:

```
const myObject = {name: “Oliver”, age: 23, email: “Oliver@Mail.dk”}
const { name } = myObject;
console.log(name)
```
name variablen bliver så til "Oliver".

**Set:**
Der er også kommet Set object, som gør det muligt at gemme unikke værdier lige gyldig datatype i et nyt Set objekt.
Kode eksempel:
```
const set1 = new Set([1, 2, 3, 4, 5]);
console.log(set1.has(2));
output: true
```

### Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.
Først snakker vi om export, hvor vi kan exportere eksempelvis en funktion, og bruge den i en anden fil. Lad os starte med fil 1:

```
var crypto = require('crypto');
module.exports = function callSix(number) {
   return new Promise((resolve, reject) => {
       setTimeout( () => {
           crypto.randomBytes(number, function(err, buffer) {
               if(resolve) {
                   let secureHex = buffer.toString("hex");
                   resolve(secureHex);
               } else {
                   reject("Woops");
               }
            })
        }, 0);
    })
}
```
I fil 1 har vi overskrevet module.export til at være vores nye funktion der skal importeres, og derefter i fil 2 vil vi gøre brug af vores funktion.
Fil 2:

```
ar export_d1 = require("./fil 1");
const objectRandoms = {
   title: "6 Secure Randoms",
   randoms: []
}
Promise.all([
   export_d1(48),
   export_d1(40),
   export_d1(32),
   export_d1(24),
   export_d1(16),
   export_d1(8)
]).then(res => {
   for(var i = 0; i< res.length; i++) {
       objectRandoms.randoms.push(res[i]);
    }
   console.log(objectRandoms);
})
```
I fil 2 øverst, bruger vi keyworded require, som henter module.export objektet vi har overskrevet i fil 1, og derefter kan vi benytte funktionen i fil 2.

### Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
I ES6 har vi fået inheritance
Som vi kan benytte på følgende måde, 
Først laver vi en klasse Shape:

```
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
```
Efter vi har lavet en shape, vil vi gerne have en bestemt shape, som eksempelvis en cirkel, som arver fra Shape klassen.

```
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
```
Da vores shape kun har en farve, har vi nu tilføjet 2 nye argumenter i vores constructor, der nu gør at cirklen har en radius og en farve, farven bliver nedarvet fra shape, da vi bruger super keywordet. 
Derefter kan vi nu lave en ny cirkel, med en radius og en farve:

```
let newCircle = new Circle(11, "red");
```

### Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
Måden man laver en class i javascript er meget nemt, fordi man bare skal bruge keywordet “class” og det minder derfor meget om måden man laver en java class på.
Fordelen ved at skrive i typescript er, at man ikke behøves at kende til native javascript fordi den selv laver det om til dens syntax hvis du har defineret det i din tsconfig-fil. Derudover er det ikke alle browserer endnu, som understøtter es6 derfor kan man ved hjælp af TypeScript oversætte det til noget kode som browseren forstår.

```
class Shape {
```

Man definerer en type ved at give variabel et navn, i dette tilfælde ‘color’ og så definerer du typen som i dette tilfælde er en ‘string’.

```
color: string;
area: number;
```

Typescript gør det nemt, at håndtere type-checking også kaldet “duck typing”. Type-checking er nemt i TypeScript, da man blot behøver at lave et interface som vi kender det fra Java.

```
interface IBook {
    title: string;
    readonly author: string;
    published?: string;
    pages?: number;
}
```

### Explain about promises in ES-6 including, the problems they solve and a quick explanation of the Promise API:
Et Promise objekt repræsenterer en senere udførelse af en opgave som foregår asynkronisk. Dvs. opgaven foregår senere imens senere kode, som ikke er asynkronisk bliver eksekveret ligesom det typisk ville foregå. Promises fortæller os at det her er en asynkronisk opgave, og har to parametre i en callback: resolve og reject. Resolve er hvis opgaven er fuldført og reject er hvis der gik en fejl under opgaven. Man bruger typisk promises hvis man skal hente noget data udefra, bl.a. i form af JSON eller XML. Promises er godt, fordi det gør det lettere at håndtere asynkroniske opgaver, så vi ikke behøver at tænke for meget over det med callbacks.

#### Example(s) that demonstrate how to avoid the callback hell  (“Pyramid of Doom")
Lad os sige det tager tre opgaver at bygge en båd:
```
let getWood = () => { return new Promise((resolve, reject) => { resolve(Got Wood) })};
let buildBoat = () => { return new Promise((resolve, reject) => { resolve(Building a boat) })};
let sailTheOcean = () => { return new Promise((resolve, reject) => { resolve(Sailing the ocean) })};

// Resolve the promises with then(), which is a function promises has access too.

getWood()
.then(() => { return buildBoat() })
.then(() => { return sailTheOcean() })
.then(() => { console.log("The sailor is sailing!") })
```

#### Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel.
Der er to måder at køre promises på. Det ene er serial, som gennemføre en promise af gangen og giver den til en allerede eksisterende promise objekt. Det andet er parallel, som gennemføre flere promises af gangen på et bestemt tidspunkt.

##### Serial
Promises er meget cool, men hvad nu hvis vi gerne vil loope over promises og have en enkelt promise værdi til slut?
Et eksempel kunne være:
```
function doSomethingAsync(i) {  
    return new Promise((resolve) => {
        setTimeout(() => { console.log(i); resolve(); }, 1000);
    });
}

let vals = [1,2,3];  
let chain = Promise.resolve();  

for(let val of vals) {  
    chain = chain.then(() => doSomethingAsync(val));
}
chain.then(() => console.log('complete'));  
```

I eksemplet har vi et array, og et promise objekt der i øjeblikket er tomt. Vi looper over hvert promise objekt der kommer ind i doSomethingAsync(i) og overskriver værdien i vores chain promise. På den måde har vi kun en enkelt værdi til slut.

##### Parallel
Hvis du på den anden side godt vil have at flere promises bliver færdige samtidigt set fra en parallel vinkel før du går videre til næste opgave, så skal du bruge Promise.all(), som tager et array af promises der skal være færdige på sammetid. Eksempel:

```
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```
then() går først igang når alle værdier i promise.all er gennemført.

#### Example(s) that demonstrate error handling with promises
Når vi laver fejlhåndtering med promises, skal vi først kigge på hvordan en promise fungere, en promise tager to arguementer med, resolve og reject
Resolve returnere et promise der er løst, og reject returnere en promise der er afvist.

Kode eksempel:

```
function callSix(number) {
    return new Promise((resolve, reject) => {
            setTimeout( () => {
                crypto.randomBytes(number, function(err, buffer) {
                    if(resolve) {
                        let secureHex = buffer.toString("hex");
                    resolve(secureHex);
                    } else {
                    reject("Your promise failed");
                }
            })
        }, 0);
    })
}

```

### Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
Async og await bruges til at gøre asynkroniske promises til synkronske. De bliver brugt til at gøre asynkroniske opgaver lette og overskuelige, men er ikke altid den bedste løsning med hensyn til performance.

#### Provide examples to demonstrate
For at kunne bruge await i en funktion, skal du først kalde på async, der fortæller funktionen at det her er en asynkronisk funktion. Derefter skal du kalde på await inde i funktionen hvor du kalder på en asynkronisk opgave aka noget der returnerer et promise.
Et meget simpel eksempel kunne være:

```
function getNumber7() {
    let number = 4;
    return new Promise((resolve, reject) => {
        setTimeout(() => { console.log("It went through"); resolve(number + 3); }, 5000);
    })
}

async function letsGetAsync(){
    const number await getNumber7()
    return number;
}
console.log(letsGetsAsync()); // giver 7
```
... Efter 5 sekunder vil vi få et tal, som giver 7, fordi vi fortæller funktionen at før letsGetAsync() bliver eksekveret og går videre, skal den asynkroniske funktion returnere et tal først.

#### Why this often is the preferred way of handling promises
At bruge async await gør det meget mere overskueligt at kode i javascript, fordi du ikke behøver at tage særlig meget hensyn til asynkroniske opgaver på samme måde, fordi du gør dem synkronske.

#### Error handling with async/await
Der er mange måder at føre error handling på med promises, men her et simpel eksempel:
```
function handleError(resolve) {
    if(!resolve.ok){
       return resolve("Something went wrong!")
    } else {
        return resolve;
    }
}

function fetchRequest() {
    return fetch("https://swapi.co/api/people/1").then(resolve => handleError(resolve))
}

async function getPerson(){
    const person = await fetchRequest();
    console.log(person) // Hvis der er fejl vil person være "Something went wrong!"
}

getPerson();
```
Her der fortæller vi vores promise, at hvis requesten ikke er iorden, så ændrer person variablen til "Something went wrong!", ellers så skal det returnerer et objekt af en person fra star wars.

#### Serial or parallel execution with async/await.
En meget mere simpel måde at lave loops over serial execution er at bruge async await. Lad os tage vores tidligere serial eksempel og gøre det her istedet for:

```
function doSomethingAsync(i) {  
    return new Promise((resolve) => {
        setTimeout(() => { console.log(i); resolve(); }, 1000);
    });
}

let vals = [1,2,3];  
for(let val of vals) {  
  await doSomethingAsync(val);
}
console.log('complete');  
```

Som du kan se er det meget mindre kode end tidligere eksempel.

For parallel execution kan man simplificerer det endnu mere:

```
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
function awaitAll() {
Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
}
awaitAll()

// expected output: Array [3, 42, "foo"]
//next line of code...
```