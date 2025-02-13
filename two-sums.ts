// Function to find two numbers in an array that add up to a specific target number.
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }

        map.set(nums[i], i);
    }

    throw new Error("No two numbers add up to the target");
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
