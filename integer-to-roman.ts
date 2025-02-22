function intToRoman(num: number): string {
    // Define numeral pairs sorted in descending order
    const romanPairs: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    let roman = "";

    // Loop through each numeral pair and subtract as many times as possible
    for (const [value, numeral] of romanPairs) {
        while (num >= value) {
            roman += numeral;
            num -= value;
        }
    }
    return roman;
}

// Test cases
console.log(intToRoman(3));    // Output: III
console.log(intToRoman(4));    // Output: IV
console.log(intToRoman(9));    // Output: IX
console.log(intToRoman(58));   // Output: LVIII
console.log(intToRoman(1994)); // Output: MCMXCIV
