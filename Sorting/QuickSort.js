const partition = (arr, leftIndex, rightIndex) => {
    const pivotValue = arr[Math.floor((leftIndex + rightIndex) / 2)];

    while (leftIndex <= rightIndex) {
        // Move pointers to each other
        while (arr[leftIndex] < pivotValue) {
            // Will break when element is larger than pivot.
            leftIndex++;
        }
        while (arr[rightIndex] > pivotValue) {
            // Will break when element is smaller than pivot.
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            // Swap
            let temp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = temp;

            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex; // Return the pivot point.
};

const quickSort = (arr, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return;
    }

    const index = partition(arr, leftIndex, rightIndex);
    quickSort(arr, leftIndex, index - 1);
    quickSort(arr, index, rightIndex);

    return arr;
};

const unsortedArr = [6, 3, 9, 8, 5, 2, 7, 1, 15];
console.log(quickSort(unsortedArr, 0, unsortedArr.length - 1));
