const longestConsecutiveSequence = (nums) => {
    let numSet = new Set(nums);
    let longestSequence = 0;

    for (const num of nums) {
        if (!numSet.has(num - 1)) {
            // Start of new sequence
            let currentLength = 0;
            while (numSet.has(num + currentLength)) {
                currentLength += 1;
            }
            longestSequence = Math.max(longestSequence, currentLength);
        }
    }

    return longestSequence;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(nums));
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutiveSequence(nums));
