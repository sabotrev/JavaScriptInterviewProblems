// Implement Function.prototype.bind()

/*
    const foo = function() {
        console.log(this.bar);
    }
    let baz = foo.bind({bar: 'hello'})
    baz(); // Hello
*/

Function.prototype.bind = function(context) {
    const fn = this;
    return function() {
        return fn.call(context);
    }
}

// OR... without attaching the prototype.
// function bind(fn, context) {
//     return function() {
//         return fn.call(context);
//     }
// }


const foo = function() {
    console.log(this.bar);
}
let baz = foo.bind({bar: 'hello'})
baz(); // Hello