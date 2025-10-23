// 🧩 1. What is a Function?
function name(){
    console.log("Hello world");
}

name();

// 🟢 Function Declaration
sayHello(); // ✅ Works (hoisted)
function sayHello() {
  console.log("Hello!");
}

// 🟡 Function Expression
const sayHi = function() {
  console.log("Hi there!");
};
sayHi(); // ✅ Works


// ⚙️ 3. Parameters and Return Values
function add(a, b) {
  return a + b; // returns result
}

console.log(add(3, 5)); // 8

// ⚙️ 4. Default Parameters

function greet(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

greet();         // Welcome, Guest!
greet("Tanmay"); // Welcome, Tanmay!

// ⚡ 5. Arrow Functions (()=>{})
    // Basic form:
    const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

// With multiple statements:
const greet = (name) => {
  console.log("Hi,", name);
  console.log("Welcome!");
};
greet("Tanmay");

// ⚡ 6. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This runs immediately!");
})();

