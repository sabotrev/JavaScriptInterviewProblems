const tripleStep = (nSteps) => {
    if (nSteps < 0) {
        return 0;
    } else if (nSteps === 0) {
        return 1;
    } else {
        return tripleStep(nSteps - 1) + tripleStep(nSteps - 2) + tripleStep(nSteps - 3);
    }
}

console.log(tripleStep(3));