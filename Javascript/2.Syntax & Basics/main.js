var a = 10;
let b = 20;
const c = 30;

a = 15; // OK
b = 25; // OK
// c = 35; ❌ Error (const cannot be reassigned)


// Explicit conversation
let str = String(100);     // "100"
let num = Number("42");    // 42
let bool = Boolean(0);     // false

// Implicit conversion
console.log("5" + 1); // "51"  → string concatenation
console.log("5" - 1); // 4     → number subtraction
console.log(1 + true); // 2    → true → 1


typeof "Hello";   // "string"
typeof 10;        // "number"
typeof true;      // "boolean"
typeof null;      // "object" ❗(known bug)
typeof undefined; // "undefined"
typeof {};        // "object"
typeof [];        // "object"
typeof function(){}; // "function"
