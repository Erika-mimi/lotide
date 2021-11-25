/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`✅✅✅Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
*/
const assertEqual = function(array1, array2) {
  var output = eqArrays(array1, array2);
  // console.log(output)
  if (output) {
    console.log(`Assertion Passed: ${(array1)} === ${(array2)}`);
  } else {
    console.log(`Assertion Failed: ${(array1)} !== ${(array2)}`);
  }
}

const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i], array2[i])
    if (array1[i] !== array2[i]){
      return false;
    }
   } 
    return true;
  };

const result = eqArrays([1, 2, 3], [1, 2, 3]) // => true
console.log(result);
//eqArrays([1, 2, 3], [3, 2, 1]) // => false
//console.log(eqArrays([1, 2, 3], [1, 2, 3]))
//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) 
