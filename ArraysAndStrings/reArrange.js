const reArrange = (arr) => {
    let resultLeft = [];
    let resultRight = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            resultLeft.push(arr[i]);
        } else {
            resultRight.push(arr[i]);
        }
    }

    return [...resultLeft, ...resultRight];
};

/*
    Time: O(n)
 */

console.log(reArrange([10, -1, 20, 4, 5, -9, -6])); // [-1,-9,-6,10,20,4,5]

// Rearrange in place
// Space: O(1)
const reArrange2 = (arr) => {
    let leftMostIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i !== leftMostIndex) {
                // Swap left most with negative number
                let temp = arr[i];
                arr[i] = arr[leftMostIndex];
                arr[leftMostIndex] = temp;
            }
            leftMostIndex++;
        }
    }

    return arr;
};

console.log(reArrange2([10, -1, 20, 4, 5, -9, -6])); // [-1,-9,-6,10,20,4,5]
