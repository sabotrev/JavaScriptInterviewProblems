// https://leetcode.com/discuss/interview-question/1759164/Amazon-or-OA-or-Get-heaviest-package
const getHeaviestPackage = (weights) => {
    for (let i = weights.length - 1; i > 0; i--) {
        if (weights[i - 1] < weights[i]) {
            // Combine
            let temp = weights[i];
            weights[i - 1] = weights[i - 1] + temp;
            weights.splice(i, 1);
        }
    }
    return Math.max(...weights);
};

console.log(getHeaviestPackage([2, 9, 10, 3, 7])); // 21
console.log(getHeaviestPackage([10, 5, 7])); // 22

/*
const getHeaviestPackage = (weights) => {
    let size = weights.length;
    let currWeight = weights[size - 1];
    let heaviestWeight = currWeight;
    for (let i = size; i > 0; i--) {
        if (currWeight > weights[i - 1]) {
            currWeight = currWeight + weights[i - 1];
        } else {
            currWeight = weights[i - 1];
        }
        heaviestWeight = Math.max(heaviestWeight, currWeight);
    }
    return heaviestWeight;
};
 */
