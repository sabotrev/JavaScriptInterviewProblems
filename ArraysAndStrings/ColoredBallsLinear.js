Array.prototype.sortNumbers = function () {
    return this.sort((a, b) => b - a);
};
const maxProfit = (inventory, orders) => {
    // TODO
};

// console.log(maxProfit([2, 5], 4));
console.log(maxProfit([3, 5], 6));

/*
    Sum of Integers
    3(2+5)/2 = 28/2 = 14

    2(3+5)/2 = 16/2 = 8
    [3,3]
 */
