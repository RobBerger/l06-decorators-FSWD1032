// interface Identity <T, U> {
//     value1: T,
//     value2: U
// }

// function identity<T,U>(idObj: Identity<T, U>): Identity<T,U> {
//     let {value1, value2} = idObj;
//     console.log(value1 +": " + typeof(value1));
//     console.log(value2 +": " + typeof(value2));
//     return idObj;
// }

// const idObj1 = {
//     value1: "Hello",
//     value2: "World"
// };

// const idObj2 = {
//     value1: 2,
//     value2: true
// };

// console.log(identity(idObj1));
// console.log(identity(idObj2));

class Identity<T> {
    value: T;
    
    constructor(initialVal: T) {
     this.value = initialVal;
    }

    getValue(): T {
        return this.value;
    }
}

let myVal = new Identity<number>(5);
let result: number = myVal.getValue();
console.log(result);