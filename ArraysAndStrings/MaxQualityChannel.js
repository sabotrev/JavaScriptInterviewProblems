// https://leetcode.com/discuss/interview-question/1540848/amazon-online-assessment
// https://leetcode.com/discuss/interview-question/1501588/amazon-online-assesment-3102021
const findMedian = (arr) => {
    let middleIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        // If even
        let firstMiddleValue = arr[middleIndex - 1];
        let secondMiddleValue = arr[middleIndex];
        return (firstMiddleValue + secondMiddleValue) / 2;
    } else {
        // If odd
        return arr[middleIndex];
    }
};

const maxQualityChannel = (packetsSize, packets, channels) => {
    if (packetsSize === channels) {
        return packets.reduce((acc, curr) => acc + curr);
    }
    packets.sort((a, b) => a - b);

    let result = 0;
    let right = packetsSize - 1;
    let n = channels;
    // for (let i = channels; i >= 0; i--) {
    //     if (i === 1) {
    //         result += findMedian(packets.slice(0, right + 1));
    //         break;
    //     }
    //     result += packets[right];
    //     right--;
    // }
    while (n-- > 1) {
        result += packets[right];
        right--;
    }
    result += findMedian(packets.slice(0, right + 1));

    return result;
};

console.log(maxQualityChannel(5, [2, 2, 1, 5, 3], 2));
/*
    7
    Explanation: One solution is to send packet {5} through one channel and {2, 2, 1, 3} through the other. The sum of quality is 5 + (2+2)/2 = 7
 */

// console.log(maxQualityChannel(3, [89, 48, 14], 3)); // 151, 89 + 48 + 14 = 151
console.log(maxQualityChannel(5, [1, 2, 3, 4, 5], 3)); // 11
