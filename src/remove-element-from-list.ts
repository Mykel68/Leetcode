function removeElement(nums: number[], val: number): number {
    // k will count the number of elements not equal to val.
    let k = 0;

    // Iterate over each element in the array.
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to val,
        // place it in the front part of the array.
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    // The first k elements of nums now hold all the values not equal to val.
    return k;
}
