// Arrays

// MDN DOCS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const arr = [1, 2, 3, 4, 5]

// Length

arr.length // 5
;[].length // 0

// To get a value at an index

arr[0] // 1
arr[4] // 5
arr[arr.length - 1] // 5
arr[10] // undefined

// To create a new array that's combination
// of other arrays, use "concat"
// This will not change the array arguments.

const letters = ["a", "b", "c"]

arr.concat(letters)
// [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
letters.concat(arr)
// [ 'a', 'b', 'c',   1, 2,   3, 4,   5 ]

// Create new arrays from parts of
// an array using "slice"

arr // [ 1, 2, 3, 4, 5 ]
arr.slice(0) // [ 1, 2, 3, 4, 5 ]
arr.slice(1) // [ 2, 3, 4, 5 ]
arr.slice(2) // [ 3, 4, 5 ]
arr.slice(2, 3) // [ 3 ]
arr.slice(2, 4) // [ 3, 4 ]
arr.slice(0, 3) // [ 1, 2, 3 ]
arr // [ 1, 2, 3, 4, 5 ]

// To combine array elements into a string
// use "join"

arr // [ 1, 2, 3, 4, 5 ]

const arr2 = ["a", "b", "c"]
arr2 // [ 'a', 'b', 'c' ]
arr2.join() // 'a,b,c'
arr2.join(" ") // 'a b c'
arr2.join(" 🤷‍♂️ ") // 'a 🤷‍♂️ b 🤷‍♂️ c'
arr.join(" 🔥 ") // '1 🔥 2 🔥 3 🔥 4 🔥 5'

// To replace array elements at positions
// use [] =

arr[0] = 10 // 10
arr // [ 10, 2, 3, 4, 5 ]
arr[4] = 20 // 10
arr // [ 10, 2, 3, 4, 20 ]

// To add or remove elements from the beginning
// or end of an array, use the functions
// "shift", "unshift", "push" & "pop"

const nums = [1, 2, 3]

nums.unshift("a") // 4
nums // ['a', 1, 2, 3]

nums.shift() // 'a'
nums // [1, 2, 3]

nums.push(10) // 4
nums // [1, 2, 3, 10]

nums.pop() // 10
nums // [1, 2, 3]

// Iterating over arrays

let greets = ["Hi", "Yo!", "Halo"]

console.log("Iterating an array with for")
for (let index = 0; index < greets.length; index += 1) {
  console.log("Index:", index, "Value:", greets[index])
}

console.log("Iterating an array with for..of")
for (let val of greets) {
  console.log("Value:", val)
}

// On errors
// ReferenceError: arr2 is not defined                                                                👇 Column number
//     at Object.<anonymous> (/Users/sg/Work/lds/may/class_demos/js_functions_and_arrays/arrays.js:47:1)
//                              👆 Location of file where error occured                             👆 Line number

// Exercise: Sum
// Create a function, sum, that takes an array of numbers as an argument then
// returns the sum of all numbers in the array.
// It should ignore non-number values.

function sum(numbers) {
  let total = 0

  for (let number of numbers) {
    if (typeof number === "number") {
      total += number
    }
    // total = total + number
  }

  return total
}

console.log("Exercise: sum")
console.log(sum([5, 2, 1, 3, 4]))
console.log(sum([[], 5, 2, "G", 1, 3, 4]))
