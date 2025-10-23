// 🧩 1. What is an Object?

const person = {
    name:"Tanmay",
    place:"Bengaluru",
    DOY:"2005"
};
person.age=20;
delete person.DOY;
console.log(person["place"]);
console.log(person.name);


const user = { name: "Tanmay", age: 20 };
console.log(Object.keys(user));   // ["name", "age"]
console.log(Object.values(user)); // ["Tanmay", 20]
console.log(Object.entries(user));// [["name","Tanmay"],["age",20]]
