const greet = name => `Hello, ${name}!`;
const squareRoot = num => Math.sqrt(num);
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true + false
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
banana

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sum = (a, b) => a + b;

