function lengthOfLastWord(s: string): number {
    // Start from the end of the string.
    let i = s.length - 1;

    // Skip any trailing spaces.
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the length of the last word.
    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}
