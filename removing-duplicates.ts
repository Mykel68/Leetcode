function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;

    // Traverse the list until we reach the end.
    while (current !== null && current.next !== null) {
        // If the current node's value equals the next node's value, skip the next node.
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            // Otherwise, move to the next node.
            current = current.next;
        }
    }

    return head;
}
