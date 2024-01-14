// const inputs = document.querySelectorAll("input");
// inputs.forEach(input => {
//     console.log(input);
// })
    

// Strict datatypes
// let age = 30;
// age = "yoshi";

// specifying the datatype of a parameter
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circ("hello")); No compilation

// arrays
// let names:any = ['luigi', 'yoshi', 'mario'];
// names.push("toad"); will compile
// names.push(30); will not compile
// names.push(30); will compile when we use any datatype

// console.log(names);


// let mixed = ["luigi", 30, "yoshi", "mario", 40];
// mixed.push("toad"); will compile if the array values are mixed
// mixed.push(50);


// objects

// let ninja = {
//     name: "mario",
//     belt: 'black',
//     age: 30
// }

// explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// array of strings
// let ninjas: string[] = [];

// ninjas.push("mario");

// union types
// let mixed: (string | number | boolean)[] = [];
// mixed.push("hello");
// mixed.push(40);
// mixed.push(false);

// Dynamic any type
// let mixed: any[] = [];

// blueprint of an object
// let ninja: { name: any, occupation: any, age: any };


// optional parameters in functions

// let add: Function;

// add = (a: number, b: number, c?: number | string) => {
//     console.log(a + b);
//     console.log(c);
// }

// add(10, 20);

// specifying the return type when a funciton is bigger
// add = (a: number, b: number, c?: number | string): number => {
//     return a + b;
// };


// TYPE ALIASE -> help yus reduce code duplication
// type StringOrNumber = string | number;
// let uid: StringOrNumber;
// type objWithName = { name: string, uid: StringOrNumber };

// function signatures

// let greet: (a: string, b: string) => void; a and b mean that those are 2 parameter

// greet = (name: string, gretting: string) => {
//     console.log(`${name} says ${gretting}`);
    
// }





