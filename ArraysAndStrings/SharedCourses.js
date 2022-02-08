const sharedCourses = (coursePairs) => {
    const courseMap = new Map();
    for (const coursePair of coursePairs) {
        let studentId = parseInt(coursePair[0]);
        let course = coursePair[1];
        if (!courseMap.has(course)) {
            courseMap.set(course, [studentId]);
        } else {
            const valueArray = courseMap.get(course);
            valueArray.push(studentId);
            courseMap.set(course, valueArray);
        }
    }

    let result = {};

    for (const [course, studentIds] of courseMap) {
        if (studentIds.length > 1) {
            let studentIdsStr = studentIds.toString();
            if (!result[studentIdsStr]) {
                result[studentIdsStr] = [course];
            } else {
                let currentCourses = result[studentIdsStr];
                currentCourses.push(course);
                result[studentIdsStr] = currentCourses;
            }
        }
    }

    return result;
};

const studentCoursePairs = [
    ['58', 'Software Design'],
    ['58', 'Linear Algebra'],
    ['94', 'Art History'],
    ['94', 'Operating Systems'],
    ['17', 'Software Design'],
    ['58', 'Mechanics'],
    ['58', 'Economics'],
    ['17', 'Linear Algebra'],
    ['17', 'Political Science'],
    ['94', 'Economics'],
];
console.log(sharedCourses(studentCoursePairs));
/*
{
  '58,17': [ 'Software Design', 'Linear Algebra' ],
  '58,94': [ 'Economics' ]
}
 */
