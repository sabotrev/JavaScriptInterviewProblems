const mergeSortedArrays = (arr1, arr2) => {
    let result = [];

    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i <= arr1.length - 1) {
        let temp = arr1.slice(i);
        result = [...result, ...temp];
    } else if (j <= arr2.length - 1) {
        let temp = arr2.slice(j);
        result = [...result, ...temp];
    }

    return result;
};

/*
    Time: O(n + m)
    Space: O(n + m)
 */

const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];
console.log(mergeSortedArrays(arr1, arr2)); // [1,2,3,4,5,6,7,8]
