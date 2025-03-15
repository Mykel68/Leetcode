function lengthOfLongestSubstring(s: string): number {
    const lastIndex = new Map<string, number>();
    let maxLen = 0;
    let start = 0; // Start index of the current window

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // If the character is found and is in the current window, move the start pointer.
        if (lastIndex.has(char) && lastIndex.get(char)! >= start) {
            start = lastIndex.get(char)! + 1;
        }
        // Update the last seen index of the character.
        lastIndex.set(char, i);
        // Update the maximum length found so far.
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
}
