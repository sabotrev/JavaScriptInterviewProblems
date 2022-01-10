const getByPath = (arr, obj) => {
    if (arr.length === 1) {
        return obj[arr[0]];
    }

    const first = arr[0];
    if (typeof obj[first] === 'object') {
        return getByPath(arr.slice(1), obj[first]);
    }
    return obj[first];
};

let testObj = {
    foo: 2,
    bar: 'car',
    // baz: { x: 'xx', y: 'yy', biz: { a: { b: 1, c: 2 } } },
    baz: { x: 'xx', y: 'yy', biz: { a: 56 } },
};

console.log(getByPath(['baz', 'biz', 'a'], testObj)); // 56
