"use strict";
function identity(idObj) {
    let { value1, value2 } = idObj;
    console.log(value1 + ": " + typeof (value1));
    console.log(value2 + ": " + typeof (value2));
    return idObj;
}
const idObj1 = {
    value1: "Hello",
    value2: "World"
};
const idObj2 = {
    value1: 2,
    value2: true
};
console.log(identity(idObj1));
console.log(identity(idObj2));
