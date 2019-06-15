// Regular function, called explicitly by name.
/* function multiply() {
    var result = 5 * 6;
    console.log("5 multiply by 6 is ", result);
}

multiply();
 */
/* function findBiggestFraction(a, b) {
    var result;
    a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 5 / 6;
var secondFraction = 4 / 5;

var  fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!"); */

// Anonymous function stored in a variable
// Invoked by calling the variable as a function.
/* var divided = function() {
    var result = 5 / 6;
    console.log("5 divided by 6 is ", result);
}

divided(); */

/* var biggestFraction = function(a, b) {
    var result;
    a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 7 / 8;
var secondFraction = 9 / 4;

var fractionResult = biggestFraction(firstFraction, secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!"); */
// Immediately invoked function expression.
// Runs as soon as the browser finds it.
/* (function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
})() */

var firstFraction = 3 / 5;
var secondFraction = 6 / 5;

var theBiggest = (function(a, b) {
    var result;
    a > b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
})(firstFraction, secondFraction);

console.log(theBiggest);