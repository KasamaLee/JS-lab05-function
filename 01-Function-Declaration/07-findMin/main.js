function max (...num) {
    let updateMax = num[0]; // flag
    for (let i = 1; i <= 4; i++) {
        if (num[i] > updateMax) updateMax = num[i]
    }
    return updateMax;
}



console.log(max()); // undefined
console.log(max(2)); // 2
console.log(max(3, 1)); // 3
console.log(max(7, 3, 9, 2)); // 9

