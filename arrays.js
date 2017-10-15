var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)  {
  return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  if (array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element)  {
  return array = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element)  {
  return array = [array.push(element)]
}

function accessElementInArray(array, element)  {
  console.log(array[index])
  return array[index]
}
