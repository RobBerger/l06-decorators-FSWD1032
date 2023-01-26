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

