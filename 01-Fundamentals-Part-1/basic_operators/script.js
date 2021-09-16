const now = 2037;
const ageJason = now - 1983;
const ageSarah = now - 2018;
console.log(ageJason, ageSarah);

// 2**3 means 2 to the power of 3 or 2 * 2 * 2
console.log(ageJason * 2, ageJason / 10, 2 ** 3);

const firstName = 'Jason';
const lastName = 'Redfoot';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5; // equals 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++ // x = x + 1 = 101
console.log(x);
x-- // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageJason > ageSarah); // >, <, >=, <=,
console.log(ageSarah >= 18);
