function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    // 'i' is the slow-runner pointer, initialized at the first element.
    let i = 0;

    // 'j' is the fast-runner pointer that iterates over the array.
    for (let j = 1; j < nums.length; j++) {
        // If the current element is different from the last unique element,
        // move the slow pointer forward and update its value.
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    // The new length is the slow pointer index plus one.
    return i + 1;
}
