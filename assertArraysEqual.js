// //To evaluate 2 arrays if they are equal
// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]){
//       return false;
//     }
//    } 
//     return true;
//   };

// module.exports = eqArrays;
// const eqArrays = function (array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i], array2[i])
//     if (array1[i] !== array2[i]){
//       return false;
//     }
//    } 
//     return true;
//   };

  const assertArraysEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🛑🛑🛑Assertion Passed: ${[actual]} === ${[expected]}`);
    } else {
      console.log(`✅✅✅Assertion Failed: ${[actual]} !== ${[expected]}`);
    }
  };
  
  
  
module.exports = assertArraysEqual;
// const result = eqArrays([1, 2, 3], [1, 2, 2]) // => true
// console.log(result);
// //eqArrays([1, 2, 3], [3, 2, 1]) // => false
// //console.log(eqArrays([1, 2, 3], [1, 2, 3]))
// //eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// //eqArrays(["1", "2", "3"], ["1", "2", 3]) 