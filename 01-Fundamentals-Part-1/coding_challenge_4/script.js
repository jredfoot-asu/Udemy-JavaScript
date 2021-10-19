const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill *.2;
console.log(`The bill was ${bill}, the tipe was ${tip}, and the total value ${bill + tip}`);
