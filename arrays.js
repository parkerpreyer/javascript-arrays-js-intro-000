const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(arr, element) {
  const arr2 = [element, ...arr]
}
