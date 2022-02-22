const getServedBuildings = (buildingCounts, routerLocations, routerRanges) => {
    let servedBuildings = 0;
    let dp = new Array(buildingCounts.length).fill(0);
    for (let i = 0; i < routerLocations.length; i++) {
        let routerRange = routerRanges[i];
        for (
            let j = routerLocations[i] - routerRange - 1;
            j < routerLocations[i] + routerRange;
            j++
        ) {
            if (j >= 0 && j < buildingCounts.length) {
                dp[j] = dp[j] + 1;
            }
        }
    }
    console.log(dp);
    for (let i = 0; i < buildingCounts.length; i++) {
        if (dp[i] >= buildingCounts[i]) {
            servedBuildings++;
        }
    }
    return servedBuildings;
};

console.log(getServedBuildings([1, 2, 1, 2, 2], [3, 1], [1, 2]));
/*
    buildingCount * routerRange
 */
