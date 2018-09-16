/*import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const name = 'Kurt Wonnegut';
    setTimeout(() => alert(`Hello there from ${name}`), 1000);
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());
*/

import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

function makeTable(persons) {
    const makeTableBody = persons.map(ele => `<tr><th>${ele.firstName}</th><th>${ele.lastName}</th><th>${ele.favoriteSport}</th></tr>`).join("");
    return `<table class="table"><thead><tr><th>FirstName</th><th>LastName</th><th>Favorite Sport</th></tr></thead><tbody>${makeTableBody}</tbody></table>`;
}
class Person {
    constructor(fn, ln, s) {
      this.firstName = fn;
      this.lastName = ln;
      this.favoriteSport = s;
    }
}

const persons = [
    new Person("Kurt", "Wonnegut","Socker"),
    new Person("Jan", "Peterson","Hockey"),
    new Person("Jane", "Peterson","Skating"),
    new Person("John", "Hansen","Socker"),
]
 
// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById('my-table').innerHTML = table;