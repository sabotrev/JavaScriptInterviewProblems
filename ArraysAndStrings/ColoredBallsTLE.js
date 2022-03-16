Array.prototype.sortNumbers = function () {
    return this.sort((a, b) => b - a);
};
const maxProfit = (inventory, orders) => {
    inventory.sortNumbers();
    let result = 0;
    for (let i = 0; i < orders; i++) {
        let front = inventory[0];
        inventory[0]--;
        result += front;
        inventory.sortNumbers();
    }
    return BigInt(result) % BigInt(10e9 + 7);
};

// console.log(maxProfit([2, 5], 4));
console.log(maxProfit([3, 5], 6));

/*
    Sum of Integers
    3(2+5)/2 = 28/2 = 14

    2(3+5)/2 = 16/2 = 8
    [3,3]
 */
