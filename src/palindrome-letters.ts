function validPalindrome(s: string): boolean {
    // Initialize two pointers: one at the start and one at the end of the string.
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move the left pointer forward if the character is not alphanumeric.
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        // Move the right pointer backward if the character is not alphanumeric.
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare the characters in a case-insensitive manner.
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        // Move both pointers towards the center.
        left++;
        right--;
    }

    // If all corresponding characters match, s is a palindrome.
    return true;
}

// Helper function to check if a character is alphanumeric.
function isAlphaNumeric(char: string): boolean {
    const code = char.charCodeAt(0);
    // Check for digits (0-9)
    if (code >= 48 && code <= 57) return true;
    // Check for uppercase letters (A-Z)
    if (code >= 65 && code <= 90) return true;
    // Check for lowercase letters (a-z)
    if (code >= 97 && code <= 122) return true;
    return false;
}
