const checkPrime = (n) => {
    let isPrime = true;
    for (let divider = 2; divider <= n; divider++) {
        if (n % divider == 0) {
            isPrime = false;
            break;
        }
        if (isPrime) return `${n} is prime number` ;
    }
}

checkPrime(7);