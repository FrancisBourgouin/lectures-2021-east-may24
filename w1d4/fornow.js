// Function expressions are better than function declarations

const betterThanDeclaration = function () {
  // ...
}

// Scoping?

const bob = "bobby"

const aFunction = () => {
  const bob = "bob"

  return bob
}

const anotherFunction = () => {
  const bob = "bob"

  return bob
}

// Function parameters

// We can put any value (numbers, strings, objects, arrays, functions..., statements)
// 1 === 1

// const bob = for(const bob of elements){...} (BAD)

// Callbacks < = function that was given to another function as a parameter

// Callbacks => Show in the console

// Callback to evaluate elements

// Callbacks to transform elements


const someFunction = value => {

  return value * 2
}

const multiplier = (value, otherValue) => {

  return value * otherValue
}


multiplier(3, 5)
multiplier(5, 5)
multiplier(7, 5)

const multiplyByTen = value => multiplier(value, 10)

multiplyByTen(20)


someFunction    // Referencing the function
someFunction() // Run the function (calling the function)


const doSomething = (something) => something()


let manta = [1, 2, 3]

manta.filter()
manta.forEach()
manta.map()
manta.reduce()
// manta...()


const objectOfDestiny = {
  value: 5,
}


const num = 5

console.log(`num === ${num}`)