const canFinish = (numCourses, prerequisites) => {
    let preMap = new Map(); // <Prereq, [Courses Array]>
    // In Degree allows us to track if a node has dependencies or not.
    let indegreeArray = Array(numCourses).fill(0); // Index
    let queue = [];
    for (let i = 0; i < prerequisites.length; i++) {
        let course = prerequisites[i][0];
        let prereq = prerequisites[i][1];
        if (!preMap.has(prereq)) {
            preMap.set(prereq, []);
        }
        let prereqArray = preMap.get(prereq);
        prereqArray.push(course);
        preMap.set(prereq, prereqArray);

        indegreeArray[course]++;
    }

    // queue contains nodes with no incoming edges
    for (let i = 0; i < indegreeArray.length; i++) {
        if (indegreeArray[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;

    while (queue.length) {
        count++;
        const course = queue.shift();
        if (preMap.has(course)) {
            for (const prereq of preMap.get(course)) {
                indegreeArray[prereq]--;
                if (indegreeArray[prereq] === 0) {
                    queue.push(prereq);
                }
            }
        }
    }

    return numCourses === count;
};

/*
    Time: O(V + E) or O(n)
    Space: O(n) n = prerequisites
 */

// console.log(canFinish(2, [[1, 0]])); // true
// console.log(
//     canFinish(5, [
//         [0, 1],
//         [0, 2],
//         [1, 3],
//         [1, 4],
//         [3, 4],
//     ])
// ); // true
// console.log(
//     canFinish(2, [
//         [1, 0],
//         [0, 1],
//     ])
// ); // false
console.log(
    canFinish(5, [
        [1, 4],
        [2, 4],
        [3, 1],
        [3, 2],
    ])
); // true
