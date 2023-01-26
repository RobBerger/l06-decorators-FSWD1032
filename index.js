"use strict";
// interface Identity <T, U> {
//     value1: T,
//     value2: U
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
// class Identity<T> {
//     value: T;
//     constructor(initialVal: T) {
//      this.value = initialVal;
//     }
//     getValue(): T {
//         return this.value;
//     }
// }
// let myVal = new Identity<number>(5);
// let result: number = myVal.getValue();
// console.log(result);
class Contact {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    getFullName() {
        return `Full Name: ${this.firstName} ${this.lastName}`;
    }
    greetName(greeting) {
        console.log(`${greeting} ${this.firstName}`);
    }
}
__decorate([
    wrapper
], Contact.prototype, "getFullName", null);
__decorate([
    wrapper
], Contact.prototype, "greetName", null);
function wrapper(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey}() with`, args);
        const result = originalMethod.apply(this, args);
        console.log(`${propertyKey}() finished and returned ${result}`);
        return result;
    };
    return descriptor;
}
let contact = new Contact('Bob', 'Bobertson');
contact.getFullName();
contact.greetName('Howdy');
