function convert(s: string, numRows: number): string {
    // If there's only one row, the string remains unchanged.
    if (numRows === 1) return s;

    // Create an array to store the rows.
    const rows: string[] = [];
    // Initialize each row as an empty string.
    for (let i = 0; i < Math.min(numRows, s.length); i++) {
        rows[i] = "";
    }

    let currentRow = 0;
    let goingDown = false;

    // Build the zigzag pattern by iterating over the string.
    for (const char of s) {
        rows[currentRow] += char;
        // When at the first or last row, reverse the direction.
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        // Move to the next row in the appropriate direction.
        currentRow += goingDown ? 1 : -1;
    }

    // Concatenate all rows to get the final result.
    return rows.join("");
}
