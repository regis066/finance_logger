// const anchor = document.querySelector('a')!;
// if (anchor) {
//     console.log(anchor.href);
// }
// console.log(anchor.href);
    

// typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement; 
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log({
        type: `${type.value}`,
        tofrom: `${tofrom.value}`,
        details: `${details.value}`,
        amount: `${amount.value}`
    });
    
})
