const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            const left = arr[j];
            const right = arr[j + 1];
            if (left > right) {
                arr[j] = right;
                arr[j + 1] = left;
                isSwapped = true;
            }
        }

        if (isSwapped === false) {
            break;
        }
    }
    return arr;
};

/*
    Time: O(n^2)
    Space: O(1)
 */

console.log(bubbleSort([2, 8, 5, 3, 9, 4, 1]));
