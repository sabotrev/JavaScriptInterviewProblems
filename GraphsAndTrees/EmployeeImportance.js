class Employee {
    constructor(id, importance, subordinates) {
        this.id = id;
        this.importance = importance;
        this.subordinates = subordinates;
    }
}

const GetImportance = (employees, id) => {
    let value = 0;
    let headEmployee = employees.find((item) => item.id === id);
    let queue = [headEmployee];

    while (queue.length > 0) {
        let employee = queue.pop();
        value += employee.importance;
        for (const subordinateId of employee.subordinates) {
            let subordinate = employees.find(
                (item) => item.id === subordinateId
            );
            queue.unshift(subordinate);
        }
    }

    return value;
};

const employee1 = new Employee(1, 5, [2, 3]);
const employee2 = new Employee(2, 3, []);
const employee3 = new Employee(3, 3, []);
console.log(GetImportance([employee1, employee2, employee3], 1));
