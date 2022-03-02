const minSwaps = (data) => {
    let totalOnes = 0;
    let onesInWindow = 0;
    let maxOnesInWindow = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i] === 1) totalOnes++;
    }

    let left = 0;
    for (let right = 0; right < data.length; right++) {
        onesInWindow += data[right];
        if (right >= totalOnes) {
            onesInWindow -= data[left];
            left++;
        }
        maxOnesInWindow = Math.max(maxOnesInWindow, onesInWindow);
    }

    return totalOnes - maxOnesInWindow;
};

console.log(minSwaps([1, 0, 1, 0, 1])); // 1
// console.log(minSwaps([0, 0, 0, 1, 0])); // 0
// console.log(minSwaps([1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1])); // 3
console.log(
    minSwaps([
        1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0,
        1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1,
    ])
); // 8
