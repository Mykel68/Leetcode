function mySqrt(x: number): number {
    // Handle edge cases where x is 0 or 1.
    if (x < 2) return x;

    // Set the initial binary search range.
    let left = 1;
    let right = Math.floor(x / 2);

    while (left <= right) {
        // Compute mid to avoid potential overflow.
        const mid = Math.floor((left + right) / 2);

        // Check if mid is the square root:
        // mid <= x/mid ensures mid * mid <= x without overflow,
        // and (mid + 1) > x/(mid + 1) ensures (mid+1)^2 > x.
        if (mid <= x / mid && (mid + 1) > x / (mid + 1)) {
            return mid;
        } else if (mid > x / mid) {
            // mid^2 is too large, search in the left half.
            right = mid - 1;
        } else {
            // mid^2 is too small, search in the right half.
            left = mid + 1;
        }
    }

    // Return right as the integer square root.
    return right;
}
