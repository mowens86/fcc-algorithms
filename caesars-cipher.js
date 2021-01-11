function rot13(str) {
  // Empty array
  const adjustedNumbers = [];

  // Split into array
  const split = str.split("");

  // Loop through each one
  for (let letter in split) {

    // Turn number into ascii
    let rot = split[letter].charCodeAt();
    
    // Conditional for any number over 90
    if (rot > 77) {

    // Add 13
    let plusThirteen = rot + 13;

      // Reset math if numbers go over 90 and start at beginning of alphabet
      let temp = (plusThirteen - 90) + 64;

      // Push into adjustedNumbers array
      adjustedNumbers.push(temp);

      // Conditional for spaces and punctuation
    } else if (rot <= 64) {

      // Push any number under unicode of 64 and under into adjustedNumbers array 
      adjustedNumbers.push(rot);

    } else {
      
      // Add 13
      let plusThirteen = rot + 13;
      // Push into adjustedNumbers array
      adjustedNumbers.push(plusThirteen)
    }
  }
  
  // Convert from Unicode to Ascii chars
  let translation = String.fromCharCode.apply(null, adjustedNumbers);

  return translation;
}

rot13("SERR YBIR?");

/* JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

Passed
rot13("SERR CVMMN!") should decode to FREE PIZZA!

Passed
rot13("SERR YBIR?") should decode to FREE LOVE?

Passed
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

SOLVED */