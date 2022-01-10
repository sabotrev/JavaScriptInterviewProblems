const firstUnique = (arr) => {
    const mapArr = new Map();
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (!mapArr.has(number)) {
            mapArr.set(number, 1);
        } else {
            mapArr.set(number, mapArr.get(number) + 1);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        if (mapArr.get(number) === 1) {
            return number;
        }
    }
};

console.log(firstUnique([9, 2, 3, 2, 6, 6])); // 9
