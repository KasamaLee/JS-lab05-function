// ให้เขียนฟังก์ชันคำนวณค่า factorial

// 2! = 2 × 1 = 2
// 3! = 3 × 2 × 1 = 6
// 4! = 4 × 3 × 2 × 1 = 24
// n! = n × (n - 1) × (n - 2) × ... × 2 × 1

const factorial = (n) => {
    let sum = 1;
    for (n; n >= 1; n--) {
        sum *= n;
        // console.log(sum + '*' + n);   
    }
    return sum;
}

console.log(factorial(4)); //24