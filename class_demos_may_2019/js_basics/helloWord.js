// console.log lets us print text to the terminal
console.log('Hello, World');

// <- double slash indicates the start of a one line coment

/* 
  anything inside of slash astrisks are comments
*/

1 // would be a value of 1
'jon' // another value

1 // is the value with type of number

console.log(typeof(1)); // typeof(x) will return what the type of x is

console.log(typeof('jon')); // type string

1 + 1 // is an expression
console.log(1 + 1); // all expressions will evaluate to a value

console.log('jon' + ' snow');

console.log('na'.repeat(5) + ' Batman!');

console.log(typeof Infinity); //returns number

console.log(Math.sqrt(-1)); // returns NaN

console.log(1 / 'one'); // returns NaN

// NaN stands for Not a Number. It represents anything that is not a legal number

// numbers 
// arithmitic operations 

console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(3 * 3); // multiply
console.log(9 / 3); // divide

console.log(12 % 10); // Modulo operator gives you the remainder of a division
console.log(-3); // Unary negation

// strings

"jon"
'jon'
console.log(`jon`);
// you can create strings by surrounding text in quotes, double quotes, or backticks

// console.log('does' 'this' 'work'); // syntax error
console.log("what 'is' this?"); // works!

console.log('What about \'this\''); // you can escape characters with a backslash
// 

// you can join strings together

"jon" + "snow"; // will be "jonsnow"
// this is called string interpolation

console.log(99 + 'bottles'); // will be 99bottles
// when adding numbers to strings javascript will turn 
// the number into a string and add them together as if they were strings

`${1 + 2} cans`; 
// you can write expressions inside of ${} inside of backtick strings
// expressions will evaluate before the string is created
// this is called string interpolation

console.log('jon snow'.length) // will return the length of the string

"dark throne"[0] // returns "d"
// this is called bracket notation
// it will return the character of a string at index 0
// programming languages start counting from 0 in this case the character at index 0 is 'd'

"dark throne"[50] // returns undefined
// here we are trying to access a character at index 50 (or the 49th position)
// it does not exist so undefined gets returned
// undefined is a base type that represents emptiness or an unknown value

// booleans

// comparison operators
// triple equal sign will check if one value is equal to another value
console.log(1 === 1); // returns true
console.log(1 === '1'); // returns false; the types are not the same

// a bang with double equal signs !== checks if things are not the same
console.log('Bob' !== 'Bob'); // returns false

console.log(20 > 4); // returns true
console.log(20 < 4); // returns false
console.log(20 <= 20); // returns true
console.log(20 >= 50); // returns false

// variables

// declare a variable a
let a;
// we have not assigned a value to a so it is undefined
console.log(a); // returns undefined
a = 90;
// after assigning a value to the variable it now points to the value of 90
console.log(a); // returns 90

let c = a;
console.log(c) // returns 90;
// c points to the value of a so 90 is returned;

// iterations

// while loop
// does something while an expression is true

// while (true) {
//   console.log('Winter is coming')
//   break
// }
// This is an infinite loop! Make sure you never do this inside of a program.

let i = 0;
while (i < 50) { // while this expression evaluates to true the following block runs
  console.log('winter is coming!')
  i++; // everytime the block runs we increment our variable i
}
// eventually i is greater than 50 so the while loop doesn't execute.


let x = 0;

while(x <= 100) {
  if(x % 2 === 0) {
    console.log(x);
  }
  x++;
}

// for loop
// for loops can take extra arguments
// the first argument lets you declare a variable
// the second is the conditional
// the third is a iteration
for (let t = 0; t <= 100; t++) {
  if(t % 2 === 0) {
    console.log(t);
  }
}

for (let i = 0; i <= 99; i += 3) {
  if(i !== 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 99; i++) {
  if(i % 3 === 0) {
    console.log(i)
  }
}

let j = 100;

while (j >= 0) {
  if(j === 49) {
    break; // break statement exits out of loops once it is executed/ called
  }
  console.log(`${j} bottles of beer on the wall, ${j} bottles of beer on the wall`);
  j--;
  console.log(`take one down pass it around... ${j} bottles of beer on the wall`);
}