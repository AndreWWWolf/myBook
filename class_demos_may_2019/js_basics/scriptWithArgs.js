// console.log(process.argv);
// prcoess holds information about the program that is currently running

// in the currently running program we can get the arguments by calling process.argv

const firstArg = process.argv[2];
const secondArg = process.argv[3];

console.log('first argument: ' + firstArg);
console.log('second argument: ' + secondArg);

// if (true) {
//   console.log('burn them  all!')
// } else {
//   console.log('feed them cake!!');
// }
// because the expression on line 12 evaluates to true the first block will run
// and the second block (line 14-16) will not run

// if (5 > 1) {
//   console.log('burn them  all!')
// } else {
//   console.log('feed them cake!!');
// }

if (false) { // this expression is false the following block does not run
  console.log('burn them all')
} else if (false) { // this expression is also false the following block does not run
  console.log('maybe burn them?')
} else if(true) { // this runs 
  console.log('hit')
} else { // this does not have chance to evaluate
  console.log('feed them cake')
}

// ternary operator

// can also be used as a conditional. these are expressions that evaluate into a value
(5 > 1) ? console.log('burn them all') : console.log('feed them cake');