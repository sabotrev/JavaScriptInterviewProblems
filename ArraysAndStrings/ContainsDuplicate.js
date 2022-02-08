const containsDuplicate = (nums) => {
    return new Set([...nums]).size !== nums.length;
};

/*
    Time: O(n)
    Space: O(n)
 */

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
