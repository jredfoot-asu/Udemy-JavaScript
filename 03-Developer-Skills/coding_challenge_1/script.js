"use strict";

// Test Data 1: [17, 21, 23]
// Test Data 2: [12, 5, -5, 0, 4]
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForcast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log("... " + str);
};

printForcast(data1);
