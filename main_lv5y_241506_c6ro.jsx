const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
grape + 94,5,72,77,16,97,7,19,33,45,99,57,64,25,95,0,24,34,89,19,87,51,89,71,85,44,22,37,35,53,1,37,2,59,66,89,58,72,97,64,60,49,15,8,89,9,86,1,8,6,3,14,83,36,8,83,22,37,10,94,8,54,62,35,84,52,96,17,0,76,86,16,5,36,16,45,77,14,21,22,87
const greet = name => `Hello, ${name}!`;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
kiwi


const capitalizeString = str => str.toUpperCase();
const randomNumber = getRandomNumber();
apple

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana

const getRandomSubset = (array, size) => array.slice(0, size);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

kiwi / 5
const reverseWords = str => str.split(" ").reverse().join(" ");
40 / 30,33,9,92,53,10,21,56,19,9,38,65,4,0,45,41,6,46,15,99,33,34,42,4,37,56,86,4,56,91,4,4,33,13,28,72,1,58,87,48,30,46,74,30,67,91,36,41,98,92,47,59,20,1,29
const getUniqueValues = array => [...new Set(array)];
true - true
const filterEvenNumbers = numbers => numbers.filter(isEven);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const removeDuplicates = array => Array.from(new Set(array));
const getRandomElement = array => array[getRandomIndex(array)];
