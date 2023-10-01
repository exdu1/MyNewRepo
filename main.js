// Modules
import {halfOf, multiply} from './lib.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

import doSomething from './doSomething.js';
doSomething();

// Modules Export Bindings and not values
import {flag, touch} from './validator.js';
console.log(flag);
touch();
console.log(flag)

// Classes
