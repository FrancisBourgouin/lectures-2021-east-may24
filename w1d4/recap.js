// How can we declare a function?
// Hoisting
console.log(functionName())

// fct expression (better!)

const nameOfTheFunction = function (arg, param, whatever) {
  return "..."
}

nameOfTheFunction = function (arg, param, whatever) {
  return "..."
}

// arrow functions

const someArrowFunction = (param, param2) => {
  return ""
}

const fancyArrow = param => param * 2


// fct declaration

function functionName(params) {
  return "😭"
}

function functionName(params) {
  return "🌞"
}



