// Array.prototype.peek = () => this[this.length - 1];
Array.prototype.peek = function () {
    return this[this.length - 1];
};

Array.prototype.isEmpty = function () {
    return this.length === 0;
};

const isValid = (s) => {
    let stack = [];
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' && !stack.isEmpty() && stack.peek() === '(') {
            stack.pop();
        } else if (char === ']' && !stack.isEmpty() && stack.peek() === '[') {
            stack.pop();
        } else if (char === '}' && !stack.isEmpty() && stack.peek() === '{') {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid(']')); // false
