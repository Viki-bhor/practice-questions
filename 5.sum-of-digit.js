function sumOfDigits(inputNum) {
    if(inputNum < 1) {
        throw new Error("Input number must be positive number");
    }
    const inputNumberToString = inputNum.toString();
    const splitedInput = inputNumberToString.split('');
    let initialAmount = 0;
    splitedInput.forEach(num => {
        initialAmount += parseInt(num);
    });

    return initialAmount;     
}

function sumOfDigits2(inputNum) {
    let number = inputNum;
    let sumOfDigits = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        sumOfDigits += lastDigit;
    }

    return sumOfDigits;
}

console.log("sumOfDigits", sumOfDigits(23));
console.log("sumOfDigits2", sumOfDigits2(46));
