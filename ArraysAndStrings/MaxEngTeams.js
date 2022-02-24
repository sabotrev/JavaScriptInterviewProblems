/*
    Link: https://leetcode.com/discuss/interview-question/1688196/Amazon-or-Online-Assessment-or-Maximum-Number-of-Engineering-Teams

    You are given 3 inputs

    int: teamSize:: representing the number of engineers to complete a team, otherwise the team does not count towards total

    1 <= teamSize <= 10^4 unsure about constraint
    int: maxDiff:: representing the maximum allowed gap in skill between the least skilled engineer on a team and the most skilled on the team

    1 <= maxDiff <= 100 unsure about constraint
    array[int]: skill:: representing the pool of engineers to build teams from, skill[i] being the skill level an engineer i

    1 <= pool of enginers <= 10^4 unsure about constraint
    1 <= skill[i] <= 100 unsure about constraint
    what is the maximum number of teams that can be constructed from the pool of engineers, respecting the maxDiff rule for each team?
 */

const maxEngTeams = (teamSize, maxDiff, skillArr) => {
    if (teamSize === 1) {
        return skillArr.length;
    }

    let teamsCount = 0;
    skillArr.sort((a, b) => a - b);

    let left = 0;
    let right = 1;

    while (right < skillArr.length) {
        if (skillArr[right] - skillArr[left] > maxDiff) {
            left++;
        }

        if (right - left + 1 === teamSize) {
            teamsCount++;
            left = right + 1;
        }
        right++;
    }
    return teamsCount;
};

// console.log(maxEngTeams(1, 1, [34, 5, 72, 48, 15, 2])); // 6
// console.log(maxEngTeams(3, 20, [34, 5, 72, 48, 15, 2])); // 1, [[2, 5, 15]]
console.log(maxEngTeams(3, 25, [1, 7, 18, 32, 65, 72, 90, 98, 100, 113, 146])); // 3
