const smallestPosInt = (A) => {
    const sortedArr = A.sort((a, b) => a - b);
    let min = 1;
    for (let i = 0; i < A.length; i++) {
        if (sortedArr[i] > -1 && sortedArr[i] === min) {
            min++;
        }
    }

    return min;
};

console.log(smallestPosInt([-1, -3])); // 1
console.log(smallestPosInt([1, 3, 6, 4, 1, 2])); // 5
console.log(smallestPosInt([1, 2, 3])); // 4
console.log(smallestPosInt([10, 12, 14])); // 4
