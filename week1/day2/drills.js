#!/usr/bin/env node

#!/usr/bin/env node

const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}]

for (const v of values) {
    if (v) {
        console.log(v, "is truthy")
    } else {
        console.log(v, "is falsy")
    }
}

// 0 is falsy
// 1 is truthy
// -1 is truthy
// "is falsy"
// "hello is truthy"
// "0 is truthy"
// null is falsy
// undefined is falsy
// NaN is falsy
// [] is truthy
// {} is truthy


console.log(true && false)
// false

console.log(true || false)
// true

console.log(!true)
// false

console.log("hello" && "world")
// 
console.log("" || "fallback")
// 
console.log(null ?? "default")
// 
console.log(0 || "default")
// 
console.log(0 ?? "default")
// 

const age = 20
const status = age >= 18 ? "adult" : "minor"
console.log(status)
