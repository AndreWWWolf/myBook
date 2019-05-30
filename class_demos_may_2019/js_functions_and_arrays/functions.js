// Node Command History

function add(a, b) {
  return a + b
} // undefined
add // [Function: add]
typeof add // 'function'
add() // NaN
undefined + undefined // NaN
add(10, 90) // 100
10 * 80 // 800
add(10 * 10, 2 + 2) // 104
add(add(10, 3), add(add(9, 9), add(5, 3))) // 39

// Exercise: Rude Bot
// Write a function, insult, that takes a name, and returns an insult (e.g.
// "Bob, you doofus").
// Try returning a random insult whenever insult is called (at least 3 different
// insults)

function insult(name) {
  const rand = Math.floor(Math.random() * 3)

  if (rand === 2) {
    return `${name}, you doofus!`
  } else if (rand === 1) {
    return `${name}, your father smelt of elderberries`
  } else {
    return `Your mother was a hamster, ${name}`
  }
}

console.log(insult("Steve"))

// Exercise: Occurences Of

function occurencesOf(char, str) {
  let count = 0

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === char) {
      // count = count + 1
      // 👇 is syntax sugar for 👆
      // "Syntax sugar" is syntax is functionaly identical
      // to other code. However, it is usually a shorter
      // and nicer way of writing it.
      count += 1
    }
  }

  return count
}

// Examples:
console.log(
  occurencesOf("l", "hello world lll"),
  occurencesOf(" ", "my name is bob"),
  occurencesOf("c", "this is this")
)
