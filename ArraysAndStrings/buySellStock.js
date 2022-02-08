const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        let currentProfit = price - minPrice;
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(maxProfit, currentProfit);
    }
    return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
