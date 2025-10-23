// if else if else
    let age = 20;

if (age < 13) {
  console.log("Child");
} else if (age < 18) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// 🧱 2. Nested if

let username = "Tanmay";
let password = "12345";

if (username === "Tanmay") {
  if (password === "12345") {
    console.log("Login successful!");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("User not found");
}

// 🧮 3. switch Statement

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Weekend";
}

console.log(dayName);

// 🧯 4. break and default

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
  case "banana":
    console.log("Yellow fruit");
  case "grape":
    console.log("Purple fruit");
  default:
    console.log("Unknown fruit");
}

// 🧾 Output:

Yellow fruit
Purple fruit
Unknown fruit

// ✅ Correct version:

let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Red fruit");
    break;
  case "banana":
    console.log("Yellow fruit");
    break;
  case "grape":
    console.log("Purple fruit");
    break;
  default:
    console.log("Unknown fruit");
}


// 🧾 Output: Yellow fruit