
function checkPrime(n) {
    let isPrime = true;

    for (let divider = 2; divider < n; divider++) {
        if (n % divider == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(`${n} is prime number`);
    // else console.log(`${n} is not prime number`);
}

// let number = +prompt('Enter Number :');
// checkPrime(number);
checkPrime(7);
checkPrime(13);
checkPrime(61);