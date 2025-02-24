function isValid(s: string): boolean {
    // Create a stack to keep track of opening brackets.
    let stack: string[] = [];

    // A mapping for the closing brackets to their corresponding opening brackets.
    const mapping: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    // Iterate over each character in the string.
    for (let char of s) {
        // If the character is an opening bracket, push it onto the stack.
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // If the stack is empty or the top of the stack doesn't match the corresponding opening bracket, it's invalid.
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        }
    }

    // If the stack is empty, every opening bracket was properly closed.
    return stack.length === 0;
}
