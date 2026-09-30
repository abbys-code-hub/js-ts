function guessingGame() {
    let secretNum = Math.floor(Math.random() * 100) + 1
    let numOfAttempts = 0
    let maxAttempts = 7
    let guess = 0
    let winGame = false

    while (numOfAttempts < maxAttempts) {
        guess = Number(prompt("A random number has been generated. Can you guess it?"))

        if (guess == null) {
            alert("YOU QUIT")
            return
        }

        guess = Number(guess)
        if (!guess) {
            alert("Enter only valid numbers please")
            continue
        }
        guess = Number(guess)

        numOfAttempts++

        if (guess === secretNum) {
            winGame = true
            time = numOfAttempts === 1 ? "time" : "times"
            alert("YOU WON!!! You tried " + numOfAttempts  + time)
            break
        } else if (guess < secretNum) {
            alert("Your guess is too low. Please try again")
        } else {
            alert("Your guess is too high. Please try again")
        }
        numOfAttempts++
    }
    if (!winGame) {
        alert("GAME OVER!!!")
    }
}

guessingGame()
