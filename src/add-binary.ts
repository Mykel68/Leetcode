function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    // Process digits from the end to the beginning.
    while (i >= 0 || j >= 0 || carry !== 0) {
        let sum = carry;

        if (i >= 0) {
            sum += a[i] === '1' ? 1 : 0;
            i--;
        }
        if (j >= 0) {
            sum += b[j] === '1' ? 1 : 0;
            j--;
        }

        // Append the computed bit (sum modulo 2) to the result.
        result = (sum % 2).toString() + result;
        // Update the carry for the next iteration.
        carry = Math.floor(sum / 2);
    }

    return result;
}
