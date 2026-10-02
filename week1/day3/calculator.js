function calculate(operation, a, b) {
    return operation(a, b)
}

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero"
    }
    return a / b
}

console.log(calculate(add, 4, 3))
console.log(calculate(subtract, 8, 3))
console.log(calculate(multiply, 3, 4))
console.log(calculate(divide, 9, 3))
