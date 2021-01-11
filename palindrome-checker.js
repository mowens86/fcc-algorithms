function palindrome(str) {
    const trimmed = str.replace(/\s+/g, '')
                      .replace(/[^0-9a-z]/gi, '')
                      .toLowerCase();
    const reversed = str.split("")
                        .reverse()
                        .join("")
                        .replace(/\W/g, '')
                        .replace(/[^0-9a-z]/gi, '')
                        .toLowerCase();
    if (trimmed === reversed) {
      return true;
    } else {
      return false;
    }
    
  }
  
  
  
  palindrome("A man, a plan, a canal. Panama");

  /**
   * JavaScript Algorithms and Data Structures Projects: Palindrome CheckerPassed
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
  
palindrome("eye") should return a boolean.

Passed
palindrome("eye") should return true.

Passed
palindrome("_eye") should return true.

Passed
palindrome("race car") should return true.

Passed
palindrome("not a palindrome") should return false.

Passed
palindrome("A man, a plan, a canal. Panama") should return true.

Passed
palindrome("never odd or even") should return true.

Passed
palindrome("nope") should return false.

Passed
palindrome("almostomla") should return false.

Passed
palindrome("My age is 0, 0 si ega ym.") should return true.

Passed
palindrome("1 eye for of 1 eye.") should return false.

Passed
palindrome("0_0 (: /-\ :) 0-0") should return true.

Passed
palindrome("five|\_/|four") should return false. */