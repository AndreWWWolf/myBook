let num = 0;
// Use `while` to execute a block of code multiple times.
// It is following by a condition that is surrounded by braces (i.e. ())
// just like an if-statement.
// For as long as the expression inside the braces is `true` or `truthy`,
// the block os code that follows will keep executing
while (num <= 100) {
	console.log('The num is', num);
	num += 1;
	// num = num + 1;
	// num++;
	// ++num;
}

// AND operator `&&`
5 > 7 && 'hello'.length === 5;
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// OR operator `||`
true || true; // true
true || false; // true
false || true; // true
false || false; // false

let n = 100;
while (n > 0) {
	// console.log(n);
	if (process.argv[2] === 'half' && n <= 50) {
		// Use `break` to exit a loo at any time regardless of its conditional
		break;
	}
	n -= 1;
	// n = n - 1;
	// n--;
	// --n;
}

// The `for` loop can be used to represent any loop
// Following `for` keyword are braces that contain 3 parts.
// Each part is separated by a semi-colon `;`
// - Variable declarations. This is usually a variable that will change over
// the course of the iteration
// - The condition. This would be the same condition that we would writ
// for a `while` loop
// - Code that will after each execution of the code block
// We write code that will usually change the variable in the first
// Which is typically the variable used in the condition
// This eventually leads to ending the loop
for (let i = 3; i <= 99; i += 3) {
	console.log(i);
}