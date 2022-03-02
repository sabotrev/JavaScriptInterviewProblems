const maximumUnits = (boxTypes, truckSize) => {
    boxTypes.sort((a, b) => b[1] - a[1]);
    console.log(boxTypes);

    let units = 0;
    let boxes = 0;
    for (let i = 0; i < boxTypes.length; i++) {
        const [numberOfBoxes, numberOfUnits] = boxTypes[i];
        let tempUnits = numberOfBoxes * numberOfUnits;
        if (boxes + numberOfBoxes > truckSize) {
            // Cut off
            let diff = truckSize - boxes;
            while (diff > 0) {
                units += numberOfUnits;
                diff--;
            }
            break;
        }
        units += tempUnits;
        boxes += numberOfBoxes;
    }
    return units;
};

console.log(
    maximumUnits(
        [
            [1, 3],
            [2, 2],
            [3, 1],
        ],
        4
    )
); // 8

console.log(
    maximumUnits(
        [
            [5, 10],
            [2, 5],
            [4, 7],
            [3, 9],
        ],
        10
    )
); // 8
