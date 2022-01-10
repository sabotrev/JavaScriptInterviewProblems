const buildMaxHeap = (arr) => {
    // Get index of the middle element
    let i = Math.floor(arr.length / 2 - 1);
    // let i = arr.length;
    // TODO: Left off here:
    // https://stackoverflow.com/questions/40822475/the-reason-of-calling-heapify-from-the-middle-of-the-array-when-building-a-heap
    // https://medium.com/@parulbaweja8/a-closer-look-at-heapsort-c83b331f8353

    // Build a max heap out of
    // All array elements passed in
    while (i >= 0) {
        heapify(arr, i, arr.length);
        i -= 1;
    }
    return arr;
};

const heapify = (arr, i, arrLen) => {
    var max = i; // Initialize max as root
    var left = 2 * i + 1; // left = 2*i + 1
    var right = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (left < arrLen && arr[left] > arr[max]) {
        max = left;
    }

    // If right child is larger than max so far
    if (right < arrLen && arr[right] > arr[max]) {
        max = right;
    }

    // If max is not root
    if (max != i) {
        var swap = arr[i];
        arr[i] = arr[max];
        arr[max] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, max, arrLen);
    }
}

const swap = (arr, firstItemIndex, lastItemIndex) => {
    const temp = arr[firstItemIndex];

    // Swap first and last items in the array
    arr[firstItemIndex] = arr[lastItemIndex];
    arr[lastItemIndex] = temp;
};

const heapSort = (arr) => {
    // Build max heap
    buildMaxHeap(arr);

    // Get the index of the last element
    lastElement = arr.length - 1;

    // Continue heap sorting until we have
    // One element left
    console.log(`1arr: ${arr}`);
    while (lastElement > 0) {
        // swap(arr, 0, lastElement);
        var swap = arr[0];
        arr[0] = arr[lastElement];
        arr[lastElement] = swap;
        heapify(arr, 0, lastElement);
        console.log(`arr: ${arr}`);
        lastElement -= 1;
    }

    // Return sorted array
    return arr;
};
// console.log(heapSort([3, 19, 1, 14, 8, 7]));
console.log(heapSort([2, 8, 5, 3, 9, 1]));
// console.log(buildMaxHeap([13, 1, 9, 7, 6, 3, 8, 88]));
