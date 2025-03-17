function reverse(x: number): number {
    let rev = 0;
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31

    while (x !== 0) {
        const pop = x % 10;
        x = Math.trunc(x / 10);

        // Check for overflow before appending the digit.
        if (rev > Math.floor(INT_MAX / 10) || (rev === Math.floor(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        if (rev < Math.ceil(INT_MIN / 10) || (rev === Math.ceil(INT_MIN / 10) && pop < -8)) {
            return 0;
        }

        rev = rev * 10 + pop;
    }

    return rev;
}
