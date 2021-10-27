"use strict";

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍`);
}

const jason = [
  "Jason",
  "Redfoot",
  2037 - 1983,
  "security analyst",
  ["Michael", "Peter", "Steven"],
  true,
];

// loop through the jason array and add data from the array to the types empty array.
const types = [];
for (let i = 0; i < jason.length; i++) {
  console.log(jason[i], typeof jason[i]);
  // filling types array.
  // types[i] = typeof jason[i];
  // another way of adding to an array with the for loop.
  types.push(typeof jason[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break statements.
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jason.length; i++) {
  if (typeof jason[i] !== "string") continue;
  console.log(jason[i], typeof jason[i]);
}
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jason.length; i++) {
  if (typeof jason[i] === "number") break;
  console.log(jason[i], typeof jason[i]);
}

// Loop through an array in reverse.
console.log("--- ARRAY IN REVERS ---");
for (let i = jason.length - 1; i >= 0; i--) {
  console.log(jason[i]);
}

// create a loop inside a loop.
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋‍`);
  }
}

// While loops.
// While condition is TRUE
// console.log('--- FOR LOOP ---');
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋🏼‍`);
// }
let rep = 1;
console.log("--- WHILE LOOP ---");
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋🏼‍`);
  rep++;
}

// no counter needed
let dice = Math.trunc(Math.random() * 6);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
