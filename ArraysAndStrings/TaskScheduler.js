const leastInterval = (tasks, n) => {
    const charMap = new Map();

    for (const task of tasks) {
        if (!charMap.has(task)) {
            charMap.set(task, 1);
        } else {
            charMap.set(task, charMap.get(task) + 1);
        }
    }

    let longest = Math.max(...charMap.values());

    let longestCount = 0;
    for (const [_, count] of charMap) {
        if (count === longest) {
            longestCount++;
        }
    }

    return Math.max((n + 1) * (longest - 1) + longestCount, tasks.length);
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // 8
