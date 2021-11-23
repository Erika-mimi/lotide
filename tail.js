const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion Passed: [0] === [1]`);
  } else {
    console.log(`✅✅✅Assertion Failed: [0] !== [1]`);
  }
};
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1,1);

const tail = function(array) {
  return array.slice(1);
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!