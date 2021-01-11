function convertToRoman(num) {
    const pairs = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I" 
    }
     const numbers = Array.from(Object.keys(pairs)).reverse();
     const romans = Array.from(Object.values(pairs)).reverse();

    let romanized =  '';

    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] <= num) {
            romanized += romans[i];
            num -= numbers[i];
        }
    }
    return romanized;

}

convertToRoman(39);

/**
 * convertToRoman(2) should return "II".

Passed
convertToRoman(3) should return "III".

Passed
convertToRoman(4) should return "IV".

Passed
convertToRoman(5) should return "V".

Passed
convertToRoman(9) should return "IX".

Passed
convertToRoman(12) should return "XII".

Passed
convertToRoman(16) should return "XVI".

Passed
convertToRoman(29) should return "XXIX".

Passed
convertToRoman(44) should return "XLIV".

Passed
convertToRoman(45) should return "XLV"

Passed
convertToRoman(68) should return "LXVIII"

Passed
convertToRoman(83) should return "LXXXIII"

Passed
convertToRoman(97) should return "XCVII"

Passed
convertToRoman(99) should return "XCIX"

Passed
convertToRoman(400) should return "CD"

Passed
convertToRoman(500) should return "D"

Passed
convertToRoman(501) should return "DI"

Passed
convertToRoman(649) should return "DCXLIX"

Passed
convertToRoman(798) should return "DCCXCVIII"

Passed
convertToRoman(891) should return "DCCCXCI"

Passed
convertToRoman(1000) should return "M"

Passed
convertToRoman(1004) should return "MIV"

Passed
convertToRoman(1006) should return "MVI"

Passed
convertToRoman(1023) should return "MXXIII"

Passed
convertToRoman(2014) should return "MMXIV"

Passed
convertToRoman(3999) should return "MMMCMXCIX"
 */