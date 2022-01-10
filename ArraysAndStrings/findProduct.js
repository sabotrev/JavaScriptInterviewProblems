const findProduct = (arr) => {
    const product = arr.reduce((acc, curr) => acc * curr);
    return arr.map((_, i) => {
        return product / (i + 1);
    });
};

const arr = [1, 2, 3, 4];
console.log(findProduct(arr)); // [24,12,8,6]
