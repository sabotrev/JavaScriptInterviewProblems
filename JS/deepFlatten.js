const deepFlatten = (arr) => {
    let result = [];

    for (const arrElement of arr) {
        console.log(arrElement);
        if (Array.isArray(arrElement)) {
            result = [...result, ...deepFlatten(arrElement)];
        } else {
            result.push(arrElement);
        }
    }

    return result;
};


// console.log(deepFlatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]));


let temp = [1,2,[3,4, [5,6,7], 8], 9, 10];

const deepFlatten2 = (arr) => {

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(deepFlatten2(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }

    return res;
}

// console.log(deepFlatten2(temp));

const deepFlatten3 = (arr) => {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc = acc.concat(deepFlatten3(val));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
}

console.log(deepFlatten3(temp));
