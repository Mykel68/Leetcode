
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Create a dummy node to simplify edge cases.
    const dummy = new ListNode(0);
    let current = dummy;

    // Traverse both lists until one is exhausted.
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach any remaining nodes from list1 or list2.
    current.next = list1 !== null ? list1 : list2;

    // Return the merged list, skipping the dummy node.
    return dummy.next;
}
