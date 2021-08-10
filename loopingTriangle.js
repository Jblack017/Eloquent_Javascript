// Write a loop that makes seven calls to console.log to output the following triangle
// #
// ##
// ###
// ####
// #####
// ######
// #######

// for loop
for (let i = 1; i < 8; i++) {
  console.log("#".repeat(i));
}

// while loop
// while loop initializers
let repeatLog = 1;
let count = 0;

while (count < 7) {
  console.log("#".repeat(repeatLog));
  ++repeatLog;
  ++count;
}

// breaking out of a loop

// for loop with conditional break
for (let j = 1; j < 30; j++) {
  console.log("#".repeat(j));
  if (j > 6) {
    break;
  }
}

// while loop with conditional break
let repeatLogTwo = 1;
let countTwo = 0;

while (countTwo < 759) {
  console.log("#".repeat(repeatLogTwo));
  ++repeatLogTwo;
  ++countTwo;
  if (countTwo > 6) {
    break;
  }
}
