function isPalindrome(inputString) {
   let ogString = inputString;
   let splittedString = inputString.split('');
   let reversedString = splittedString.reverse();
   let joinedString = reversedString.join('');

   if(ogString === joinedString) {
      return true;
   }
   return false;
}

function isPalindrome2(inputString) {
   for(let i = 0; i <= inputString.length / 2; i++) {
      if(inputString[i] !== inputString[inputString.length -1 - i]) {
         return false;
      }
   }
   return true;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome2('racecar'));
