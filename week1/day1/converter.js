#!/usr/bin/env node

let exchangeRate = 1350

function nairaToUsd(amount) {
    exchangeRate = 1350

    res = amount/exchangeRate
    return res
}

function usdToNaira(amount) {
    exchangeRate = 1350

    res = amount * exchangeRate
    return res
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

function kgToPounds(kg) {
    return (kg * 2.20462).toFixed(2)
}

console.log(`A million naira is ${nairaToUsd(1000000)} naira`)
console.log(`A million dollars is ${usdToNaira(1000000)} naira`)
console.log(celsiusToFahrenheit(0))
console.log(celsiusToFahrenheit(100))
console.log(usdToNaira(nairaToUsd(5000)))
