const person = {
    name: 'Trevor',
    getName: function () {
        return this.name;
    },
};

let interests = function (snack, hobby) {
    console.log(`${this.getName()} likes ${snack} and ${hobby}.`);
};

interests.call(person, 'chips', 'TV');
