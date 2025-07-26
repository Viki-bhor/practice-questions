function findLargestNumber(array) {

    if(!array || array.length === 0) {
        throw new Error("Empty Array");
    }
    
    let biggestNumber = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > biggestNumber) {
            biggestNumber = array[i];
        }
    }
    return biggestNumber;
   
}

function findLargestNumber2(array) {
    const maxNumber = Math.max(...array); //spread operator (...) to expand the array into individual numbers:
    return maxNumber;
}

console.log(findLargestNumber([87,5,62,89]));
console.log(findLargestNumber2([7,5,62,9]));


