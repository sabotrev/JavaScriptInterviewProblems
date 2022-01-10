const rightRotate = (arr, n) => {
    return [
        ...arr.slice(arr.length - n, arr.length),
        ...arr.slice(0, arr.length - n),
    ];
};

/*
    Time complexity of `slice()` is O(n)
 */

console.log(rightRotate([1, 2, 3, 4, 5], 3)); // [3,4,5,1,2]
console.log(rightRotate([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]
