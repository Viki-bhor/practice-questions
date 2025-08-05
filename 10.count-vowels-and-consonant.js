function calculateVowelsAndConsonants(inputString) {
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    inputString = inputString.toLowerCase();  //for convert upperCase characters to lowercase
    inputString = inputString.replace(/ /g, '')  //remove spaces globally in string

    let vowelsCount = 0;
    let consonantsCount = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(vowels.includes(inputString[i])) {
            vowelsCount++;
        } else if(consonants.includes(inputString[i])) {
            consonantsCount++;
        } else {
            console.log(inputString[i], "is neither vowel nor consonant.");
        }
    }

    return {vowelsCount, consonantsCount};
}

console.log(calculateVowelsAndConsonants("Hello World"));
