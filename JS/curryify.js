function curry(func) {
    function curriedfunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return curriedfunc.bind(null, ...args);
        }
    }
    return curriedfunc;
}

const totalNum = (x, y, z) => {
    return x + y + z;
};
const curriedTotal = curry(totalNum);
console.log(curriedTotal(10)(20)(30));
