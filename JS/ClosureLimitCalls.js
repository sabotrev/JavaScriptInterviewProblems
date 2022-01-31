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
