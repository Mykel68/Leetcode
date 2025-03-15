function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    // Loop until both lists are exhausted and no carry remains.
    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        // Update carry for next iteration.
        carry = Math.floor(sum / 10);
        // Create a new node with the digit value and move the pointer.
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummy.next;
}
