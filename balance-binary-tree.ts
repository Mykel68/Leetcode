function isBalanced(root: TreeNode | null): boolean {
    // Helper function returns the height of the subtree if balanced, otherwise -1.
    function checkHeight(node: TreeNode | null): number {
        if (node === null) return 0;

        const leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // Left subtree is unbalanced.

        const rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // Right subtree is unbalanced.

        // If the difference in height is more than 1, the tree is unbalanced.
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        // Return the height of the current node.
        return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(root) !== -1;
}
