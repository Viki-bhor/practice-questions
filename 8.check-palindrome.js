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

function isPalindrome3(inputString) {
   let start = 0;
   let end = inputString.length - 1;
   for(start, end; start < end; start++, end--) {
      if(inputString[start] !== inputString[end]) {
         return false;
      }
      return true;
   }
}

console.log(isPalindrome('madam'));
console.log(isPalindrome2('racecar'));
console.log(isPalindrome3('nice'));
