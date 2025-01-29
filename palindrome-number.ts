// Given a positive integer x, return true if x has the same digits when written down in both decimal and binary forms; otherwise, return false.

// That is numbers that reads the same backwards or forwards eg. 121 and 12621.

// Algorithm:
// 1. Reverse the number
// 2. Compare the reversed number with the original number
function isPalindrome(x: number): boolean {
    let original = x
    let reversed = 0

    while (x > 0) {
        const digits = x % 10;
        reversed = reversed * 10 + digits;
        x = Math.floor(x / 10)
    }
    1
    return original === reversed
}

console.log(isPalindrome(121))
console.log(isPalindrome(12321))
console.log(isPalindrome(10))
console.log(isPalindrome(0))

