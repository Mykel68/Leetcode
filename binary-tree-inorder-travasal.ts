function inorderTraversal(root: TreeNode | null): number[] {
    const stack: (TreeNode | null)[] = [];
    const result: number[] = [];
    let current: TreeNode | null = root;

    while (stack.length > 0 || current !== null) {
        // Reach the leftmost node of the current node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        // Current must be null at this point
        current = stack.pop()!;
        result.push(current.val); // Add the node's value
        // Visit the right subtree
        current = current.right;
    }

    return result;
}
