// write a program that uses console.log to print all the number from 1 to 100
// numbers divisible by 3, print 'Fizz'
// numbers divisible by 5 and not 3, print 'Buzz'
// numbers divisible by 5 and 3, print 'FizzBuzz'

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    i % 5 === 0
      ? console.log("Buzz")
      : i % 3 === 0
      ? console.log("Fizz")
      : console.log(i);
  }
}
