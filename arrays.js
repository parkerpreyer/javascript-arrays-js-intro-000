const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  const arr2 = [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  array.unshift(element)
}

function addElementToEndOfArray(arr, element) {
  const arr2 = [...arr, element]
}

function destructivelyAddElementToEndOfArray(arr, element) {
  arr.push(element)
}
