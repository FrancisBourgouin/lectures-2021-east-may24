// Why do we use variables ?

// To reuse code
// To store a piece of data (beginning -> checkpoint)

let someNumber = 5
someNumber += 10
someNumber += 40
// ...
let postAdditionNumber = someNumber

// To improve readability, to label information

let a = 10
let b = 1.14975

console.log(a * b)


let itemPrice = 10
let taxPercentage = 1.14975

console.log(itemPrice * taxPercentage)



// Why do we use functions?

let itemPrice = 10
let taxPercentage = 1.14975
let totalPrice = Math.round(itemPrice * taxPercentage * 100) / 100
console.log(totalPrice)

const calculateTotalPrice = function () {
  let itemPrice = 10
  let taxPercentage = 1.14975
  let totalPrice = Math.round(itemPrice * taxPercentage * 100) / 100

  return totalPrice
}

console.log(calculateTotalPrice())

// DRY reuse code
const rounder = (value, roundness) => {
  const factor = Math.pow(10, roundness)

  return Math.round(value * factor) / factor
}

const calculateTotalPriceButBetter = function (itemPrice) {
  let taxPercentage = 1.14975
  let totalPrice = rounder(itemPrice * taxPercentage, 2)

  return totalPrice
}

console.log(calculateTotalPriceButBetter(9.99))
console.log(calculateTotalPriceButBetter(19.99))
// Reduce complexity


const calculateAndShowTotalPrice = function (itemPrice) {
  let taxPercentage = 1.14975
  let totalPrice = rounder(itemPrice * taxPercentage, 2)

  console.log(totalPrice)
}
