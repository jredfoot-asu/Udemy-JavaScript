const firstName = "Jason";
const job = "Automation Engineer";
const birthYear = 1983
const year = 2021

// old way of concatinating a string
const jason = "I'm " + firstName + " a " + (year - birthYear) + " year old " + job + '!'
console.log(jason);

const jasonNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`
console.log(jasonNew);
