console.log('anonymous');

// #1 : Named fn, FN Declaration
// function add () {}


// #2 : Anonymous
// IIFE : Intermediate Invoke Function Expression

// (function (message) { console.log(message) })('hi')
/*
(function (x, y) { 
    console.log(x + y); 
})(10, 5);
*/

/*
console.log(
    (function (x, y) {
        return x + y;
    })(10, 5));
*/

/*
let a = (function (x, y) {
    return x + y;
})(10, 7);
*/


/*
// #2B
// VARIABLE = EXPRESSION
let myVar = ((5 * 2 * 20) / 2) % 7;

// VARIABLE = FN (FN == EXPRESSION)
// ASSIGN anonymous FN to variable
const myFunc = function (x, y) {
    return x + y;
};
console.log(myFunc(5, 10));

// ASSIGN name FN to variable
const a = console.log;
a('hi');
// ป้องกันการ HOISTING 
*/


// ### ANONYM (MODERN : ARROW SYNTAX)
let a = function (x) { 
    return x ** 2 
};
// A: Shortest
let b = (x, y) => x + y;

// B: Bracket
let c =  (x, y) => {
    let result = x + y;
    return result;
}

console.log(a(5));