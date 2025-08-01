function calculatePower(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(calculatePower(2, 3));
