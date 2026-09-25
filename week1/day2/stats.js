#!/usr/bin/env node

function findMax(numbers) {
    let max = 0

    for (const n of numbers) {
        if (n > max) {
            max = n
        }
    }
    return max

}

function findMin(numbers) {
    let min = 0

    for (const n of numbers) {
        if (n < min) {
            min = n
        }
    }
    return min
}

function findAverage(numbers) {
    let total = 0

    for (const n of numbers) {
        total += n
    }
    return total
}

const nums = [12, 5, 88, 3, 45, 88, -7]
console.log(findMax(nums))
console.log(findMin(nums))
console.log(findAverage(nums))
