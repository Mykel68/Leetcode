function reverseBits(n: number): number {
    let reversed = 0;
    for (let i = 0; i < 32; i++) {
        // Shift reversed to the left to make room for the next bit.
        reversed = reversed << 1;
        // Append the least significant bit of n to reversed.
        reversed |= n & 1;
        // Shift n right to process the next bit.
        n = n >>> 1;
    }
    // Use >>> 0 to ensure the result is treated as an unsigned 32-bit integer.
    return reversed >>> 0;
}
