function hammingWeight(n: number): number {
    let count = 0;
    while (n !== 0) {
        count++;
        n = n & (n - 1); // Clear the least significant bit set to 1.
    }
    return count;
}
