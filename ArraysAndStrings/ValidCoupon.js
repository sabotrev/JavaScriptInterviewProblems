// https://leetcode.com/discuss/interview-experience/1470686/Amazon-Online-Assessment
Array.prototype.peek = function () {
    return this[this.length - 1];
};

const findValueDiscountCoupon = (discounts) => {
    let validArray = [];
    for (const discount of discounts) {
        let stack = [discount[0]];
        for (let i = 1; i < discount.length; i++) {
            let top = stack.peekEnd();
            if (discount[i] === top) {
                stack.pop();
            } else {
                stack.push(discount[i]);
            }
            console.log(stack);
        }
        if (stack.length > 0) {
            validArray.push(0);
        } else {
            validArray.push(1);
        }
    }
    return validArray;
};

// console.log(findValueDiscountCoupon(['abba', 'abca'])); // [1, 0]
console.log(findValueDiscountCoupon(['daabbd', 'abcd'])); // [1, 0]
