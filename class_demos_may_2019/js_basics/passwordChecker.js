const password = process.argv[2];
// grab the value of the first argument and set it as a variable passowrd

if (password.length > 12) { // check if the length of our password is greater than 12
  console.log('Too long!'); // if it is this will execute
} else if (password.length < 8) { // check if the length is less than 8
  console.log('Too short!'); // if it is this will execute
} else { // if both of the above conditions are not met
  console.log('Just right!') // this will execute
}
