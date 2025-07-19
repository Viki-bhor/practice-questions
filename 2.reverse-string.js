function reverseString(inputString) {
  let reversed = ""
  for(let i = inputString.length - 1; i >= 0; i--) {
    reversed += inputString[i]; 
  };

  return reversed;
}

console.log(reverseString("vikrant bhor"));


function reverseString2(inputString) {
   const splittedString = inputString.split('');
   const reversedString = splittedString.reverse();
   const result = reversedString.join('')

return result;
}

console.log(reverseString2("viki"));
