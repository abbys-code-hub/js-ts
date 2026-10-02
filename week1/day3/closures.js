function makeCounter() {
    let count = 0

    return function increment() {
        count++
        return count
    }
}

const counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

const counter2 = makeCounter()
console.log(counter2())
console.log(counter())

// Make counter returns a function increment. The function increment,
// makes use of the variable count
// Because the variable is still needed, javascript keeps
// the variable context around, so it is available for 
// whenever the function increment is finally used
