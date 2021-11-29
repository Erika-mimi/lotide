//Here require 2 functions as follows
//reruire function assertEqual
const assertEqual = require('../assertEqual')
//require function head
const head = require('../head')
//Test codes
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");