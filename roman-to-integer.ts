// Given a roman numeral, convert it to an integer.

// if a smaller numeral is followed by a larger numeral, they will be subtracted (i.e. IV is 4, V is 5, IX is 9, X is 10, L is 50, C is 100, D is 500, M is 1000).

// starting from the left, if the next character is larger in value, then increment by one. Otherwise, if the next character is smaller in value, then decrement by one.

function romanToInt(s: string) {
    const romanMap: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = romanMap[s[i]]

        if (current < prevValue) {
            total -= current
        } else {
            total += current
        }
        prevValue = current;
    }
    return total

};


// Example usage:
console.log(romanToInt("III"));   // Output: 3
console.log(romanToInt("IV"));    // Output: 4
console.log(romanToInt("IX"));    // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV"));// Output: 1994