const combinationSum = (candidates, target) => {
    const output = [];
    // The goal is to use backtracking to find all combinations.
    const findCombination = (startingIndex, currentArr, remaining) => {
        if (remaining < 0) {
            return;
        }
        if (remaining === 0) {
            output.push([...currentArr]);
            return;
        }
        for (let i = startingIndex; i < candidates.length; i++) {
            findCombination(
                i,
                [...currentArr, candidates[i]],
                remaining - candidates[i]
            );
        }
    };
    findCombination(0, [], target);
    return output;
};

console.log(combinationSum([2, 3, 6, 7], 7));
