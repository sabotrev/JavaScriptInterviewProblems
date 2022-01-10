const merge = (arr, leftArr, rightArr, leftSize, rightSize) => {
    let arrIndex = 0;
    let leftArrIndex = 0;
    let rightArrIndex = 0;

    // Check if in bounds
    while (leftArrIndex < leftSize && rightArrIndex < rightSize) {
        if (leftArr[leftArrIndex] < rightArr[rightArrIndex]) {
            arr[arrIndex] = leftArr[leftArrIndex];
            leftArrIndex++;
        } else {
            arr[arrIndex] = rightArr[rightArrIndex];
            rightArrIndex++;
        }
        arrIndex++;
    }

    // If elements in the left array are leftover then append them to array.
    while (leftArrIndex < leftSize) {
        arr[arrIndex++] = leftArr[leftArrIndex++];
    }
    // If elements in the right array are leftover then append them to array.
    while (rightArrIndex < rightSize) {
        arr[arrIndex++] = rightArr[rightArrIndex++];
    }

    return arr;
};

const mergeSort = (arr) => {
    const arrLength = arr.length;
    if (arrLength < 2) {
        return;
    }

    const midIndex = arrLength / 2;
    const leftArr = [...arr.slice(0, midIndex)];
    const rightArr = [...arr.slice(midIndex, arrLength)];

    mergeSort(leftArr);
    mergeSort(rightArr);

    return merge(arr, leftArr, rightArr, midIndex, arrLength - midIndex);
};

/*
    Time: O(n log n)
    Space: O(n)
 */
console.log(mergeSort([5, 1, 6, 2, 3, 4]));
