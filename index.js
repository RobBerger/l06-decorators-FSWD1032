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
// class Contact {
//     firstName: string;
//     lastName: string;
//     constructor(fname: string, lname: string) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     @wrapper
//     getFullName() {
//         return `Full Name: ${this.firstName} ${this.lastName}`;
//     }
//     @wrapper
//     greetName(greeting: string) {
//         console.log(`${greeting} ${this.firstName}`);
//     }
// }
// function wrapper(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalMethod = descriptor.value;
//     descriptor.value = function (...args: any) {
//         console.log(`Calling ${propertyKey}() with`, args);
//         const result = originalMethod.apply(this, args);
//         console.log(`${propertyKey}() finished and returned ${result}`);
//         return result;
//     };
//     return descriptor;
// }
// let contact = new Contact('Bob', 'Bobertson');
// contact.getFullName();
// contact.greetName('Howdy');
// function logger(target: any, key: PropertyKey) {
//     let value: any;
//     const getter = function() {
//         console.log(`Get called for ${String(key)}: ${value}`);
//         return value;
//       };
//     const setter = function(newVal: any) {
//         console.log(`Set called for ${String(key)}: Old Value: ${value} => New Value: ${newVal}`);
//         value = newVal;
//     };
//     Object.defineProperty(target, key, {
//       get: getter,
//       set: setter,
//       enumerable: true,
//       configurable: true
//     });
// }
// class Greeter {
//     @logger
//     greeting = 'Hello';
// }
// let greeter = new Greeter();
// console.log(`console.log("${greeter.greeting}")`);
// greeter.greeting = "Howdy!";
// console.log(`console.log("${greeter.greeting}")`);
function first() {
    console.log("first(): decorator applied");
    // return a decorator function
    return function (target, propertyKey, descriptor) {
        console.log("first(): decorator called");
    };
}
function second() {
    console.log("second(): decorator applied");
    // return a decorator function
    return function (target, propertyKey, descriptor) {
        console.log("second(): decorator called");
    };
}
class MyClass {
    exampleMethod() { }
}
__decorate([
    first(),
    second()
], MyClass.prototype, "exampleMethod", null);
