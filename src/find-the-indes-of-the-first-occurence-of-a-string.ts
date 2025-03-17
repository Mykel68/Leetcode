function strStr(haystack: string, needle: string): number {
    // If needle is an empty string, return 0 as per problem statement.
    if (needle === "") return 0;

    const n = haystack.length;
    const m = needle.length;

    // Loop through the haystack until there's not enough characters left for needle.
    for (let i = 0; i <= n - m; i++) {
        // Check if the substring of haystack starting at i matches needle.
        if (haystack.substring(i, i + m) === needle) {
            return i;
        }
    }

    // If needle is not found, return -1.
    return -1;
}
