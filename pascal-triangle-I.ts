function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
        const row: number[] = [];
        // Each row has i+1 elements
        for (let j = 0; j <= i; j++) {
            // First and last elements of each row are always 1
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                // Each inner element is the sum of the two elements above it
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }

    return triangle;
}
