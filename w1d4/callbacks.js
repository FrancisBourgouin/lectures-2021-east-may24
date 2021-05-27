// What is a callback ?

// Functions that are defined on the fly
// A function that goes inside a function
// It can be called, or not

const rounder = (value, roundness) => {
  const factor = Math.pow(10, roundness)

  return Math.round(value * factor) / factor
}

const calculateAndShowTotalPrice = function (itemPrice, boring) {
  let taxPercentage = 1.14975
  let totalPrice = rounder(itemPrice * taxPercentage, 2)

  // if(boring){
  //   boringConsoling(totalPrice)
  // } else {
  //   amazingConsoling(totalPrice)
  // }
  console.log(`Total price is: ${totalPrice}$`)
}

const coolCalculateAndShowTotalPrice = function (itemPrice, action) {
  let taxPercentage = 1.14975
  let totalPrice = rounder(itemPrice * taxPercentage, 2)
  // const action = value => console.log(`Total price is: ${value}$`)
  action(totalPrice)
}

const boringConsoling = value => console.log(`Total price is: ${value}$`)
const amazingConsoling = value => console.log(`🔥🍟🤓🐔Total price is: ${value}$ 🎶🍜❄🦜`)
const minimalistAFConsoling = value => console.log(value)

// calculateAndShowTotalPrice(9.99)

// coolCalculateAndShowTotalPrice(9.99, boringConsoling)

// coolCalculateAndShowTotalPrice(9.99, amazingConsoling)

// coolCalculateAndShowTotalPrice(9.99, minimalistAFConsoling)

// coolCalculateAndShowTotalPrice(9.99, value => console.log(value))

// coolCalculateAndShowTotalPrice(9.99, function (value) {
//   console.log(value)
// })

// coolCalculateAndShowTotalPrice(9.99)

// value => console.log(value)

// What we get before running it: itemPrice = 5, action Function = v => console.log(v)

// let taxPercentage = 1.14975
// let totalPrice = rounder(5 * taxPercentage, 2)
// const action = v => console.log(v)
// action(totalPrice)

const listOfChicken = ["Poulet", "Chicken", "Pollo", "Dajaj", "Kruczak", "Murga"]

const listValuesAndUpdate = (list, action) => {
  const buffer = []

  for (const element of list) {
    const newValue = action(element)
    buffer.push(newValue)
  }

  return buffer
}

const lengthOfString = value => value.length
const parrot = value => `🦜 ${value} ${value}`


// console.log(listValuesAndUpdate(listOfChicken, lengthOfString))
// console.log(listValuesAndUpdate(listOfChicken, parrot))

const judgeAGrade = (grade, evaluationAction) => {
  if (evaluationAction(grade)) {
    console.log('GOOD JOB')
  } else {
    console.log('I AM DISAPPOINT')
  }
}

const strictParents = grade => grade > 90
const relaxParents = grade => grade > 50
const parentsThatAreTooCompassionate = () => true

judgeAGrade(55, parentsThatAreTooCompassionate)



[1, 2, 3, 4].forEach()