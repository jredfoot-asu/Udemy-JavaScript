const country = "United States";
const continent = "North America";
let population = 350;

console.log(country);
console.log(continent);
console.log(population);
console.log("------------");

let isIsland = country;
console.log(isIsland);
console.log("------------");
isIsland = false;
let language = 'English ';

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);
console.log("------------");

console.log("half the population is " + (population / 2));
console.log("Increasing the population by 1 " + (population + 1));
console.log("It is " + (population > 6) + " that the " + country + " has more population than Finland.");
console.log("------------");
console.log("It is " + (population > 33) + " that the " + country + " has more population than the average country.");
console.log("------------");
let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log(description);
console.log("------------");
description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

if (population > 33) {
  console.log(`${country}'s population is above average.'`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average.'`);
}
