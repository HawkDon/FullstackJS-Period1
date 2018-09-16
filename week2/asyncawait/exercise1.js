const URL = "https://swapi.co/api/people/";
 
function fetchPerson(url){
  return fetch(url)
  .then(res => res.json())
}

//Sequential
async function printNames() {
    var t0 = performance.now();
    console.log("Before");
    const person1 = await fetchPerson(URL+1);
    const person2 = await fetchPerson(URL+2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    var t1 = performance.now();
    console.log("Call to printNames took " + (t1 - t0) + " milliseconds.");
}

//Parallel
async function printAllNames() {
    var t0 = performance.now();
    console.log("Before");
    Promise.all([
        fetchPerson(URL+1),
        fetchPerson(URL+2)
    ])
    .then(res => {
        console.log(res[0].name);
        console.log(res[1].name);
        console.log("After all");
        var t1 = performance.now();
        console.log("Call to printAllNames took " + (t1 - t0) + " milliseconds.");
    })
}

printNames();

printAllNames();