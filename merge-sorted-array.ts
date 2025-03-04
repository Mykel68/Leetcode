function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;          // Pointer for the end of the valid elements in nums1.
    let p2 = n - 1;          // Pointer for the end of nums2.
    let p = m + n - 1;       // Pointer for the end of nums1 (including extra space).

    // Merge nums1 and nums2, starting from the end.
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }

    // If there are any remaining elements in nums2, copy them.
    // (No need to copy nums1, as they are already in place.)
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
