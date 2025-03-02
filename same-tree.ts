function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // If both nodes are null, trees are identical.
    if (!p && !q) return true;

    // If one of the nodes is null or values do not match, trees are not identical.
    if (!p || !q || p.val !== q.val) return false;

    // Recursively compare left subtrees and right subtrees.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
