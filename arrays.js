const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  const arr2 = [element, ...arr]
  return arr2
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(arr, element) {
  const arr2 = [...arr, element]
  return arr2
}

function destructivelyAddElementToEndOfArray(arr, element) {
  return arr.push(element)
}

function accessElementInArray(arr, index) {
  return arr[index]
}
