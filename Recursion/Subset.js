const subsets = (nums) => {
    let res = [];
    const generateSubsets = (index, currentSubset) => {
        res.push(currentSubset);

        for (let i = index; i < nums.length; i++) {
            generateSubsets(i + 1, [...currentSubset, nums[i]]);
        }
    };

    generateSubsets(0, []);

    return res;
};

/*
    Time: O(2^n)
    Space: O(n)
 */

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
