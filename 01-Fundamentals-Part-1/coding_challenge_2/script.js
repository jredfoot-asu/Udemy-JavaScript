let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / (markHeight ** 2);
let johnBMI = johnWeight / (johnHeight **2);
let markHigherBMI = markBMI > johnBMI
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

// we must repeat all the code because it will not recalculate without a loop. The log to console will be from what it was before otherwise.
markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85
markBMI = markWeight / (markHeight ** 2)
johnBMI = johnWeight / (johnHeight **2);
markHigherBMI = markBMI > johnBMI
console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);
if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
