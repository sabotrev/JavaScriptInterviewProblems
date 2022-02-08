const twoSum2 = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }

        if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return null;
};

console.log(twoSum2([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum2([2, 3, 4], 6)); // [1,3]
console.log(twoSum2([-1, 0], -1)); // [1,2]
