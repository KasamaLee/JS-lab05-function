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

function printPrime(limit) {
    for (let n = 2; n <= limit; n++){
        checkPrime(n);
    }
}

printPrime(31)

