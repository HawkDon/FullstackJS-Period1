// Use information from this link to find the first movie in which Luke Skywalker appeared
/*
function getLukeSkywalkerFilm() {
    return fetch("https://swapi.co/api/people/1/")
    .then(res => res.json())
    .then(res => res.films);
}

var arrayOfMovies = [];
async function findLukeFirstFilm() {
    const films = await getLukeSkywalkerFilm();
    for(let i = 0; i< films.length; i++) {
        arrayOfMovies.push(parseInt(films[i].slice(27,28)));
    }
    console.log(Math.min(...arrayOfMovies));
}
findLukeFirstFilm();
*/
// Use information from this link to find the first species, which appeared in this movie
/*
function findSpecies() {
    return fetch("https://swapi.co/api/films/1/")
    .then(res => res.json())
    .then(res => res.species);
}

var arrayOfMovies = [];
async function findFirstSpecies() {
    const species = await findSpecies();
    console.log(species);
    for(let i = 0; i< species.length; i++) {
        arrayOfMovies.push(parseInt(species[i].slice(29,30)));
    }
    console.log(Math.min(...arrayOfMovies));
}
findFirstSpecies();
*/
// Use information from this link to find the planet (homeworld) for this species
/*
function findHome() {
    return fetch("https://swapi.co/api/species/1/")
    .then(res => res.json())
    .then(res => res.homeworld);
}

async function findHomeWorld() {
    const homeWorld = await findHome();
    console.log(parseInt(homeWorld.slice(29,30)));
}
findHomeWorld();
*/

/*
Now, Implement a method getPlanetforFirstSpeciesInFirstMovieForPerson(id){} which for id = 1 (Luke Skywalker) should log this info:

Name: Luke Skywalker
First film: The Empire Strikes Back
First species: Yoda's species
Homeworld for Specie: unknown

*/
/*
async function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    let object = {};
    const getName = await fetch(`https://swapi.co/api/people/${id}/`)
    .then(res => res.json())
    .then(res => res.name);
    object.name = getName;
    const getFirstMovie = await fetch(`https://swapi.co/api/films/${id}/`)
    .then(res => res.json())
    .then(res => res.title);
    object.firstFilm = getFirstMovie;
    const getFirstSpecies = await fetch(`https://swapi.co/api/species/${id}/`)
    .then(res => res.json())
    .then(res => res.name);
    object.firstSpecies = getFirstSpecies;
    console.log(object);

}
getPlanetforFirstSpeciesInFirstMovieForPerson(1);
*/

/*
https://jsonplaceholder.typicode.com/photos?albumId=1 
https://jsonplaceholder.typicode.com/photos?albumId=3
https://jsonplaceholder.typicode.com/photos?albumId=5
https://jsonplaceholder.typicode.com/photos?albumId=7
https://jsonplaceholder.typicode.com/photos?albumId=9 
*/