// JAVASCRIPT

// How do engines work?
// Engines are complicated. But the basics are easy.

// The engine (embedded if it’s a browser) reads (“parses”) the script.
// Then it converts (“compiles”) the script to machine code.
// And then the machine code runs, pretty fast.

// JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.


// use strict

// we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

a=2
alert(a);  // wroks

// but 
'use strict'
aa=2
alert(aa)      //error
//use,   let aa=2

