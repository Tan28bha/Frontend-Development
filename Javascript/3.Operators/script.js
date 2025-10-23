// 🔹 1. Arithmetic Operators
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1
console.log(a ** b); // 1000

// 🔹 2. Assignment Operators
let x = 10;
x += 5;  // 15
x *= 2;  // 30
console.log(x);

// 🔹 3. Comparison Operators

"10" == 10   // true (type coercion)
"10" === 10  // false (strict comparison)

// 🔹 4. Logical Operators

var age = 20;
if (age > 18 && age < 30) console.log("Young adult"); // ✅

console.log(false && "Hello"); // false
console.log(true || "World");  // true

// 🔹 5. Conditional (Ternary) Operator

var age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

//  🔹 6. Nullish Coalescing Operator (??)

let name = null ?? "Guest";
console.log(name); // "Guest"


// 🔹 7. Optional Chaining (?.)

let user = {
  profile: {
    name: "Tanmay"
  }
};

console.log(user.profile.name);   // "Tanmay"
console.log(user.contact?.email); // undefined (no error)

// ✅ Without optional chaining:
// ❌ TypeError if 'contact' doesn't exist
console.log(user.contact.email);

// ✅ With optional chaining:
console.log(user.contact?.email); // safely returns undefined

// ⚡ Combine Them All (Example)

let user = {
  name: "Tanmay",
  age: 20,
  address: null
};

let isAdult = user.age >= 18 ? true : false;
let city = user.address?.city ?? "Unknown";

console.log(`${user.name} is adult: ${isAdult}`);
console.log(`City: ${city}`);

Tanmay is adult: true
City: Unknown

