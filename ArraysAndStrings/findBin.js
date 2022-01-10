const findBin = (n) => {
    let result = [];
    let queue = [];
    let s1, s2;

    queue.unshift('1');
    for (let i = 0; i < n; i++) {
        console.log(`queue: `, queue);
        result.push(queue.pop());
        s1 = result[i] + '0';
        s2 = result[i] + '1';

        queue.unshift(s1);
        queue.unshift(s2);
    }

    return result;
};

// console.log(findBin(3)); // ["1","10","11"]
console.log(findBin(5)); // ["1","10","11", "100", "101"]
