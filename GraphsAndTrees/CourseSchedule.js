const canFinish = (numCourses, prerequisites) => {
    let preMap = new Map();
    let queue = [];
    for (let i = 0; i < prerequisites.length; i++) {
        let course = prerequisites[i][0];
        let prereq = prerequisites[i][1];
        if (!preMap.has(course)) {
            preMap.set(course, []);
        }
        let prereqArray = preMap.get(course);
        prereqArray.push(prereq);
        preMap.set(course, prereqArray);
    }
    for (let i = 0; i < prerequisites.length; i++) {
        if (!preMap.has(i)) {
            preMap.set(i, []);
            queue.unshift(i);
        }
    }

    console.log(preMap);
    console.log(queue);

    while (queue.length !== 0) {
        const top = queue.pop();

        for (let i = 0; i < prerequisites.length; i++) {
            let course = prerequisites[i][0];
            let prereq = prerequisites[i][1];
            if (prereq === top) {
                let prereqArray = preMap.get(course);
                prereqArray = removeFromArray(prereqArray, prereq);
                preMap.set(course, prereqArray);
                if (prereqArray.length === 0) {
                    queue.unshift(course);
                }
            }
        }
    }

    let count = 0;
    for (let [key, value] of preMap) {
        if (value.length === 0) {
            count++;
        } else {
            return false;
        }
    }

    return count === numCourses;
};

const removeFromArray = (arr, numberToRemove) => {
    return arr.filter((number) => number !== numberToRemove);
};

/*
    Time: O(V + E) or O(n)
    Space: O(n) n = prerequisites
 */

// console.log(canFinish(2, [[1, 0]])); // true
console.log(
    canFinish(5, [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [3, 4],
    ])
); // true
// console.log(
//     canFinish(2, [
//         [1, 0],
//         [0, 1],
//     ])
// ); // false
