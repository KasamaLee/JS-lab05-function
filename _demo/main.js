// test push ,feedback branch
// update solution

/*
function soundOfBird() {
    console.log('เสียงงง นกกรงหัวจุกมันริก');
    console.log('จก ');
    for (let i = 1; i <= 10; i++) {
        console.log('กวิ๊ก');
    }
}

soundOfBird();
soundOfBird();
*/

// function isPrime(n) {
//     // let n = 5;
//     let isPrime = true;

//     for (let divider = 2; divider < n; divider++) {
//         // divider 2,3,4,...,n-1
//         if (n % divider == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) console.log(n);
// }

// isPrime(5);
// isPrime(7);
// isPrime(8);



// 1. Define
function add(x,y) {
    // 0 sec
    let result = x+y;
    // 5 sec
    return result
}
//2. Call
add(5,6)
console.log(11==add(5,6)) // true
let r = add(5,6); // r = 11

console.log(add(5,6)); // one time use
console.log(add(5,6)); // one time use
// FN มี runtime 1 hr ถ้า call 2 ครั้ง จะมี runtime 2 hr 

// RETURN VALUE คือผลที่ได้จากการ run function จนเสร็จ



// Annonymous FN

// SYNTAX : FN EXPRESSION
// อธิบาย : กำลัง assign Anonymous FN ให้กับตัวแปร sayHello

const sayHello = function (name) {
    console.log('Hi' + name);
};

sayHello('Expression');

// ต้องประกาศก่อนใช้

// arrow คือ fn anonymous แบบ modern fn

// 1. function add () {}
// 2A. let add = function () {}
// 2B. let add = () => {}

const minus = (a, b) => {
    return a - b;
};

const minus = (a, b) => a - b;
const minusTwo = (a) => a - 2;
const two = 2;

console.log(minusTwo); // cal
console.log(two); // not call
