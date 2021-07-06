// Immutability

// Mutations

// Change something that is existing, change from the original form

const someArray = [1, 2, 3, 4, 5]

console.log(someArray[someArray.length - 1])
// console.log(someArray.pop())
// console.log(someArray.pop())
// console.log(someArray.pop())
// console.log(someArray.pop())
// console.log(someArray.pop())
// console.log(someArray.pop())

// Using pop is mutating the original array

let price = 9.99
let priceWithTax = Math.round(price * 1.14975 * 100) / 100

console.log(price, price / 1.14975)

// user object
const res = {}

const dbRes = {
  name: "bob",
  password: "pockpock",
  email: "wiggle@wiggle.com"
}
const { name, email } = dbRes
// res.json({ name, email })

// delete dbRes.password

// res.json(dbRes)



// Pure functions

const purePop = arr => {
  const newArray = [...arr]
  const poppedValue = newArray.pop()

  return [newArray, poppedValue]
}

console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))
console.log(purePop(someArray))