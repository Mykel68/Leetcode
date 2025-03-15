function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array to minimize binary search iterations.
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const x = nums1.length;
    const y = nums2.length;
    let low = 0, high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        // If partitionX is 0 it means nothing is on the left side. Use -Infinity for maxLeftX.
        const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        // If partitionX is at the end, there is nothing on the right side. Use Infinity for minRightX.
        const minRightX = partitionX === x ? Infinity : nums1[partitionX];

        const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minRightY = partitionY === y ? Infinity : nums2[partitionY];

        // Check if we have found the correct partition.
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // If the combined array length is even, median is the average of the two middle values.
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                // If odd, median is the max of left parts.
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Too far on the right side for partitionX. Move left.
            high = partitionX - 1;
        } else {
            // Too far on the left side for partitionX. Move right.
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}
