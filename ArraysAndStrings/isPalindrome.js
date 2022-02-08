String.prototype.isLetterOrNumber = function () {
    return this.toLowerCase() !== this.toUpperCase() || !isNaN(parseInt(this));
};

const isPalindrome = (s) => {
    let strArr = s.split('');
    let result = '';

    for (const char of strArr) {
        if (char.isLetterOrNumber()) {
            result += char.toLowerCase();
        }
    }

    let left = 0;
    let right = result.length - 1;
    while (left <= right) {
        if (result[left] !== result[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('0P')); // false
