function longestCommonPrefix(strs: string[]): string {
    // If the array is empty, there's no common prefix.
    if (strs.length === 0) return "";

    // Start by assuming the whole first string is the common prefix.
    let prefix = strs[0];

    // Iterate through all the strings in the array.
    for (let i = 1; i < strs.length; i++) {
        // While the current string doesn't start with the prefix...
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character.
            prefix = prefix.substring(0, prefix.length - 1);

            // If the prefix becomes empty, there is no common prefix.
            if (prefix === "") return "";
        }
    }
    return prefix;
}
