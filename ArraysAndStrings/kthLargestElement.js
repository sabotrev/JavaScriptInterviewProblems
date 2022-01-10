/*
    Heapify
        Time: O(log (n))
 */
const heapify = (arr, i, arrLength) => {
    let max = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < arrLength && arr[left] > arr[max]) {
        max = left;
    }
    if (right < arrLength && arr[right] > arr[max]) {
        max = right;
    }

    // If max has changed then swap
    if (max !== i) {
        let temp = arr[i];
        arr[i] = arr[max];
        arr[max] = temp;
        heapify(arr, max, arrLength);
    }
    return arr;
};

/*
    Build Max Heap
        Time: O(n)
 */
const buildMaxHeap = (arr) => {
    let mid = Math.floor(arr.length / 2) - 1;
    while (mid >= 0) {
        heapify(arr, mid, arr.length);
        mid -= 1;
    }
    return arr;
};

const kthLargestElement = (nums, k) => {
    const maxHeap = buildMaxHeap(nums); // Time: O(n)
    console.log(maxHeap);
    let max = 0;
    for (let i = 0; i < k; i++) {
        max = maxHeap[0];
        maxHeap[0] = maxHeap[maxHeap.length - 1];
        maxHeap.length--;
        heapify(maxHeap, 0, maxHeap.length); // rebuild heap
    }
    return max;
};

/*
    Time: O(n + k * log(n)) = buildMaxHeap() + k * heapify()
    Space: O(1)
 */

// console.log(kthLargestElement([9, 8, 5, 3, 2, 1], 2)); // 8
console.log(kthLargestElement([3, 2, 1, 5, 6, 4], 2)); // 5
// console.log(kthLargestElement([3,2,3,1,2,4,5,5,6], 4)); // 4
