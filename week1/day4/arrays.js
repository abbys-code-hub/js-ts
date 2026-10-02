const products = [
    {"name": "berries", "price": 3000, "category": "fruits"},
    {"name": "pineapple", "price": 500, "category": "fruit"},
    {"name": "tomatoes", "price": 1000, "category": "perishables"},
    {"name": "LG television", "price": 40000, "category": "electronics"},
    {"name": "Jollof rice", "price": 1000, "category": "food"},
    {"name": "Ofada rice", "price": 2500, "category": "food"}
]

const lessThan5000 = products.filter(product => (product.price < 5000))

const names = products.map(product => (product.name))

const electronics = products.filter(product => product.category == "electronics")

const totalPriceOfElectronics = electronics.reduce((total, product) => total + product.price, 0)

const foods = products.filter(product => product.category == "food")

const firstFood = foods[0]


console.log(lessThan5000)
console.log(names)
console.log(electronics)
console.log(totalPriceOfElectronics)
console.log(firstFood)

// console.log()
