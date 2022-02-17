let obj = {
    title: '1st Layer',
    more: {
        title: '2nd Layer',
        more: {
            title: '3rd Layer',
            more: {
                title: '4th Layer',
                more: {
                    title: '5th Layer',
                    more: {
                        title: '6th Layer',
                    },
                },
            },
        },
    },
};

let arr = [[1, [2, [3, [4]]]]];

/*
    Can be used for objects and array
 */
const iterateRecursive = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] == 'object' && obj[key] !== null) {
            iterateRecursive(obj[key]);
        } else {
            // Do something
        }
    }
};

iterateRecursive(obj);
iterateRecursive(arr);
