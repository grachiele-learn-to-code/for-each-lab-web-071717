function iterativeLog(array) {
  array.forEach(function (element) {
    console.log(`${array.indexOf(element)}: ${element}`)
  })
}

function iterate(callback) {
  let array = ["Something", "is", "going", "to", "happen"]
  array.forEach(callback)
  return array
}


function doToArray(array, callback) {
  array.forEach(callback)
}
