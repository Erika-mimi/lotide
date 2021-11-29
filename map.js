const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${(array1)} === ${(array2)}`);
  } else {
    console.log(`Assertion Failed: ${(array1)} !== ${(array2)}`);
  }
}
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]){
      return false;
    }
   } 
    return true;
  };

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[word.length -1]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[word.length -1]), [ 'd', 'l', 'o', 'r', 'm' ])
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
