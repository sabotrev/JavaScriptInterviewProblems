// programcreek.com/2012/12/leetcode-3sum/
const threeSum = (nums) => {
    let result = [];
    if (nums === null || nums.length < 3) {
        return result;
    }

    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        // Make sure you're not looking at duplicates in the front.
        if (i === 0 || (i > 0 && nums[i] !== nums[i-1])) {
            let leftIndex = i + 1;
            let rightIndex = nums.length - 1;
            const sum = 0 - nums[i];

            while (leftIndex < rightIndex) {
                let leftValue = nums[leftIndex];
                let rightValue = nums[rightIndex];
                // Make sure you're not looking at duplicates in the end.
                if (rightIndex < nums.length - 1 && rightValue === nums[rightIndex + 1]) {
                    rightIndex--;
                    continue;
                }

                if (leftValue + rightValue === sum) {
                    result.push([nums[i], leftValue, rightValue]);
                    leftIndex++;
                    rightIndex--;
                } else if (leftValue + rightValue > sum) {
                    rightIndex--;
                } else {
                    leftIndex++
                }
            }
        }
    }
    return result;
}

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
 */
console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]