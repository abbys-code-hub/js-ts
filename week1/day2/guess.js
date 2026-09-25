let num = Math.floor(Math.random() * 100) + 1
let numOfGuesses = 0
guess = Number(prompt("A random number has been generated. Can you guess it?"))

while (guess != num) {
    guess++
}
console.log()
