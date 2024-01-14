"use strict";
// const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
// typecasting
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log({
        type: `${type.value}`,
        tofrom: `${tofrom.value}`,
        details: `${details.value}`,
        amount: `${amount.value}`
    });
});
