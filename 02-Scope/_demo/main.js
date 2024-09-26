/*
// GLOBAL SCOPE
let message = 'hi global';

function sayHi() {
    // FUNCTION SCOPE
    let message = 'hello local';
    console.log(`##${message}`);
}

sayHi();
console.log(message);
*/

/*
// variable : message = identifier
let message = 'h';

// function : sayHi == identifier
function sayHi(m) {
    let message = 'a';
    console.log(m);
}
*/

function sayHi(user) {
    // ---- FUNCTION SCOPE ----
    let message = 'welcome';
    if (user == 'admin') {
        // ---- BLOCK-IF ----
        let message = 'WELCOME';
        console.log(message + 'admin');
    } else {
        // ---- BLOCK-IF ----
        console.log(message + 'guest');
    }
}
sayHi('ad');

