// Write a function that returns the year with the most people alive
// This data represents a set of people and the year they were born and died
// [[1911, 1923], [1914, 1928], [1904, 1942], [1909, 1909], [1872, 1955], [1935, 2002], [1919, 1926], [1923, 1924]]

// 0 birth
// 1 death
// Data set is a single person.

const data = [
    [1911, 1923],
    [1914, 1928],
    [1904, 1942],
    [1909, 1909],
    [1872, 1955],
    [1935, 2002],
    [1919, 1926],
    [1923, 1924],
];

/*
  Looping over years vs. looping over people
*/

const yearWithMostPeopleAlive = (dataSet) => {
    let maxYear;
    let maxCount = 0;
    const peopleCountAlive = new Map();
    for (const item of dataSet) {
        const birthYear = item[0];
        const deathYear = item[1];
        for (let i = birthYear; i < deathYear + 1; i++) {
            if (!peopleCountAlive.has(i)) {
                peopleCountAlive.set(i, 1);
            } else {
                peopleCountAlive.set(i, peopleCountAlive.get(i) + 1);
            }
            if (peopleCountAlive.get(i) > maxCount) {
                maxCount = peopleCountAlive.get(i);
                maxYear = i;
            }
        }
    }

    return maxYear;
};

console.log(yearWithMostPeopleAlive(data));
