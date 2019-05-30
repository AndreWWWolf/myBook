const password = process.argv[2];

if (password === undefined) {
  console.log('Script argument is required!!')
} else if (password === 'opensesame') {
  console.log('safe unlocked!')
} else {
  console.log('wrong password')
}