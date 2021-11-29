//Here you don't have to require assertEqual, because in the test file, you can require
const tail = function(array) {
  return array.slice(1);
};
//exports module
module.exports = tail;