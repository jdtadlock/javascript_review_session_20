const data = require('./one');
const name = require('./one').name;
const age = require('./one').age;

console.log(data.name, data.age);

// ES6 way of pulling in props or seperate exported items
// Destructuring
// The names have to be props from the exported object
const { name, age } = require('./one');
import { name, age } from './one';
import main_data from './one';


console.log(name, age);
