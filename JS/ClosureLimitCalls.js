function limitedFun() {
    let limit = 3;
    let count = 0;

    function someFun() {
        if (count < limit) {
            console.log('Running function.');
            count++;
        } else {
            console.log('Limit hit.');
        }
    }

    return someFun;
}
let test = limitedFun();
test();
test();
test();
test();
test();

function limitFun(func, limit) {
    const args = arguments;
    let count = 0;
    return function () {
        if (count < limit) {
            func(args);
            count++;
        } else {
            console.log('Limit hit.');
        }
    };
}

const printOne = () => {
    console.log(1);
};

const printIt = limitFun(printOne, 2);
printIt();
printIt();
printIt();
