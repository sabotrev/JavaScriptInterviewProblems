const kthFactor = (n, k) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
    return k > arr.length ? -1 : arr[k - 1];
};

console.log(kthFactor(12, 3)); // 3
console.log(kthFactor(7, 2)); // 7
console.log(kthFactor(4, 4)); // -1
