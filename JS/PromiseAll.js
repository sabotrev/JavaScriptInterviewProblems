/*
    Implement Promise.all
 */

const newPromiseAll = (promiseArray) => {
    const resultsArray = [];
    let promisesCompleted = 0;
    return new Promise((resolve, reject) => {
        promiseArray.forEach((promise, index) => {
            promise
                .then((value) => {
                    resultsArray[index] = value;
                    promisesCompleted++;

                    if (promisesCompleted === promiseArray.length) {
                        resolve(resultsArray);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
};

/*
    task() function is used to test newPromiseAll()
 */
function task(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}

const taskList = [task(1000), task(5000), task(3000)];
// returns promise with results in an array

newPromiseAll(taskList)
    .then((results) => {
        console.log('got results', results);
    })
    .catch(console.error);
