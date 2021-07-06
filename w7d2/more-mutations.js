const someArray = [1, 2, 3, 4, 5] // someArray is a ref to  [1,2,3,4,5]
const newArray = [...someArray] // newArray is a ref to another [1,2,3,4,5]

newArray[0] = 5

console.log(someArray, newArray)


const weirdArray = [[1], [2]] // weirdArray is ref to [ref1, ref2]
const alArray = [...weirdArray] // alArray is ref to another [ref1, ref2]

alArray.push(5)
alArray[0][0] = 5

console.log(weirdArray, alArray)