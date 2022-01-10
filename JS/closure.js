// https://dev.to/somedood/emulating-private-variables-in-javascript-with-closures-and-factory-functions-2314

// Closures for namespacing private functions
const createAnimal = (name, job) => {
    let _name = name;
    let _job = job;

    return {
        getName() {
            return _name;
        },
        getJob() {
            return _job;
        },
        setName(name) {
            _name = name;
        },
    };
};

const chicken = createAnimal('Chicken', 'Clucking');
console.log(chicken.getName());

class Animal {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name + ' ok';
    }
}
const horse = new Animal('horse');
console.log(horse.name);

// Closures for namespacing private functions
const jobSalary = () => {
    let salary = 100;
    let changeBy = (amount) => {
        salary += amount;
    }
    return {
        raise: () => changeBy(10),
        currentAmount: () => salary
    }
}
const janitorSalary = jobSalary();
console.log(janitorSalary.currentAmount());
janitorSalary.raise();
console.log(janitorSalary.currentAmount());

// Closures for function factories
const job = (department) => {
    return (title) => `${department} : ${title}`;
}
const sales = job('Sales');
console.log(sales('Chief of Sales'));

// Closure for function factory
const addHelper = (a) => {
    return (b) => a + b;
}
const add10 = addHelper(10);
console.log(add10(5));