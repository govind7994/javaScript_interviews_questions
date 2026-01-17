const questions = [
  {
    id: 1,
    level: 'easy',
    title: 'Global Execution Context',
    shortDesc: 'The foundation of JS runtime.',
    theory: 'Whenever JS code runs, it creates an environment called GEC. It consists of two stages: Memory Creation (variables are hoisted) and Code Execution.',
    logic: 'JS is single-threaded, meaning it executes one command at a time in a specific order within this context.',
    code: `var a = 10;
function b() { console.log("HI"); }

// Stage 1: a = undefined, b = function body
// Stage 2: a = 10, b is executed.`,
    tip: 'Every JS file has at least one Global Execution Context and one Global Object (window/global).'
  },
  {
    id: 2,
    level: 'easy',
    title: 'Hoisting: var vs let/const',
    shortDesc: 'How variable declarations move to the top.',
    theory: 'Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution. While `var` is hoisted and initialized with `undefined`, `let` and `const` are hoisted but stay in the "Temporal Dead Zone".',
    logic: 'Accessing a `var` before declaration gives undefined; accessing `let` throws a ReferenceError.',
    code: `console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;`,
    tip: 'Always declare variables at the top of their scope to avoid hoisting confusion.'
  },
  {
    id: 3,
    level: 'easy',
    title: '== vs === Operators',
    shortDesc: 'Loose equality vs Strict equality.',
    theory: 'The `==` operator performs type coercion (converts types to match) before comparing. The `===` operator compares both the value and the data type without conversion.',
    logic: 'Use `===` to ensure data integrity unless you specifically need type coercion.',
    code: `console.log(5 == "5"); // true (string "5" becomes number 5)
console.log(5 === "5"); // false (different types)`,
    tip: 'Default to using === in 99% of cases to prevent unexpected bugs.'
  },
  {
    id: 4,
    level: 'easy',
    title: 'Null vs Undefined',
    shortDesc: 'The difference between "nothing" and "empty".',
    theory: '`undefined` means a variable has been declared but not assigned a value. `null` is an assignment value that represents "no value" or an empty object intentionally.',
    logic: 'JS sets variables to undefined automatically. Developers set variables to null.',
    code: `let x;
console.log(x); // undefined

let y = null;
console.log(y); // null`,
    tip: 'typeof null returns "object" due to a legacy bug in JavaScript.'
  },
  {
    id: 5,
    level: 'easy',
    title: 'Implicit Type Coercion',
    shortDesc: 'Automatic type conversion by JS.',
    theory: 'JavaScript is weakly typed. When you apply operators to values of different types, JS converts one type to another automatically.',
    logic: 'The `+` operator prefers string concatenation if one operand is a string. Other operators like `-`, `*`, `/` prefer numeric conversion.',
    code: `console.log("5" - 3); // 2 (string "5" becomes number 5)
console.log("5" + 3); // "53" (number 3 becomes string "3")`,
    tip: 'Be careful with the + operator; it is the only one that supports string overloading.'
  },
  {
    id: 6,
    level: 'easy',
    title: 'Function Declaration vs Expression',
    shortDesc: 'Different ways to define functions.',
    theory: 'A Function Declaration is defined with the `function` keyword and is fully hoisted. A Function Expression is assigned to a variable and acts like a variable (only the variable name is hoisted, not the definition).',
    logic: 'You can call a Declaration before it is defined. You cannot call an Expression before it is defined.',
    code: `greet(); // Works
function greet() {}

sayHi(); // Error
var sayHi = function() {};`,
    tip: 'Arrow functions are a type of function expression.'
  },
  {
    id: 7,
    level: 'easy',
    title: 'Primitive Types',
    shortDesc: 'Basic data types in JS.',
    theory: 'There are 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable and stored by value.',
    logic: 'Changing a primitive value creates a new value in memory; it does not modify the original memory address.',
    code: `let a = 10;
let b = a;
a = 20;
console.log(b); // 10 (b is a copy, not a reference)`,
    tip: 'Everything in JS that is not a primitive is an Object.'
  },
  {
    id: 8,
    level: 'easy',
    title: 'truthy and falsy values',
    shortDesc: 'Boolean evaluation of non-booleans.',
    theory: 'Every value in JS has an inherent boolean value. Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`. All others are truthy.',
    logic: 'This is crucial for if-statements and logical operators (&&, ||).',
    code: `if (0) { console.log("Won't run"); }
if ("hello") { console.log("Will run"); }`,
    tip: 'Empty arrays [] and empty objects {} are truthy.'
  },
  {
    id: 9,
    level: 'easy',
    title: 'typeof Operator',
    shortDesc: 'Checking variable types.',
    theory: 'The `typeof` operator returns a string indicating the type of the unevaluated operand.',
    logic: 'It is useful for validating parameters before performing operations.',
    code: `console.log(typeof 42); // "number"
console.log(typeof "JS"); // "string"
console.log(typeof []); // "object"`,
    tip: 'To check specifically for arrays, use Array.isArray().'
  },
  {
    id: 10,
    level: 'easy',
    title: 'Scope Chain',
    shortDesc: 'How JS looks for variables.',
    theory: 'If a variable is not found in the current scope, JS looks in the outer (parent) scope, continuing until it reaches the Global Scope.',
    logic: 'This chain of lexical environments is created at variable definition time, not execution time.',
    code: `let global = "global";
function outer() {
  let outerVar = "outer";
  function inner() {
    console.log(global); // Found in global scope
  }
}`,
    tip: 'The scope chain is one-way: Outer scopes cannot access Inner scope variables.'
  },
  {
    id: 11,
    level: 'easy',
    title: 'Template Literals',
    shortDesc: 'Easier string interpolation.',
    theory: 'Introduced in ES6, template literals allow embedded expressions using backticks (`) and `${}` syntax. They also support multi-line strings without special characters.',
    logic: 'This replaces the messy string concatenation using the `+` operator.',
    code: `const name = "JS";
console.log(\`Hello \${name}\`); // Hello JS`,
    tip: 'You can perform calculations or call functions directly inside the `${}`.'
  },
  {
    id: 12,
    level: 'easy',
    title: 'NaN (Not a Number)',
    shortDesc: 'Invalid numeric operations.',
    theory: '`NaN` is a property of the global object representing a value that is not a valid number. Surprisingly, its type is "number".',
    logic: 'Any mathematical operation involving NaN results in NaN. NaN is not equal to anything, including itself.',
    code: `console.log(isNaN("Hello")); // true
console.log(NaN === NaN); // false`,
    tip: 'Use `Number.isNaN()` for a strict check, as the global `isNaN()` coerces values before checking.'
  },
  {
    id: 13,
    level: 'easy',
    title: 'Arrow Functions',
    shortDesc: 'Concise function syntax.',
    theory: 'Arrow functions provide a shorter syntax for writing function expressions. They omit the `function` keyword and return values implicitly if the block braces `{}` are omitted.',
    logic: 'They are anonymous by default and are often used as callbacks.',
    code: `const add = (a, b) => a + b;
// Equivalent to:
// function(a, b) { return a + b; }`,
    tip: 'If there is only one parameter, parentheses `()` are optional: `x => x * 2`.'
  },
  {
    id: 14,
    level: 'easy',
    title: 'Default Parameters',
    shortDesc: 'Fallback values for arguments.',
    theory: 'ES6 allows you to initialize named parameters with default values if no value or `undefined` is passed.',
    logic: 'This prevents errors when arguments are missing and removes the need for lines like `arg = arg || "default"`.',
    code: `function greet(name = "Guest") {
  console.log("Hi " + name);
}
greet(); // "Hi Guest"`,
    tip: 'Default parameters are only applied if the argument is strictly `undefined`.'
  },
  {
    id: 15,
    level: 'easy',
    title: 'JSON methods',
    shortDesc: 'Parsing and Stringifying data.',
    theory: '`JSON.stringify()` converts a JS object into a JSON string. `JSON.parse()` converts a JSON string back into a JS object.',
    logic: 'This is the standard format for exchanging data between a server and a web client.',
    code: `const str = '{"id": 1}';
const obj = JSON.parse(str);
console.log(obj.id); // 1`,
    tip: 'JSON keys must always be double-quoted strings.'
  },
  {
    id: 16,
    level: 'easy',
    title: 'Array Push/Pop/Shift/Unshift',
    shortDesc: 'Adding and removing elements.',
    theory: '`push` adds to end, `pop` removes from end. `unshift` adds to start, `shift` removes from start.',
    logic: 'These methods mutate (change) the original array.',
    code: `let arr = [1, 2];
arr.push(3); // [1, 2, 3]
arr.shift(); // [2, 3]`,
    tip: 'Push and Pop are faster (O(1)) than Shift and Unshift (O(n)) because re-indexing is not required.'
  },
  {
    id: 17,
    level: 'easy',
    title: 'The Spread Operator',
    shortDesc: 'Expanding iterables.',
    theory: 'The `...` operator expands an iterable (like an array or string) into individual elements. It allows for easy copying or merging.',
    logic: 'It creates a shallow copy of the data.',
    code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]`,
    tip: 'Also works on Objects: `const newObj = { ...oldObj, newProp: 1 }`.'
  },
  {
    id: 18,
    level: 'easy',
    title: 'String Methods: Slice vs Substring',
    shortDesc: 'Extracting parts of strings.',
    theory: 'Both extract parts of a string. `slice(start, end)` allows negative indices (counting from the end). `substring(start, end)` treats negative indices as 0.',
    logic: 'Use `slice` for more flexibility.',
    code: `let text = "JavaScript";
console.log(text.slice(-6)); // "Script"`,
    tip: 'Strings are immutable; these methods return a new string and do not change the original.'
  },
  {
    id: 19,
    level: 'easy',
    title: 'Strict Mode',
    shortDesc: 'Writing secure code.',
    theory: '`"use strict";` enables a stricter parsing and error handling model. It prevents accidental globals, duplicate parameter names, and unsafe actions.',
    logic: 'It converts silent errors into throwing errors.',
    code: `"use strict";
x = 3.14; // ReferenceError (x is not declared)`,
    tip: 'Modern modules and classes use strict mode automatically.'
  },
  {
    id: 20,
    level: 'easy',
    title: 'SetTimeout Basic',
    shortDesc: 'Delaying execution.',
    theory: '`setTimeout` calls a function after a specified number of milliseconds.',
    logic: 'It does not stop execution; it schedules the code to run later (asynchronous).',
    code: `console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
// Output: 1, 3, then 2`,
    tip: '`setTimeout` returns an ID that can be passed to `clearTimeout` to cancel it.'
  },
  {
    id: 21,
    level: 'easy',
    title: 'LocalStorage vs SessionStorage',
    shortDesc: 'Client-side data storage.',
    theory: '`localStorage` persists data even after the browser is closed and reopened. `sessionStorage` only persists data for the duration of the page session (until the tab is closed).',
    logic: 'Both use the same API (`setItem`, `getItem`) and store strings only.',
    code: `localStorage.setItem('theme', 'dark');
// Browser restart...
console.log(localStorage.getItem('theme')); // 'dark'`,
    tip: 'Storage limit is usually around 5MB per domain.'
  },
  {
    id: 22,
    level: 'easy',
    title: 'Array.from()',
    shortDesc: 'Creating arrays from array-like objects.',
    theory: '`Array.from()` creates a new, shallow-copied Array instance from an array-like or iterable object (like a NodeList or arguments object).',
    logic: 'It is the modern alternative to `Array.prototype.slice.call()`.',
    code: `const str = "123";
const nums = Array.from(str, x => Number(x)); // [1, 2, 3]`,
    tip: 'Extremely useful for converting DOM NodeLists (from querySelectorAll) into real arrays.'
  },
  {
    id: 23,
    level: 'easy',
    title: 'The delete Operator',
    shortDesc: 'Removing properties.',
    theory: 'The `delete` operator removes a property from an object. If successful, it returns `true`.',
    logic: 'It does not free up memory immediately (GC handles that) and it cannot delete variables declared with var/let/const.',
    code: `const obj = { a: 1 };
delete obj.a;
console.log(obj.a); // undefined`,
    tip: 'Using `delete` can affect performance by changing the hidden class of the object in V8.'
  },
  {
    id: 24,
    level: 'easy',
    title: 'break vs continue',
    shortDesc: 'Loop control.',
    theory: '`break` terminates the loop entirely and moves code execution to after the loop. `continue` skips the *current* iteration and moves to the next one.',
    logic: 'Use `break` to search for a value and stop; use `continue` to filter out specific values.',
    code: `for (let i=0; i<3; i++) {
  if (i === 1) continue;
  console.log(i);
} // Output: 0, 2`,
    tip: 'Can also be used with labeled statements for nested loops.'
  },
  {
    id: 25,
    level: 'easy',
    title: 'Math Object',
    shortDesc: 'Mathematical operations.',
    theory: 'JS provides a built-in `Math` object for complex calculations. Common methods: `Math.floor` (round down), `Math.ceil` (round up), `Math.round` (nearest integer).',
    logic: 'It is not a constructor; all properties and methods are static.',
    code: `console.log(Math.max(1, 5, 2)); // 5
console.log(Math.random()); // Random 0 to <1`,
    tip: '`Math.random()` is not cryptographically secure.'
  },
  {
    id: 26,
    level: 'easy',
    title: 'String.includes()',
    shortDesc: 'Checking for substrings.',
    theory: 'A case-sensitive method that determines whether one string may be found within another string, returning true or false.',
    logic: 'A more readable replacement for `str.indexOf(search) !== -1`.',
    code: `const str = "Hello World";
console.log(str.includes("World")); // true`,
    tip: 'Also works on Arrays: `[1, 2, 3].includes(2)` returns true.'
  },
  {
    id: 27,
    level: 'easy',
    title: 'Global `isFinite`',
    shortDesc: 'Checking for valid numbers.',
    theory: 'Determines whether the passed value is a finite number. It first converts the value to a number.',
    logic: 'It returns false for `Infinity`, `-Infinity`, or `NaN`.',
    code: `console.log(isFinite(100)); // true
console.log(isFinite("100")); // true (coerced)
console.log(isFinite(Infinity)); // false`,
    tip: 'Use `Number.isFinite()` for a stricter check (no coercion).'
  },
  {
    id: 28,
    level: 'easy',
    title: 'Object.assign()',
    shortDesc: 'Merging objects.',
    theory: 'Copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.',
    logic: 'Often used for shallow cloning or merging settings.',
    code: `const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }`,
    tip: 'Keys in later sources overwrite earlier ones with the same name.'
  },
  {
    id: 29,
    level: 'easy',
    title: 'Date Object',
    shortDesc: 'Handling time.',
    theory: '`Date` instances represent a single moment in time in a platform-independent format. Internally, it is the number of milliseconds since Jan 1, 1970 (Unix Epoch).',
    logic: 'Months are 0-indexed (0 = Jan, 11 = Dec), which is a common source of bugs.',
    code: `const now = new Date();
console.log(now.getFullYear());`,
    tip: 'For complex date math, consider libraries like date-fns or Luxon.'
  },
  {
    id: 30,
    level: 'easy',
    title: 'The `class` Keyword',
    shortDesc: 'Syntactic sugar for prototypes.',
    theory: 'Introduced in ES6 to provide a cleaner syntax for creating objects and dealing with inheritance. Under the hood, it still uses prototypal inheritance.',
    logic: 'Classes are special functions. Unlike functions, class declarations are not hoisted.',
    code: `class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}`,
    tip: 'Classes implicitly run in strict mode.'
  },
  {
    id: 31,
    level: 'easy',
    title: 'Object.keys() and Object.values()',
    shortDesc: 'Extracting object data.',
    theory: '`Object.keys(obj)` returns an array of the object\'s property names (keys). `Object.values(obj)` returns an array of the values.',
    logic: 'These are essential for iterating over objects since you cannot use a standard `for` loop on an object directly.',
    code: `const user = { name: 'Ali', age: 30 };
console.log(Object.keys(user)); // ['name', 'age']`,
    tip: 'The order of keys is generally consistent, but not strictly guaranteed in older browsers.'
  },
  {
    id: 32,
    level: 'easy',
    title: 'String.trim()',
    shortDesc: 'Cleaning whitespace.',
    theory: 'The `trim()` method removes whitespace from both ends of a string. `trimStart()` and `trimEnd()` remove from specific ends.',
    logic: 'Does not affect the original string; returns a new one.',
    code: `const input = "   hello   ";
console.log(input.trim()); // "hello"`,
    tip: 'Crucial for sanitizing user input from form fields.'
  },
  {
    id: 33,
    level: 'easy',
    title: 'Array.concat()',
    shortDesc: 'Merging arrays.',
    theory: 'The `concat()` method is used to merge two or more arrays. It does not change the existing arrays but instead returns a new array.',
    logic: 'A classic alternative to the modern Spread Operator (`...`).',
    code: `const a = [1];
const b = [2];
const c = a.concat(b); // [1, 2]`,
    tip: 'It creates a shallow copy of the arrays being merged.'
  },
  {
    id: 34,
    level: 'easy',
    title: 'Boolean() Function',
    shortDesc: 'Explicit conversion.',
    theory: 'The `Boolean()` function allows you to explicitly convert a value to a boolean (`true` or `false`).',
    logic: 'It follows the same truthy/falsy logic as if-statements. `!!value` is a shorthand for this.',
    code: `console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true`,
    tip: 'Useful for filtering arrays: `arr.filter(Boolean)` removes empty values.'
  },
  {
    id: 35,
    level: 'easy',
    title: 'Math.floor() vs parseInt()',
    shortDesc: 'Integer conversion nuance.',
    theory: '`Math.floor` rounds down to the nearest integer. `parseInt` parses a string and stops at the first non-numeric character.',
    logic: 'They behave differently with negative numbers: `Math.floor(-5.5)` is -6, but `parseInt(-5.5)` is -5 (truncates decimal).',
    code: `console.log(Math.floor(5.9)); // 5
console.log(parseInt("5.9px")); // 5`,
    tip: 'Use `parseInt` for strings, `Math.floor` for numbers.'
  },
  {
    id: 36,
    level: 'easy',
    title: 'Array.reverse()',
    shortDesc: 'Reversing order.',
    theory: 'The `reverse()` method reverses an array *in place*. The first array element becomes the last, and the last becomes the first.',
    logic: 'Because it mutates the original array, it can cause bugs if you intended to keep the original order.',
    code: `const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]`,
    tip: 'To reverse without mutation, use `[...arr].reverse()`.'
  },
  {
    id: 37,
    level: 'easy',
    title: 'Console Methods',
    shortDesc: 'Debugging beyond log.',
    theory: 'Besides `log`, the console object has `warn` (yellow warning), `error` (red error), and `table` (displays data as a table).',
    logic: 'Using different levels helps filter logs in the DevTools console.',
    code: `const users = [{id:1}, {id:2}];
console.table(users); // Displays a neat table`,
    tip: '`console.time()` and `console.timeEnd()` can measure code execution speed.'
  },
  {
    id: 38,
    level: 'easy',
    title: 'DOMContentLoaded vs load',
    shortDesc: 'Page readiness.',
    theory: '`DOMContentLoaded` fires when HTML is parsed and the DOM is ready (fast). `window.onload` fires when everything (images, CSS) is fully loaded (slow).',
    logic: 'Usually, you want to run JS as soon as the DOM is ready, not wait for all images.',
    code: `document.addEventListener('DOMContentLoaded', initApp);`,
    tip: 'If your script tag has `defer`, it automatically runs at `DOMContentLoaded` time.'
  },
  {
    id: 39,
    level: 'easy',
    title: 'Attributes vs Properties',
    shortDesc: 'HTML vs DOM.',
    theory: 'Attributes are defined in HTML (initial state). Properties are in the DOM object (current state).',
    logic: 'Changing the value of an input changes the Property `value`, but the Attribute `value` remains the original default.',
    code: `input.setAttribute('value', 'default');
input.value = 'current';
// Attribute is still 'default'`,
    tip: 'Always use properties (`el.checked`, `el.value`) for current user interaction states.'
  },
  {
    id: 40,
    level: 'easy',
    title: 'Infinity',
    shortDesc: 'Exceeding number limits.',
    theory: '`Infinity` is a numeric value representing positive infinity. `-Infinity` represents negative infinity.',
    logic: 'Generated by dividing by zero or calculating numbers too large for JS to handle.',
    code: `console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity`,
    tip: '`1/Infinity` equals `0`.'
  },
  {
    id: 41,
    level: 'easy',
    title: 'window.location',
    shortDesc: 'Getting URL details.',
    theory: 'The `location` object contains information about the current URL. It can be used to redirect the user or parse the protocol, hostname, and path.',
    logic: 'Assigning a new string to `window.location.href` forces the browser to load that new page.',
    code: `console.log(window.location.hostname); // "google.com"
window.location.href = 'https://example.com'; // Redirects`,
    tip: '`location.reload()` refreshes the current page.'
  },
  {
    id: 42,
    level: 'easy',
    title: 'String.split()',
    shortDesc: 'String to Array.',
    theory: 'The `split()` method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.',
    logic: 'The opposite of `Array.join()`. It splits based on a provided separator/delimiter.',
    code: `const str = "HTML,CSS,JS";
const arr = str.split(","); // ["HTML", "CSS", "JS"]`,
    tip: '`split("")` (empty string) splits every character into an array item.'
  },
  {
    id: 43,
    level: 'easy',
    title: 'alert, confirm, prompt',
    shortDesc: 'Blocking UI popups.',
    theory: 'Built-in browser methods for interaction. `alert` shows a message. `confirm` asks Yes/No (returns boolean). `prompt` asks for text input.',
    logic: 'These are synchronous and block the main thread, stopping all code execution until the user clicks.',
    code: `if (confirm("Delete item?")) {
  deleteItem();
}`,
    tip: 'Modern UX avoids these in favor of custom non-blocking modals (HTML dialogs).'
  },
  {
    id: 44,
    level: 'medium',
    title: 'Closures',
    shortDesc: 'Functions remembering their environment.',
    theory: 'A closure is a function bundled together with references to its surrounding state (lexical environment). It gives you access to an outer function’s scope from an inner function.',
    logic: 'Even after the outer function has finished executing, the inner function retains access to the outer variables.',
    code: `function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
const counter = outer();
console.log(counter()); // 1`,
    tip: 'Closures are commonly used for data privacy and creating function factories.'
  },
  {
    id: 45,
    level: 'medium',
    title: 'The `this` Keyword',
    shortDesc: 'Dynamic context reference.',
    theory: 'The value of `this` is determined by *how* a function is called (execution context). In the global scope, it is window. In a method, it is the object.',
    logic: 'If a function is called as a method `obj.func()`, `this` is `obj`. If called as a standalone function `func()`, `this` is global (or undefined in strict mode).',
    code: `const obj = {
  name: 'JS',
  print: function() { console.log(this.name); }
};
obj.print(); // 'JS'`,
    tip: 'Arrow functions do not have their own `this`; they inherit it from the parent scope.'
  },
  {
    id: 46,
    level: 'medium',
    title: 'Event Bubbling & Capturing',
    shortDesc: 'Propagation of events in DOM.',
    theory: 'Events propagate in two phases: Capturing (Root -> Target) and Bubbling (Target -> Root). By default, event listeners trigger during the Bubbling phase.',
    logic: 'You can stop propagation using `e.stopPropagation()` effectively isolating the event.',
    code: `div.addEventListener('click', () => {
  console.log('Bubbling');
}, false); // false = bubbling (default)`,
    tip: 'Event Delegation utilizes bubbling to handle events on parent elements for multiple children.'
  },
  {
    id: 47,
    level: 'medium',
    title: 'Call, Apply, Bind',
    shortDesc: 'Explicit binding of `this`.',
    theory: 'These methods allow you to manually set the `this` context for a function. `call` takes args individually, `apply` takes an array of args, and `bind` returns a new function with `this` permanently set.',
    logic: 'Use these when borrowing methods from one object to use on another.',
    code: `function say(greeting) { console.log(greeting, this.name); }
const p = { name: 'Dev' };
say.call(p, 'Hello'); // "Hello Dev"`,
    tip: '`bind` is often used in React class components or partial application.'
  },
  {
    id: 48,
    level: 'medium',
    title: 'Promises',
    shortDesc: 'Handling asynchronous operations.',
    theory: 'A Promise is an object representing the eventual completion (or failure) of an async operation. It has three states: Pending, Fulfilled, Rejected.',
    logic: 'Used to avoid "Callback Hell" by chaining .then() and .catch().',
    code: `const p = new Promise((resolve) => setTimeout(resolve, 1000, 'Done'));
p.then(data => console.log(data));`,
    tip: 'Async/Await is syntactic sugar over Promises.'
  },
  {
    id: 49,
    level: 'medium',
    title: 'Map vs Filter vs Reduce',
    shortDesc: 'High Order Array Methods.',
    theory: '`map` transforms every element. `filter` selects a subset of elements. `reduce` accumulates all elements into a single value.',
    logic: 'All three are immutable methods; they return a new array/value and do not modify the original.',
    code: `const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => acc + curr, 0); // 6`,
    tip: 'Reduce is the most powerful array method; you can implement map and filter using reduce.'
  },
  {
    id: 50,
    level: 'medium',
    title: 'IIFE (Immediately Invoked Function Expression)',
    shortDesc: 'Self-executing functions.',
    theory: 'An IIFE is a function that runs as soon as it is defined. It is wrapped in parentheses to treat it as an expression, followed by `()` to invoke it.',
    logic: 'Historically used to create a private scope and avoid polluting the global namespace.',
    code: `(function() {
  var secret = "123";
})();
console.log(secret); // Error`,
    tip: 'Modern modules (ES6) have largely replaced the need for IIFEs for scoping.'
  },
  {
    id: 51,
    level: 'medium',
    title: 'Callback Queue vs Microtask Queue',
    shortDesc: 'Task priority in Event Loop.',
    theory: 'The Event Loop manages async execution. Promises go to the Microtask Queue. `setTimeout` goes to the Callback (Macrotask) Queue.',
    logic: 'The Microtask Queue has higher priority. It is fully emptied before the Event Loop moves to the Callback Queue.',
    code: `setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
// Output: Promise, then Timeout`,
    tip: 'Starving the microtask queue (e.g., infinite recursive promises) blocks the UI.'
  },
  {
    id: 52,
    level: 'medium',
    title: 'Pass by Value vs Reference',
    shortDesc: 'How data is passed to functions.',
    theory: 'Primitives are passed by value (copy). Objects/Arrays are passed by reference (memory address).',
    logic: 'Modifying an object property inside a function will affect the original object outside.',
    code: `function mod(obj) { obj.x = 10; }
const val = {x: 1};
mod(val);
console.log(val.x); // 10`,
    tip: 'Use spread operator `...` or `structuredClone` to break references.'
  },
  {
    id: 53,
    level: 'medium',
    title: 'Destructuring Assignment',
    shortDesc: 'Unpacking values from arrays/objects.',
    theory: 'A syntax allowing you to unpack values from arrays or properties from objects into distinct variables.',
    logic: 'It provides a cleaner way to extract data without multiple lines of assignment code.',
    code: `const user = { name: 'Bob', age: 25 };
const { name, age } = user;`,
    tip: 'You can also rename variables during destructuring: `const { name: userName } = user`.'
  },
  {
    id: 54,
    level: 'medium',
    title: 'Optional Chaining (?.)',
    shortDesc: 'Safe property access.',
    theory: 'The `?.` operator accesses a property deep in an object chain. If a reference is nullish (null or undefined), the expression short-circuits and returns undefined instead of throwing an error.',
    logic: 'Reduces the need for `if (obj && obj.child && obj.child.val)` checks.',
    code: `const user = {};
console.log(user?.address?.street); // undefined (no error)`,
    tip: 'You can also use it with functions: `obj.method?.()`.'
  },
  {
    id: 55,
    level: 'medium',
    title: 'Nullish Coalescing (??)',
    shortDesc: 'Better default values.',
    theory: 'The `??` operator returns the right-hand side operand only if the left-hand side is `null` or `undefined`.',
    logic: 'Unlike `||` (OR), it does not replace other falsy values like `0` or `false` or `""`.',
    code: `const count = 0;
console.log(count || 10); // 10 (Bad if 0 is valid)
console.log(count ?? 10); // 0 (Correct)`,
    tip: 'Use `??` when 0 or empty strings are valid values for your variable.'
  },
  {
    id: 56,
    level: 'medium',
    title: 'Rest Parameter',
    shortDesc: 'Gathering arguments.',
    theory: 'The `...` syntax in function definitions collects all remaining arguments into an array.',
    logic: 'It replaces the legacy `arguments` object and is easier to work with since it is a real array.',
    code: `function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
sum(1, 2, 3, 4); // 10`,
    tip: 'The rest parameter must always be the last parameter in the definition.'
  },
  {
    id: 57,
    level: 'medium',
    title: 'Set Object',
    shortDesc: 'Unique values collection.',
    theory: 'A `Set` is a collection of values where each value must be unique. Duplicates are automatically removed.',
    logic: 'It is the most efficient way to remove duplicates from an array.',
    code: `const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)]; // [1, 2, 3]`,
    tip: 'Sets have methods like `.has()`, `.add()`, and `.delete()`.'
  },
  {
    id: 58,
    level: 'medium',
    title: 'Object.freeze vs Object.seal',
    shortDesc: 'Immutability levels.',
    theory: '`Object.freeze()` prevents adding, removing, or modifying properties. `Object.seal()` prevents adding/removing but allows modifying existing property values.',
    logic: 'Freeze is the highest level of immutability for an object.',
    code: `const obj = { val: 10 };
Object.freeze(obj);
obj.val = 20; // Fails silently or error in strict mode`,
    tip: 'Both methods are shallow; nested objects are still mutable.'
  },
  {
    id: 59,
    level: 'medium',
    title: 'forEach vs map',
    shortDesc: 'Iterating arrays.',
    theory: '`forEach` executes a function for each element but returns `undefined`. `map` executes a function and returns a *new array* with the results.',
    logic: 'Use `map` when you want to transform data. Use `forEach` when you want to perform side effects (like logging).',
    code: `const arr = [1, 2];
const doubled = arr.map(x => x * 2); // [2, 4]
arr.forEach(x => console.log(x));`,
    tip: 'You cannot chain `.filter()` or `.reduce()` after a `forEach` because it returns nothing.'
  },
  {
    id: 60,
    level: 'medium',
    title: 'Modules (Import/Export)',
    shortDesc: 'Sharing code between files.',
    theory: 'ES6 Modules allow splitting code into separate files. `export` exposes variables/functions; `import` brings them in.',
    logic: 'Modules run in strict mode by default and help organize large codebases.',
    code: `// lib.js
export const pi = 3.14;
// main.js
import { pi } from './lib.js';`,
    tip: 'You can have one `export default` per file, but multiple named exports.'
  },
  {
    id: 61,
    level: 'medium',
    title: 'The arguments Object',
    shortDesc: 'Legacy argument access.',
    theory: '`arguments` is an array-like object available inside traditional functions (not arrow functions) containing the passed arguments.',
    logic: 'It is useful when you don\'t know how many arguments will be passed, but Rest Parameters are preferred now.',
    code: `function show() {
  console.log(arguments[0]);
}
show('test'); // 'test'`,
    tip: 'It lacks array methods like `map`. You must convert it using `Array.from(arguments)`.'
  },
  {
    id: 62,
    level: 'medium',
    title: 'Try...Catch...Finally',
    shortDesc: 'Handling errors.',
    theory: '`try` blocks contain code that might throw an error. `catch` handles the error. `finally` executes code regardless of the outcome (success or error).',
    logic: 'Crucial for preventing the entire application from crashing due to one error.',
    code: `try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Cleanup");
}`,
    tip: 'In ES2019, the catch parameter `(e)` is optional.'
  },
  {
    id: 63,
    level: 'medium',
    title: 'Symbol Type',
    shortDesc: 'Unique identifiers.',
    theory: '`Symbol` is a primitive type that is guaranteed to be unique. Even if two symbols have the same description, they are not equal.',
    logic: 'Often used for object property keys to avoid name collisions in libraries.',
    code: `const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false`,
    tip: 'Symbols are ignored by `for...in` loops and `JSON.stringify`.'
  },
  {
    id: 64,
    level: 'medium',
    title: 'Getters and Setters',
    shortDesc: 'Computed properties.',
    theory: 'The `get` and `set` keywords allow you to define functions that are called when a property is accessed or assigned.',
    logic: 'Allows for validation or internal logic when changing a property without changing the external syntax `obj.prop`.',
    code: `const obj = {
  val: 0,
  get num() { return this.val; },
  set num(x) { this.val = x * 2; }
};
obj.num = 5;
console.log(obj.num); // 10`,
    tip: 'Commonly used in Libraries/Frameworks to trigger updates when state changes.'
  },
  {
    id: 65,
    level: 'medium',
    title: 'Static Methods',
    shortDesc: 'Methods for the class, not instances.',
    theory: 'The `static` keyword defines a method for a class rather than instances of the class. They are called on the class itself.',
    logic: 'Utility functions that don\'t need the state of a specific instance belong here.',
    code: `class Calc {
  static add(a, b) { return a + b; }
}
// const c = new Calc(); c.add() -> Error
console.log(Calc.add(1, 1)); // 2`,
    tip: '`Math` is a good example of an object comprised entirely of static-like methods.'
  },
  {
    id: 66,
    level: 'medium',
    title: 'Target vs CurrentTarget',
    shortDesc: 'Event accuracy.',
    theory: '`e.target` is the element that *triggered* the event (e.g., the specific button clicked). `e.currentTarget` is the element that the event listener is *attached* to.',
    logic: 'These differ when event bubbling occurs.',
    code: `parent.addEventListener('click', (e) => {
  // User clicked Child, but listener is on Parent
  console.log(e.target); // Child
  console.log(e.currentTarget); // Parent
});`,
    tip: 'Use `currentTarget` if you need the element context of your listener code.'
  },
  {
    id: 67,
    level: 'medium',
    title: 'Array.prototype.flat()',
    shortDesc: 'Flattening nested arrays.',
    theory: 'The `flat()` method creates a new array with all sub-array elements concatenated recursively up to the specified depth.',
    logic: 'Useful for cleaning up data structures.',
    code: `const arr = [1, [2, [3]]];
console.log(arr.flat(2)); // [1, 2, 3]`,
    tip: 'Passing `Infinity` as the depth flattens arrays of any depth.'
  },
  {
    id: 68,
    level: 'medium',
    title: 'Object.create()',
    shortDesc: 'Custom prototypes.',
    theory: 'Creates a new object using an existing object as the prototype of the new object.',
    logic: 'It is the purest way to set up inheritance without constructor functions.',
    code: `const proto = { greet: function() { console.log('Hi'); } };
const obj = Object.create(proto);
obj.greet(); // 'Hi'`,
    tip: '`Object.create(null)` creates an object with no prototype (no toString, etc.).'
  },
  {
    id: 69,
    level: 'medium',
    title: 'The `fetch` API Nuance',
    shortDesc: 'Handling 404/500 errors.',
    theory: 'Unlike jQuery AJAX, a `fetch()` promise does *not* reject on HTTP error status (like 404 or 500). It only rejects on network failure.',
    logic: 'You must manually check `response.ok` or `response.status`.',
    code: `fetch(url).then(res => {
  if (!res.ok) throw new Error('HTTP Error');
  return res.json();
});`,
    tip: 'Always include a catch block for network errors (DNS, loss of signal).'
  },
  {
    id: 70,
    level: 'medium',
    title: 'ResizeObserver',
    shortDesc: 'Detecting element size changes.',
    theory: 'A performant way to monitor changes to the dimensions of an Element\'s content box or border box.',
    logic: 'Superior to attaching `window.onresize` because it works for specific elements (e.g., a text area expanding).',
    code: `const ro = new ResizeObserver(entries => {
  for (let entry of entries) console.log(entry.contentRect.width);
});
ro.observe(document.querySelector('div'));`,
    tip: 'Essential for responsive container queries before CSS Container Queries existed.'
  },
  {
    id: 71,
    level: 'medium',
    title: 'History API',
    shortDesc: 'SPA Navigation.',
    theory: 'Allows manipulation of the browser session history (back/forward buttons) without reloading the page.',
    logic: '`pushState` adds an entry; `replaceState` modifies the current entry. `popstate` event detects back button clicks.',
    code: `history.pushState({page: 1}, "title", "?page=1");
// URL changes, page does not reload`,
    tip: 'This is the backbone of routers in React, Vue, and Angular.'
  },
  {
    id: 72,
    level: 'medium',
    title: 'FormData Object',
    shortDesc: 'Handling form submissions.',
    theory: 'Constructs a set of key/value pairs representing form fields and their values.',
    logic: 'It automatically sets the correct encoding type (multipart/form-data) for file uploads.',
    code: `const data = new FormData(formElement);
fetch('/api', { method: 'POST', body: data });`,
    tip: 'You cannot log it directly `console.log(formData)`. You must loop keys/values to see content.'
  },
  {
    id: 73,
    level: 'medium',
    title: 'Dataset Attributes',
    shortDesc: 'Custom HTML data.',
    theory: 'HTML elements allows `data-*` attributes. In JS, these are accessed via the `dataset` property (camelCase converted).',
    logic: 'A standard way to store extra data on DOM nodes.',
    code: `// <div id="user" data-user-id="123" data-role="admin"></div>
const el = document.getElementById('user');
console.log(el.dataset.userId); // "123"`,
    tip: 'Reading from dataset is slower than reading from a JS object cache.'
  },
  {
    id: 74,
    level: 'medium',
    title: 'Array.some() and Array.every()',
    shortDesc: 'Conditional array checks.',
    theory: '`some()` returns true if *at least one* element passes the test. `every()` returns true only if *all* elements pass.',
    logic: 'Returns a boolean immediately once the condition is met (short-circuiting).',
    code: `const arr = [1, 2, 3];
console.log(arr.some(x => x > 2)); // true
console.log(arr.every(x => x > 2)); // false`,
    tip: 'Useful for validation (e.g., checking if every form field is filled).'
  },
  {
    id: 75,
    level: 'medium',
    title: 'Object.entries()',
    shortDesc: 'Key-value pairs.',
    theory: 'Returns an array of a given object\'s own enumerable string-keyed property `[key, value]` pairs.',
    logic: 'Perfect for iterating over objects using `for...of` or converting objects to Maps.',
    code: `const obj = { a: 1, b: 2 };
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}`,
    tip: '`Object.fromEntries(arr)` does the reverse (converts array pairs back to an object).'
  },
  {
    id: 76,
    level: 'medium',
    title: 'Regular Expressions (RegExp)',
    shortDesc: 'Pattern matching.',
    theory: 'Objects that describe a pattern of characters. Used for validation, searching, and replacing text.',
    logic: 'Defined between slashes `/pattern/flags`. Common flags: `g` (global), `i` (case-insensitive).',
    code: `const regex = /[a-z]+/i;
console.log(regex.test("Hello")); // true`,
    tip: '`.test()` returns boolean, `.exec()` returns match details.'
  },
  {
    id: 77,
    level: 'medium',
    title: 'JSON.stringify Replacer',
    shortDesc: 'Filtering JSON output.',
    theory: '`JSON.stringify` accepts a second argument called a "replacer" (function or array) to filter or transform the values being stringified.',
    logic: 'Allows you to hide sensitive fields like passwords when sending data.',
    code: `const user = { name: 'Dev', pass: '123' };
console.log(JSON.stringify(user, ['name'])); // '{"name":"Dev"}'`,
    tip: 'The third argument is "space" for pretty-printing: `JSON.stringify(obj, null, 2)`.'
  },
  {
    id: 78,
    level: 'medium',
    title: 'Element.closest()',
    shortDesc: 'Upward DOM traversal.',
    theory: 'Traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.',
    logic: 'Great for event delegation to find which specific container was clicked.',
    code: `// Click happened on a <span> inside a <button>
const btn = e.target.closest('button');`,
    tip: 'Returns `null` if no match is found.'
  },
  {
    id: 79,
    level: 'medium',
    title: 'classList API',
    shortDesc: 'Managing CSS classes.',
    theory: 'A cleaner way to manipulate classes than `className`. Methods: `add`, `remove`, `toggle`, `contains`.',
    logic: 'Prevents string manipulation errors when adding/removing multiple classes.',
    code: `div.classList.add('active');
div.classList.toggle('hidden'); // Adds if missing, removes if present`,
    tip: '`toggle` accepts a second boolean argument to force add or remove: `toggle("cls", condition)`.'
  },
  {
    id: 80,
    level: 'medium',
    title: 'URL and URLSearchParams',
    shortDesc: 'Parsing Query Strings.',
    theory: 'The `URL` interface parses a URL string. `URLSearchParams` provides utility methods to work with the query string (e.g., `?search=js`).',
    logic: 'Replaces complex Regex for extracting URL parameters.',
    code: `const url = new URL('https://site.com?q=hello');
console.log(url.searchParams.get('q')); // "hello"`,
    tip: 'You can also use `.set()` and `.toString()` to build URLs programmatically.'
  },
  {
    id: 81,
    level: 'medium',
    title: 'instanceof Operator',
    shortDesc: 'Checking inheritance.',
    theory: 'Tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object.',
    logic: 'Checks if an object is an instance of a specific class or parent class.',
    code: `class Car {}
const c = new Car();
console.log(c instanceof Car); // true
console.log(c instanceof Object); // true`,
    tip: 'It may fail if the object comes from a different iframe/window execution context.'
  },
  {
    id: 82,
    level: 'medium',
    title: 'void Operator',
    shortDesc: 'Evaluating to undefined.',
    theory: 'The `void` operator evaluates an expression and then returns `undefined`.',
    logic: 'Historically used in `<a href="javascript:void(0)">` to prevent page navigation.',
    code: `const x = void(1 + 1);
console.log(x); // undefined`,
    tip: 'Rarely used in modern JS logic, but good to know for legacy code reading.'
  },
  {
    id: 83,
    level: 'medium',
    title: 'Navigator Object',
    shortDesc: 'Browser info.',
    theory: 'Contains information about the browser (user agent), clipboard, geolocation, and device hardware.',
    logic: 'Used for feature detection or getting user location.',
    code: `if (navigator.onLine) {
  console.log("You are online");
}`,
    tip: '`navigator.clipboard.writeText()` is the modern way to copy to clipboard.'
  },
  {
    id: 84,
    level: 'medium',
    title: 'DocumentFragment',
    shortDesc: 'Performance optimization.',
    theory: 'A lightweight container that can hold DOM nodes. It is not part of the active document tree.',
    logic: 'Appending items to a Fragment and then appending the Fragment to the DOM triggers only *one* reflow, instead of one per item.',
    code: `const frag = document.createDocumentFragment();
items.forEach(item => frag.appendChild(createNode(item)));
document.body.appendChild(frag);`,
    tip: 'Use this whenever adding lists or tables dynamically.'
  },
  {
    id: 85,
    level: 'medium',
    title: 'Object.is()',
    shortDesc: 'Stricter equality.',
    theory: 'Determines if two values are the same value. It is similar to `===` but treats `NaN` as equal to `NaN` and `+0` as different from `-0`.',
    logic: 'Useful for edge cases where strict equality `===` falls short.',
    code: `console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true`,
    tip: 'React uses `Object.is` for state comparison in hooks.'
  },
  {
    id: 86,
    level: 'medium',
    title: 'Event.preventDefault()',
    shortDesc: 'Stopping default behavior.',
    theory: 'Tells the User Agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.',
    logic: 'Most commonly used to stop forms from submitting (reloading the page) or links from navigating.',
    code: `form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle AJAX submission instead
});`,
    tip: 'It is different from `stopPropagation`, which stops bubbling.'
  },
  {
    id: 87,
    level: 'advanced',
    title: 'Prototypal Inheritance',
    shortDesc: 'How objects share properties.',
    theory: 'JS objects have a hidden property `[[Prototype]]`. If you access a property, JS checks the object, then its prototype, then the prototype\'s prototype, forming a chain.',
    logic: 'This allows memory efficiency by sharing methods across instances rather than duplicating them.',
    code: `function Dog() {}
Dog.prototype.bark = function() { console.log('Woof'); };
const d = new Dog();
d.bark(); // Found on prototype`,
    tip: '`__proto__` is the historical getter for the prototype, but `Object.getPrototypeOf()` is preferred.'
  },
  {
    id: 88,
    level: 'advanced',
    title: 'Currying',
    shortDesc: 'Transforming function logic.',
    theory: 'Currying is transforming a function that takes multiple arguments `f(a, b, c)` into a sequence of functions that each take a single argument `f(a)(b)(c)`.',
    logic: 'Useful for partial application, where you fix some arguments and reuse the returned function.',
    code: `const add = a => b => a + b;
const add5 = add(5);
console.log(add5(10)); // 15`,
    tip: 'Libraries like Lodash provide generic curry converters.'
  },
  {
    id: 89,
    level: 'advanced',
    title: 'Generators',
    shortDesc: 'Functions that can pause.',
    theory: 'Generator functions (marked with `function*`) can return multiple values over time, pausing execution with `yield` and resuming when `.next()` is called.',
    logic: 'They allow for custom iterators and complex async flow control.',
    code: `function* gen() { yield 1; yield 2; }
const i = gen();
console.log(i.next().value); // 1`,
    tip: 'Redux Saga uses generators heavily to handle side effects.'
  },
  {
    id: 90,
    level: 'advanced',
    title: 'Proxy and Reflect',
    shortDesc: 'Metaprogramming in JS.',
    theory: '`Proxy` allows you to intercept and customize basic operations (like property lookup, assignment) on objects. `Reflect` provides standard methods to perform those operations.',
    logic: 'You can use Proxies for validation, logging, or creating reactive data structures (like in Vue 3).',
    code: `const handler = { get: (target, prop) => prop in target ? target[prop] : 'Not Found' };
const p = new Proxy({}, handler);
console.log(p.a); // 'Not Found'`,
    tip: 'Proxies impose a slight performance overhead; use them only when necessary.'
  },
  {
    id: 91,
    level: 'advanced',
    title: 'Debounce vs Throttle',
    shortDesc: 'Rate limiting function calls.',
    theory: 'Debouncing ensures a function is only called once after a specific pause time. Throttling ensures a function is called at most once every specified interval.',
    logic: 'Debounce is good for Search Input (wait for typing to stop). Throttle is good for Window Resize (update layout every 100ms).',
    code: `// Debounce Concept
let timer;
const debounce = (fn) => {
  clearTimeout(timer);
  timer = setTimeout(fn, 300);
}`,
    tip: 'These are essential for performance optimization in event-heavy apps.'
  },
  {
    id: 92,
    level: 'advanced',
    title: 'WeakMap and WeakSet',
    shortDesc: 'Garbage Collection friendly collections.',
    theory: '`WeakMap` keys must be objects and are held "weakly". If the object is not referenced elsewhere, it can be garbage collected even if it exists in the WeakMap.',
    logic: 'Prevents memory leaks when associating data with DOM nodes or objects that might be deleted.',
    code: `let obj = {};
const wm = new WeakMap();
wm.set(obj, 'metadata');
obj = null; // The entry in wm is now eligible for GC`,
    tip: 'They are not iterable (cannot loop over them) because their content is non-deterministic (depends on GC).'
  },
  {
    id: 93,
    level: 'advanced',
    title: 'Service Workers',
    shortDesc: 'Running scripts in background.',
    theory: 'Service Workers act as proxy servers between web apps, the browser, and the network. They enable Offline capabilities, Push Notifications, and Background Sync.',
    logic: 'They run on a separate thread from the main JS execution, so they cannot access the DOM directly.',
    code: `navigator.serviceWorker.register('/sw.js').then(reg => console.log('SW Registered'));`,
    tip: 'Essential for PWA (Progressive Web App) functionality.'
  },
  {
    id: 94,
    level: 'advanced',
    title: 'Event Loop: Macrotasks vs Microtasks vs Render',
    shortDesc: 'Deep dive into runtime timing.',
    theory: 'The browser tries to render changes to the UI essentially between the microtask queue empty state and the next macrotask. `requestAnimationFrame` runs before the repaint.',
    logic: 'To create smooth animations, use `requestAnimationFrame`. To process logic immediately after a promise, use microtasks.',
    code: `requestAnimationFrame(() => console.log('Paint'));
Promise.resolve().then(() => console.log('Micro'));`,
    tip: 'Blocking the main thread for >50ms results in "Long Tasks" and perceived lag.'
  },
  {
    id: 95,
    level: 'advanced',
    title: 'Function Composition (Pipe)',
    shortDesc: 'Combining functions mathematically.',
    theory: 'Composition is the act of combining functions where the output of one becomes the input of the next. `f(g(x))`',
    logic: 'It encourages cleaner code by building complex logic out of small, reusable, pure functions.',
    code: `const compose = (f, g) => x => f(g(x));
const double = x => x * 2;
const add1 = x => x + 1;
const val = compose(double, add1)(2); // (2+1)*2 = 6`,
    tip: 'Functional programming relies heavily on composition.'
  },
  {
    id: 96,
    level: 'advanced',
    title: 'Deep Copy vs Shallow Copy',
    shortDesc: 'Handling nested objects.',
    theory: 'Shallow copy (`...spread`, `Object.assign`) only copies the first level. Nested objects are still references. Deep copy duplicates the entire tree.',
    logic: 'A shallow copy of a nested object results in shared state deeper down, which causes bugs.',
    code: `const original = { a: { b: 1 } };
const shallow = { ...original };
const deep = structuredClone(original); // Modern deep copy`,
    tip: 'Avoid `JSON.parse(JSON.stringify(obj))` if the object contains Dates, Functions, or undefined, as data will be lost.'
  },
  {
    id: 97,
    level: 'advanced',
    title: 'Memoization',
    shortDesc: 'Caching function results.',
    theory: 'Memoization is an optimization technique where you cache the result of a function call based on its arguments. If the function is called again with the same args, the cached result is returned.',
    logic: 'Significantly speeds up recursive or expensive functions.',
    code: `const memo = {};
const fib = (n) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n-1) + fib(n-2);
}`,
    tip: 'React.memo() is a built-in implementation for React components.'
  },
  {
    id: 98,
    level: 'advanced',
    title: 'Intersection Observer',
    shortDesc: 'Efficient scroll detection.',
    theory: 'An API that asynchronously observes changes in the intersection of a target element with an ancestor or the viewport.',
    logic: 'Used for Lazy Loading images or "Infinite Scroll" without the performance cost of standard scroll event listeners.',
    code: `const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => console.log(entry.isIntersecting));
});
observer.observe(document.querySelector('#target'));`,
    tip: 'Always `unobserve` or `disconnect` observers when elements are removed to avoid memory leaks.'
  },
  {
    id: 99,
    level: 'advanced',
    title: 'Shadow DOM',
    shortDesc: 'Encapsulated DOM trees.',
    theory: 'Shadow DOM allows you to attach a hidden DOM tree to an element. Styles and scripts inside the Shadow DOM do not affect the main document, and vice versa.',
    logic: 'This is the core technology behind Web Components.',
    code: `const host = document.querySelector('#host');
const shadow = host.attachShadow({mode: 'open'});
shadow.innerHTML = '<p>I am isolated!</p>';`,
    tip: 'The `<video>` tag uses Shadow DOM internally to hide the play/pause controls implementation.'
  },
  {
    id: 100,
    level: 'advanced',
    title: 'Temporal Dead Zone (TDZ)',
    shortDesc: 'Variables before declaration.',
    theory: 'The TDZ is the time between entering a scope and the actual declaration of a `let` or `const` variable. Accessing the variable in this zone throws a ReferenceError.',
    logic: 'This prevents the accidental use of variables before they are initialized.',
    code: `// TDZ starts here
console.log(a); // ReferenceError
let a = 5; // TDZ ends here`,
    tip: '`var` does not have a TDZ; it just returns `undefined` due to hoisting.'
  },
  {
    id: 101,
    level: 'advanced',
    title: 'Iterators and Generators',
    shortDesc: 'Custom looping logic.',
    theory: 'An iterator is an object with a `next()` method returning `{value, done}`. Any object implementing `[Symbol.iterator]` can be used in `for...of` loops.',
    logic: 'Allows you to make custom objects loopable.',
    code: `const myIterable = {
  [Symbol.iterator]: function* () {
    yield 1; yield 2;
  }
};
for (let x of myIterable) console.log(x); // 1, 2`,
    tip: 'Arrays, Strings, and Sets have built-in iterators.'
  },
  {
    id: 102,
    level: 'advanced',
    title: 'Memory Leaks',
    shortDesc: 'Unreleased memory.',
    theory: 'A memory leak occurs when the browser cannot release memory for objects that are no longer needed. Common causes: Global variables, forgotten timers/intervals, and detached DOM nodes.',
    logic: 'In Single Page Applications, failing to clear intervals when a component unmounts is a major cause.',
    code: `// Leak example
setInterval(() => {
  // If this runs forever and references heavy data, it's a leak.
}, 1000);`,
    tip: 'Use Chrome DevTools "Memory" tab and "Heap Snapshots" to debug leaks.'
  },
  {
    id: 103,
    level: 'advanced',
    title: 'Web Workers',
    shortDesc: 'Multithreading in JS.',
    theory: 'JS is single-threaded, but Web Workers allow you to run scripts in background threads. They communicate with the main thread via messages.',
    logic: 'Use this for heavy computations (image processing, data sorting) to avoid freezing the UI.',
    code: `// main.js
const worker = new Worker('worker.js');
worker.postMessage('Start');
worker.onmessage = (e) => console.log(e.data);`,
    tip: 'Workers do not have access to the DOM or the `window` object.'
  },
  {
    id: 104,
    level: 'advanced',
    title: 'Thunk',
    shortDesc: 'Deferred calculation.',
    theory: 'A thunk is a function that wraps an expression to delay its evaluation. In Redux, "Redux Thunk" is middleware that allows action creators to return functions instead of objects.',
    logic: 'It is essential for handling async logic in state management.',
    code: `const add = (x, y) => x + y;
const thunk = () => add(5, 10);
// Logic runs only when thunk() is called`,
    tip: 'Thunks allow you to perform logic *before* dispatching an action to the store.'
  },
  {
    id: 105,
    level: 'advanced',
    title: 'Object.defineProperty',
    shortDesc: 'Fine-grained property control.',
    theory: 'This method defines a new property or modifies an existing one on an object, giving you control over enumerability, configurability, and writability.',
    logic: 'It is the underlying mechanism for getters, setters, and creating read-only properties.',
    code: `const obj = {};
Object.defineProperty(obj, 'id', {
  value: 42,
  writable: false // Read-only
});`,
    tip: 'Properties created this way are non-enumerable (hidden from loops) by default.'
  },
  {
    id: 106,
    level: 'advanced',
    title: 'Tail Call Optimization (TCO)',
    shortDesc: 'Recursion safety.',
    theory: 'TCO is a feature where the engine optimizes recursive calls if the recursive step is the *last* action in the function. It reuses the stack frame instead of creating a new one.',
    logic: 'It prevents "Maximum call stack size exceeded" errors in deep recursion.',
    code: `function fact(n, acc = 1) {
  if (n === 0) return acc;
  return fact(n - 1, n * acc); // Tail call
}`,
    tip: 'Safari is currently the only major browser that fully supports TCO.'
  },
  {
    id: 107,
    level: 'advanced',
    title: 'AbortController',
    shortDesc: 'Cancelling async tasks.',
    theory: 'A DOM API that allows you to abort one or more Web requests as and when desired.',
    logic: 'Passed as a signal to `fetch`. If `abort()` is called, the promise rejects with an AbortError.',
    code: `const controller = new AbortController();
fetch(url, { signal: controller.signal });
controller.abort(); // Cancels the request`,
    tip: 'Very useful for "Typeahead" search to cancel previous queries when the user keeps typing.'
  },
  {
    id: 108,
    level: 'advanced',
    title: 'Critical Rendering Path',
    shortDesc: 'Browser render steps.',
    theory: 'The sequence: DOM -> CSSOM -> Render Tree -> Layout (Reflow) -> Paint. JS blocks parsing unless async/defer is used.',
    logic: 'Modifying layout properties (width, left) causes Reflow (expensive). Modifying visual (color) causes Repaint (cheaper).',
    code: `// Bad: Reading then writing in a loop triggers "Layout Thrashing"
const w = box.offsetWidth;
box.style.width = (w + 1) + 'px';`,
    tip: 'Batch DOM reads and writes separately to avoid layout thrashing.'
  },
  {
    id: 109,
    level: 'advanced',
    title: 'Prototype Pollution',
    shortDesc: 'Security vulnerability.',
    theory: 'An attack where the attacker modifies the prototype of a base object (like `Object.prototype`). Since all objects inherit from this, the change affects the entire app.',
    logic: 'Often happens during recursive merges of JSON payloads.',
    code: `const payload = JSON.parse('{"__proto__": {"isAdmin": true}}');
// If merged unsafely, {} .isAdmin might become true everywhere`,
    tip: 'Prevent this by freezing prototypes or using `Object.create(null)`.'
  },
  {
    id: 110,
    level: 'advanced',
    title: 'Cross-Origin Resource Sharing (CORS)',
    shortDesc: 'Browser security policy.',
    theory: 'Browsers block requests to a different domain by default. The server must send specific headers (`Access-Control-Allow-Origin`) to allow the browser to read the response.',
    logic: 'CORS is a browser restriction, not a server one. The server actually sends the data, the browser hides it.',
    code: `// Error: No 'Access-Control-Allow-Origin' header is present...
// Fix: Server must whitelist your domain`,
    tip: 'For complex requests (PUT/DELETE), the browser sends a "Preflight" (OPTIONS) request first.'
  },
  {
    id: 111,
    level: 'advanced',
    title: 'Web Components',
    shortDesc: 'Native custom elements.',
    theory: 'A suite of technologies allowing you to define custom HTML tags `<my-widget>` with encapsulated code.',
    logic: 'Uses `customElements.define`, Shadow DOM, and HTML Templates.',
    code: `class MyEl extends HTMLElement {
  connectedCallback() { this.innerHTML = "Hi"; }
}
customElements.define('my-el', MyEl);`,
    tip: 'Unlike React components, these are standard browser features requiring no build step.'
  },
  {
    id: 112,
    level: 'advanced',
    title: 'requestIdleCallback',
    shortDesc: 'Background low-priority tasks.',
    theory: 'Schedules a function to run when the browser is "idle" (not processing high-priority events like input or animation).',
    logic: 'Ideal for analytics or data processing that shouldn\'t delay the UI.',
    code: `requestIdleCallback((deadline) => {
  while (deadline.timeRemaining() > 0) {
    doLowPrioWork();
  }
});`,
    tip: 'It is less precise than `requestAnimationFrame`.'
  },
  {
    id: 113,
    level: 'advanced',
    title: 'Atomics and SharedArrayBuffer',
    shortDesc: 'Thread-safe memory.',
    theory: '`SharedArrayBuffer` allows multiple Web Workers to share the same memory block. `Atomics` ensures that operations on that memory are correct and don\'t conflict.',
    logic: 'Enables high-performance parallel computing in JS.',
    code: `const buffer = new SharedArrayBuffer(1024);
Atomics.add(new Uint8Array(buffer), 0, 1);`,
    tip: 'Requires strict security headers (COOP/COEP) to be enabled in modern browsers.'
  },
  {
    id: 114,
    level: 'advanced',
    title: 'Intl API',
    shortDesc: 'Native Internationalization.',
    theory: 'A built-in namespace for formatting dates, numbers, lists, and currencies according to locale.',
    logic: 'Replaces the need for heavy libraries like Moment.js for formatting.',
    code: `const fmt = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(fmt.format(100)); // "$100.00"`,
    tip: 'It is highly optimized and localized by the browser itself.'
  },
  {
    id: 115,
    level: 'advanced',
    title: 'Function Currying vs Partial Application',
    shortDesc: 'Subtle functional difference.',
    theory: 'Currying takes a function with N args and turns it into N functions of 1 arg. Partial Application fixes *some* arguments and produces a function of fewer arguments.',
    logic: 'Currying: `f(a)(b)(c)`. Partial: `f(a, b)` (returns function waiting for c).',
    code: `// Partial Application via bind
const add = (a, b) => a + b;
const add5 = add.bind(null, 5);
console.log(add5(10)); // 15`,
    tip: 'Both techniques help create reusable, specific functions from general ones.'
  },
  {
    id: 116,
    level: 'advanced',
    title: 'Pure Functions',
    shortDesc: 'The heart of predictable code.',
    theory: 'A function is pure if: 1. It produces the same output for the same input (Idempotent). 2. It has no side effects (doesn\'t change external state).',
    logic: 'Pure functions are easier to test, debug, and parallelize.',
    code: `// Pure
const add = (a, b) => a + b;
// Impure
let c = 0;
const addImpure = (a) => c += a;`,
    tip: 'Redux reducers *must* be pure functions.'
  },
  {
    id: 117,
    level: 'advanced',
    title: 'BigInt',
    shortDesc: 'Huge integers.',
    theory: 'A primitive wrapper object used to represent integers larger than 2^53 - 1 (the limit of the standard `Number` type).',
    logic: 'Created by appending `n` to the end of an integer literal.',
    code: `const large = 9007199254740991n;
const next = large + 1n;
// You cannot mix BigInt and Number in math`,
    tip: 'Essential for high-precision IDs or financial calculations (though libraries are preferred for finance).'
  },
  {
    id: 118,
    level: 'advanced',
    title: 'Dynamic Imports',
    shortDesc: 'Code splitting.',
    theory: 'Standard `import` is static and must be at the top of the file. `import()` is a function that returns a promise, loading the module on demand.',
    logic: 'Reduces initial bundle size by loading heavy modules only when needed.',
    code: `if (userClicked) {
  import('./heavyModule.js').then(module => module.run());
}`,
    tip: 'This is the mechanism behind React.lazy() and router code-splitting.'
  },
  {
    id: 119,
    level: 'advanced',
    title: 'MutationObserver',
    shortDesc: 'Watching DOM changes.',
    theory: 'An API that provides the ability to watch for changes being made to the DOM tree (attributes, child nodes, or text).',
    logic: 'More efficient than polling the DOM with setInterval.',
    code: `const obs = new MutationObserver(mutations => console.log(mutations));
obs.observe(document.body, { childList: true, subtree: true });`,
    tip: 'Used heavily by browser extensions to inject code when pages update dynamically.'
  },
  {
    id: 120,
    level: 'advanced',
    title: 'queueMicrotask()',
    shortDesc: 'Manual microtask scheduling.',
    theory: 'Queues a microtask to be executed just before control returns to the event loop (before rendering).',
    logic: 'Same timing as `Promise.resolve().then()`, but clearer intent.',
    code: `console.log(1);
queueMicrotask(() => console.log(2));
console.log(3);
// Output: 1, 3, 2`,
    tip: 'Use this to ensure code runs asynchronously but as soon as possible.'
  },
  {
    id: 121,
    level: 'advanced',
    title: 'Performance API',
    shortDesc: 'High-precision timing.',
    theory: 'Allows access to performance-related information. `performance.now()` returns a timestamp in milliseconds with microsecond precision.',
    logic: '`Date.now()` is susceptible to system clock changes; `performance.now()` is monotonic (always increases).',
    code: `const start = performance.now();
doWork();
console.log(performance.now() - start);`,
    tip: 'Used for benchmarking and frame-rate measurement.'
  },
  {
    id: 122,
    level: 'advanced',
    title: 'Blob Object',
    shortDesc: 'Binary Large Objects.',
    theory: 'Represents a file-like object of immutable, raw data. Blobs can be read as text or binary data.',
    logic: 'Used for file uploads, downloading generated files, or displaying images from memory.',
    code: `const blob = new Blob(["Hello"], { type: 'text/plain' });
const url = URL.createObjectURL(blob); // Creates a local URL`,
    tip: 'Always `URL.revokeObjectURL(url)` when done to free memory.'
  },
  {
    id: 123,
    level: 'advanced',
    title: 'FinalizationRegistry',
    shortDesc: 'GC callbacks.',
    theory: 'Allows you to request a callback when an object is garbage collected.',
    logic: 'Useful for cleaning up resources (like WebGL buffers or external pointers) associated with a JS object.',
    code: `const registry = new FinalizationRegistry(heldValue => {
  console.log('Object collected:', heldValue);
});
registry.register(obj, "some metadata");`,
    tip: 'GC timing is non-deterministic; do not rely on this for critical logic.'
  },
  {
    id: 124,
    level: 'advanced',
    title: 'MessageChannel',
    shortDesc: 'Direct script communication.',
    theory: 'Creates a new message channel with two ports. Data sent through one port is received by the other.',
    logic: 'Useful for direct communication between an Iframe and the main window, or two Web Workers.',
    code: `const channel = new MessageChannel();
iframe.contentWindow.postMessage('Init', '*', [channel.port2]);
channel.port1.onmessage = (e) => console.log(e.data);`,
    tip: 'It avoids the overhead of bubbling messages through the global scope.'
  },
  {
    id: 125,
    level: 'advanced',
    title: 'FileReader API',
    shortDesc: 'Reading files client-side.',
    theory: 'Allows web applications to asynchronously read the contents of files (or raw data buffers) stored on the user\'s computer.',
    logic: 'Triggered by `<input type="file">`. Can read as Text, DataURL (base64), or ArrayBuffer.',
    code: `const reader = new FileReader();
reader.onload = (e) => console.log(e.target.result);
reader.readAsText(fileInput.files[0]);`,
    tip: 'Reading large files can block the main thread; consider using slices.'
  },
  {
    id: 126,
    level: 'advanced',
    title: 'Reflect API',
    shortDesc: 'Interception utilities.',
    theory: 'A built-in object that provides methods for interceptable JavaScript operations. It mirrors the methods of `Proxy` handlers.',
    logic: 'Used inside Proxy traps to forward the default behavior safely.',
    code: `const handler = {
  get(target, prop, receiver) {
    console.log('Getting ' + prop);
    return Reflect.get(target, prop, receiver);
  }
};`,
    tip: 'It standardizes object operations (e.g., `Reflect.has(obj, key)` vs `key in obj`).'
  },
  {
    id: 127,
    level: 'advanced',
    title: 'BroadcastChannel',
    shortDesc: 'Tab-to-Tab communication.',
    theory: 'Allows communication between different browsing contexts (tabs, windows, iframes) of the same origin.',
    logic: 'When you post a message to a channel, all other tabs listening to that channel receive it.',
    code: `const bc = new BroadcastChannel('app_data');
bc.postMessage('User Logged Out');
bc.onmessage = (e) => console.log(e.data);`,
    tip: 'Great for syncing "Dark Mode" or "Logout" across multiple open tabs.'
  },
  {
    id: 128,
    level: 'advanced',
    title: 'TextEncoder / TextDecoder',
    shortDesc: 'String to Binary.',
    theory: '`TextEncoder` takes a stream of code points (string) and emits a stream of bytes (Uint8Array). `TextDecoder` does the reverse.',
    logic: 'Essential when working with streams, files, or network protocols that require binary data instead of strings.',
    code: `const encoder = new TextEncoder();
const view = encoder.encode("€");
console.log(view); // Uint8Array [226, 130, 172]`,
    tip: 'Defaults to UTF-8 encoding.'
  },
  {
    id: 129,
    level: 'advanced',
    title: 'Symbol.for() (Global Registry)',
    shortDesc: 'Shared Symbols.',
    theory: 'Standard `Symbol()` creates a unique symbol every time. `Symbol.for(key)` searches for existing symbols in a global registry and returns it if found, otherwise creates one.',
    logic: 'Allows you to share Symbols across different files or libraries (iframe/service worker boundaries).',
    code: `const a = Symbol.for('app.id');
const b = Symbol.for('app.id');
console.log(a === b); // true`,
    tip: 'Use `Symbol.keyFor(sym)` to retrieve the string key of a global symbol.'
  }
];