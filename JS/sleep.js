const sleep = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};

async function run() {
    console.log('Hi');
    await sleep(3000);
    console.log('Bye');
}

run().then((r) => console.log('End'));
