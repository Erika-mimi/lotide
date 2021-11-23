const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🛑🛑🛑Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`✅✅✅Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
assertEqual("lighthouse Labs", "Bootcamp");
assertEqual(1,1);

let head = function (firstElement) {
  return firstElement[0];
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");