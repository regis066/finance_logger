import { Invoice } from "./classes/invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// typecasting
const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    

    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);

    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value , 'end');
    
});


// GENERICS
// let addUID = <T>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }

// let docOne = { name: "yoshi", age: 30 };
// let newDoc = addUID(docOne);
// let docTwo = addUID("hello"); we can't give a random ID to a string so to avoid this we use `extends object`

// console.log(newDoc.name);

// TURPLES
// let arr: [string, number, boolean];
// arr = ["hello", 30, false];




// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices);


