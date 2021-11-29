//Require the following 2 functions
//Require assertEqual func
const assertEqual = require('../assertEqual')
//Require tail func
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!