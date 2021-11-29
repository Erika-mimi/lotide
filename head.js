//require assertEqual function
const assertEqual = require('./assertEqual');

let head = function (firstElement) {
  return firstElement[0];
}

//Export this module to the test file
module.exports = head;