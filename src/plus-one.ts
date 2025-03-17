function plusOne(digits: number[]): number[] {
    let carry = 1; // Start with a carry of 1 to add one to the number.

    // Process the array from rightmost digit to leftmost.
    for (let i = digits.length - 1; i >= 0; i--) {
        const sum = digits[i] + carry; // Add the current digit and carry.
        digits[i] = sum % 10;          // Update the digit to be the remainder.
        carry = Math.floor(sum / 10);  // Calculate the new carry.

        // If there's no carry, no need to continue.
        if (carry === 0) {
            break;
        }
    }

    // If carry remains (e.g., when all digits were 9), add it to the front.
    if (carry > 0) {
        digits.unshift(carry);
    }

    return digits;
}
