const maxMin = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    const result = [];

    while (left < right) {
        result.push(arr[right], arr[left]);
        left++;
        right--;
    }

    if (arr.length % 2 !== 0) {
        result.push(arr[Math.floor(arr.length / 2)]);
    }

    return result;
};

console.log(maxMin([1, 2, 3, 4, 5])); // [5,1,4,2,3]
console.log(maxMin([1, 2, 3, 4])); // [4,1,3,2]
