const maxArea = (h, w, horizontalCuts, verticalCuts) => {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);

    let topEdge = horizontalCuts[0];
    let bottomEdge = h - horizontalCuts[horizontalCuts.length - 1];
    let maxHeight = Math.max(topEdge, bottomEdge);

    let leftEdge = verticalCuts[0];
    let rightEdge = w - verticalCuts[verticalCuts.length - 1];
    let maxWidth = Math.max(leftEdge, rightEdge);

    for (let i = 1; i < horizontalCuts.length; i++) {
        let prevCut = horizontalCuts[i - 1];
        let currCut = horizontalCuts[i];
        maxHeight = Math.max(maxHeight, currCut - prevCut);
    }
    for (let i = 1; i < verticalCuts.length; i++) {
        let prevCut = verticalCuts[i - 1];
        let currCut = verticalCuts[i];
        maxWidth = Math.max(maxWidth, currCut - prevCut);
    }

    return (BigInt(maxHeight) * BigInt(maxWidth)) % BigInt(1e9 + 7);
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3])); // 4
console.log(maxArea(5, 4, [3, 1], [1])); // 6
