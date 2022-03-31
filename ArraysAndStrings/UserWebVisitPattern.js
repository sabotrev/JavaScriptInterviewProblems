const mostVisitedPattern = (username, timestamp, website) => {
    const entriesMap = timestamp
        .map((item, i) => [username[i], timestamp[i], website[i]])
        .sort((a, b) => a[1] - b[1]);
    console.log(entriesMap);

    const entriesByUsers = new Map();
    for (const [name, time, web] of entriesMap) {
        if (!entriesByUsers.has(name)) {
            entriesByUsers.set(name, [web]);
        } else {
            entriesByUsers.set(name, [...entriesByUsers.get(name), web]);
        }
    }
    console.log(entriesByUsers);

    let websitePatternMap = new Map();
    for (const [name, webArr] of entriesByUsers) {
        if (webArr.length < 3) {
            continue;
        }
        let tempSet = new Set();
        for (let i = 0; i < webArr.length - 2; i++) {
            for (let j = i + 1; j < webArr.length - 1; j++) {
                for (let k = j + 1; k < webArr.length; k++) {
                    const tempString = `${webArr[i]},${webArr[j]},${webArr[k]}`;
                    tempSet.add(tempString);
                }
            }
        }

        for (const value of tempSet) {
            if (!websitePatternMap.has(value)) {
                websitePatternMap.set(value, 1);
            } else {
                websitePatternMap.set(value, websitePatternMap.get(value) + 1);
            }
        }
    }
    console.log(websitePatternMap);

    let websitePatternArray = [];
    for (const [webs, count] of websitePatternMap) {
        websitePatternArray.push([webs, count]);
    }
    websitePatternArray.sort((a, b) => b[1] - a[1]);
    let topValues = [];
    let topScore = websitePatternArray[0][1];
    for (const [str, score] of websitePatternArray) {
        if (topScore === score) {
            topValues.push(str);
        }
    }
    topValues.sort();
    console.log(topValues);
    return topValues[0].split(',');
};

// const username = [
//     'joe',
//     'joe',
//     'joe',
//     'james',
//     'james',
//     'james',
//     'james',
//     'mary',
//     'mary',
//     'mary',
// ];
// const timestamp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const website = [
//     'home',
//     'about',
//     'career',
//     'home',
//     'cart',
//     'maps',
//     'home',
//     'home',
//     'about',
//     'career',
// ];
// const username = ['ua', 'ua', 'ua', 'ub', 'ub', 'ub'];
// const timestamp = [1, 2, 3, 4, 5, 6];
// const website = ['a', 'b', 'a', 'a', 'b', 'c'];

const username = [
    'h',
    'eiy',
    'cq',
    'h',
    'cq',
    'txldsscx',
    'cq',
    'txldsscx',
    'h',
    'cq',
    'cq',
];
const timestamp = [
    527896567, 334462937, 517687281, 134127993, 859112386, 159548699, 51100299,
    444082139, 926837079, 317455832, 411747930,
];
const website = [
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'hibympufi',
    'yljmntrclw',
    'hibympufi',
    'yljmntrclw',
];
console.log(mostVisitedPattern(username, timestamp, website));
